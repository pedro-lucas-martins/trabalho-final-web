import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSessaoEstudoDto } from './dto/create-sessao-estudo.dto';
import { UpdateSessaoEstudoDto } from './dto/update-sessao-estudo.dto';

@Injectable()
export class SessaoEstudoService {
  constructor(private prisma: PrismaService) {}

  async create(createSessaoEstudoDto: CreateSessaoEstudoDto) {
    return this.prisma.sessaoEstudo.create({
      data: {
        ...createSessaoEstudoDto,
        dataInicio: new Date(createSessaoEstudoDto.dataInicio),
        dataFim: new Date(createSessaoEstudoDto.dataFim),
      },
      include: {
        topico: true,
      },
    });
  }

  async findAll() {
    return this.prisma.sessaoEstudo.findMany({
      include: {
        topico: true,
      },
      orderBy: {
        dataInicio: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const sessao = await this.prisma.sessaoEstudo.findUnique({
      where: { id },
      include: {
        topico: true,
      },
    });

    if (!sessao) {
      throw new NotFoundException(`Sessão de estudo com ID ${id} não encontrada`);
    }

    return sessao;
  }

  async findByTopico(topicoId: string) {
    return this.prisma.sessaoEstudo.findMany({
      where: { topicoId },
      orderBy: {
        dataInicio: 'desc',
      },
    });
  }

  async findByDateRange(startDate: Date, endDate: Date) {
    return this.prisma.sessaoEstudo.findMany({
      where: {
        dataInicio: {
          gte: startDate,
        },
        dataFim: {
          lte: endDate,
        },
      },
      include: {
        topico: true,
      },
      orderBy: {
        dataInicio: 'asc',
      },
    });
  }

  async update(id: string, updateSessaoEstudoDto: UpdateSessaoEstudoDto) {
    await this.findOne(id);

    const data: any = { ...updateSessaoEstudoDto };
    if (updateSessaoEstudoDto.dataInicio) {
      data.dataInicio = new Date(updateSessaoEstudoDto.dataInicio);
    }
    if (updateSessaoEstudoDto.dataFim) {
      data.dataFim = new Date(updateSessaoEstudoDto.dataFim);
    }

    return this.prisma.sessaoEstudo.update({
      where: { id },
      data,
      include: {
        topico: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.sessaoEstudo.delete({
      where: { id },
    });
  }
}

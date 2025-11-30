import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/update-topico.dto';

@Injectable()
export class TopicoService {
  constructor(private prisma: PrismaService) {}

  async create(createTopicoDto: CreateTopicoDto) {
    // Extraímos o materiaId e deixamos o resto das propriedades em 'dadosTopico'
    const { materiaId, ...dadosTopico } = createTopicoDto;

    return this.prisma.topico.create({
      data: {
        ...dadosTopico,
        // Usamos 'connect' para fazer a relação com a tabela de Materia
        materia: {
          connect: { id: materiaId },
        },
      },
      include: {
        recursos: true,
        sessoesEstudo: true,
      },
    });
  }

  async findAll() {
    return this.prisma.topico.findMany({
      include: {
        recursos: true,
        sessoesEstudo: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const topico = await this.prisma.topico.findUnique({
      where: { id },
      include: {
        recursos: true,
        sessoesEstudo: true,
        materia: true,
      },
    });

    if (!topico) {
      throw new NotFoundException(`Tópico com ID ${id} não encontrado`);
    }

    return topico;
  }

  async findByMateria(materiaId: string) {
    return this.prisma.topico.findMany({
      where: { materiaId },
      include: {
        recursos: true,
        sessoesEstudo: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(id: string, updateTopicoDto: UpdateTopicoDto) {
    await this.findOne(id);

    return this.prisma.topico.update({
      where: { id },
      data: updateTopicoDto,
      include: {
        recursos: true,
        sessoesEstudo: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.topico.delete({
      where: { id },
    });
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';

@Injectable()
export class RecursoService {
  constructor(private prisma: PrismaService) {}

  async create(createRecursoDto: CreateRecursoDto) {
    return this.prisma.recurso.create({
      data: createRecursoDto,
      include: {
        topico: true,
      },
    });
  }

  async findAll() {
    return this.prisma.recurso.findMany({
      include: {
        topico: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const recurso = await this.prisma.recurso.findUnique({
      where: { id },
      include: {
        topico: true,
      },
    });

    if (!recurso) {
      throw new NotFoundException(`Recurso com ID ${id} não encontrado`);
    }

    return recurso;
  }

  async findByTopico(topicoId: string) {
    return this.prisma.recurso.findMany({
      where: { topicoId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(id: string, updateRecursoDto: UpdateRecursoDto) {
    await this.findOne(id);

    return this.prisma.recurso.update({
      where: { id },
      data: updateRecursoDto,
      include: {
        topico: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.recurso.delete({
      where: { id },
    });
  }
}

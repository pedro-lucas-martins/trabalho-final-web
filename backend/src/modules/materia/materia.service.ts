import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
  constructor(private prisma: PrismaService) {}

  async create(createMateriaDto: CreateMateriaDto) {
    return this.prisma.materia.create({
      data: createMateriaDto,
      include: {
        topicos: true,
      },
    });
  }

  async findAll() {
    return this.prisma.materia.findMany({
      include: {
        topicos: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const materia = await this.prisma.materia.findUnique({
      where: { id },
      include: {
        topicos: {
          include: {
            recursos: true,
            sessoesEstudo: true,
          },
        },
      },
    });

    if (!materia) {
      throw new NotFoundException(`Matéria com ID ${id} não encontrada`);
    }

    return materia;
  }

  async update(id: string, updateMateriaDto: UpdateMateriaDto) {
    const materia = await this.findOne(id);

    return this.prisma.materia.update({
      where: { id },
      data: updateMateriaDto,
      include: {
        topicos: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.materia.delete({
      where: { id },
    });
  }

  async getProgress(id: string) {
    const materia = await this.findOne(id);

    if (materia.topicos.length === 0) {
      return {
        total: 0,
        concluidos: 0,
        percentual: 0,
      };
    }

    const concluidos = materia.topicos.filter(
      (t) => t.status === 'CONCLUIDO',
    ).length;

    return {
      total: materia.topicos.length,
      concluidos,
      percentual: Math.round((concluidos / materia.topicos.length) * 100),
    };
  }
}

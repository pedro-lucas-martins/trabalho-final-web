import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Controller('api/materias')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  create(@Body() createMateriaDto: CreateMateriaDto) {
    return this.materiaService.create(createMateriaDto);
  }

  @Get()
  findAll() {
    return this.materiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaService.findOne(id);
  }

  @Get(':id/progress')
  getProgress(@Param('id') id: string) {
    return this.materiaService.getProgress(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateMateriaDto: UpdateMateriaDto,
  ) {
    return this.materiaService.update(id, updateMateriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaService.remove(id);
  }
}

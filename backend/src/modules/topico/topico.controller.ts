import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TopicoService } from './topico.service';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/update-topico.dto';

@Controller('api/topicos')
export class TopicoController {
  constructor(private readonly topicoService: TopicoService) {}

  @Post()
  create(@Body() createTopicoDto: CreateTopicoDto) {
    return this.topicoService.create(createTopicoDto);
  }

  @Get()
  findAll() {
    return this.topicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicoService.findOne(id);
  }

  @Get('materia/:materiaId')
  findByMateria(@Param('materiaId') materiaId: string) {
    return this.topicoService.findByMateria(materiaId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTopicoDto: UpdateTopicoDto,
  ) {
    return this.topicoService.update(id, updateTopicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicoService.remove(id);
  }
}

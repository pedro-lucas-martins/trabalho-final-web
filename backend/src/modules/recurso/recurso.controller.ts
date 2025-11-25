import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { CreateRecursoDto } from './dto/create-recurso.dto';
import { UpdateRecursoDto } from './dto/update-recurso.dto';

@Controller('api/recursos')
export class RecursoController {
  constructor(private readonly recursoService: RecursoService) {}

  @Post()
  create(@Body() createRecursoDto: CreateRecursoDto) {
    return this.recursoService.create(createRecursoDto);
  }

  @Get()
  findAll() {
    return this.recursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoService.findOne(id);
  }

  @Get('topico/:topicoId')
  findByTopico(@Param('topicoId') topicoId: string) {
    return this.recursoService.findByTopico(topicoId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecursoDto: UpdateRecursoDto,
  ) {
    return this.recursoService.update(id, updateRecursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoService.remove(id);
  }
}

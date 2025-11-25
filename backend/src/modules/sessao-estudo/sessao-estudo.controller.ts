import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SessaoEstudoService } from './sessao-estudo.service';
import { CreateSessaoEstudoDto } from './dto/create-sessao-estudo.dto';
import { UpdateSessaoEstudoDto } from './dto/update-sessao-estudo.dto';

@Controller('api/sessoes')
export class SessaoEstudoController {
  constructor(private readonly sessaoEstudoService: SessaoEstudoService) {}

  @Post()
  create(@Body() createSessaoEstudoDto: CreateSessaoEstudoDto) {
    return this.sessaoEstudoService.create(createSessaoEstudoDto);
  }

  @Get()
  findAll(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    if (startDate && endDate) {
      return this.sessaoEstudoService.findByDateRange(
        new Date(startDate),
        new Date(endDate),
      );
    }
    return this.sessaoEstudoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessaoEstudoService.findOne(id);
  }

  @Get('topico/:topicoId')
  findByTopico(@Param('topicoId') topicoId: string) {
    return this.sessaoEstudoService.findByTopico(topicoId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSessaoEstudoDto: UpdateSessaoEstudoDto,
  ) {
    return this.sessaoEstudoService.update(id, updateSessaoEstudoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessaoEstudoService.remove(id);
  }
}

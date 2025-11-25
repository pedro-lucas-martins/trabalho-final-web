import { PartialType } from '@nestjs/mapped-types';
import { CreateSessaoEstudoDto } from './create-sessao-estudo.dto';

export class UpdateSessaoEstudoDto extends PartialType(CreateSessaoEstudoDto) {}

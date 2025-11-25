import { IsString, IsEnum, IsUUID, MinLength, MaxLength } from 'class-validator';

export enum PrioridadeEnum {
  BAIXA = 'BAIXA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
}

export enum StatusEnum {
  NAO_INICIADO = 'NAO_INICIADO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  CONCLUIDO = 'CONCLUIDO',
}

export class CreateTopicoDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  titulo: string;

  @IsEnum(PrioridadeEnum)
  prioridade: PrioridadeEnum;

  @IsEnum(StatusEnum)
  status: StatusEnum;

  @IsUUID()
  materiaId: string;
}

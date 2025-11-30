import { IsEnum, IsOptional, IsString, IsDateString } from 'class-validator';

// Ajuste estes valores conforme o seu Enum no schema.prisma
export enum StatusSessaoEnum {
  NAO_INICIADO = 'NAO_INICIADO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  CONCLUIDO = 'CONCLUIDO',
}

export class UpdateSessaoEstudoDto {
  @IsOptional()
  @IsEnum(StatusSessaoEnum)
  status?: StatusSessaoEnum;

  @IsOptional()
  @IsString()
  anotacoes?: string;

  @IsOptional()
  @IsDateString()
  dataInicio: string;

  @IsOptional()
  @IsDateString()
  dataFim: string;
}
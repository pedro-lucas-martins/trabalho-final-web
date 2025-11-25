import { IsString, IsDateString, IsUUID, MinLength, MaxLength } from 'class-validator';

export class CreateSessaoEstudoDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  titulo: string;

  @IsDateString()
  dataInicio: string;

  @IsDateString()
  dataFim: string;

  @IsUUID()
  topicoId: string;
}

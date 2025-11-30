import {
  IsString,
  IsDateString,
  IsUUID,
  MinLength,
  MaxLength,
  IsNotEmpty,
} from "class-validator";

export class CreateSessaoEstudoDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  titulo: string;

  @IsDateString()
  dataInicio: string;

  @IsDateString()
  dataFim: string;

  @IsString()
  @IsNotEmpty()
  topicoId: string;
}

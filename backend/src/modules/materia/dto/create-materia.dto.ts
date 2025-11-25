import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  nome: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  descricao?: string;
}

import { IsString, IsUrl, IsUUID, MinLength, MaxLength } from 'class-validator';

export class CreateRecursoDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  titulo: string;

  @IsUrl()
  url: string;

  @IsUUID()
  topicoId: string;
}

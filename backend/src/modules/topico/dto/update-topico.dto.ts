import { PartialType } from "@nestjs/mapped-types";
import { CreateTopicoDto } from "./create-topico.dto";
import { IsEnum, IsOptional } from "class-validator";

// Precisamos importar o Enum original para validar
import { StatusEnum } from "./create-topico.dto";

export class UpdateTopicoDto extends PartialType(CreateTopicoDto) {
  // É crucial reforçar a regra aqui se o PartialType não estiver pegando automático
  @IsOptional()
  @IsEnum(StatusEnum)
  status?: StatusEnum;
}

import { Module } from '@nestjs/common';
import { SessaoEstudoService } from './sessao-estudo.service';
import { SessaoEstudoController } from './sessao-estudo.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SessaoEstudoController],
  providers: [SessaoEstudoService],
})
export class SessaoEstudoModule {}

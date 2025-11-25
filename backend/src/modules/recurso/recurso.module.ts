import { Module } from '@nestjs/common';
import { RecursoService } from './recurso.service';
import { RecursoController } from './recurso.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RecursoController],
  providers: [RecursoService],
})
export class RecursoModule {}

import { Module } from '@nestjs/common';
import { TopicoService } from './topico.service';
import { TopicoController } from './topico.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TopicoController],
  providers: [TopicoService],
})
export class TopicoModule {}

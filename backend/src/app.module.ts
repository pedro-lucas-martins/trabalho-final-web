import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MateriaModule } from './modules/materia/materia.module';
import { TopicoModule } from './modules/topico/topico.module';
import { RecursoModule } from './modules/recurso/recurso.module';
import { SessaoEstudoModule } from './modules/sessao-estudo/sessao-estudo.module';

@Module({
  imports: [
    PrismaModule,
    MateriaModule,
    TopicoModule,
    RecursoModule,
    SessaoEstudoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

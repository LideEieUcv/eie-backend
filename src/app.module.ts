import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Noticia } from './noticia.entity';
import { Evento } from './evento.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'escuela.sqlite',
      entities: [Noticia, Evento],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Noticia,Evento]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticiasModule } from './noticias/noticias.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [NoticiasModule, EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
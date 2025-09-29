import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Noticia } from './noticia.entity';
import { CreateEventoDto } from './create-evento.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Endpoint para obtener las últimas 3 noticias
  @Get('noticias')
  getNoticias() {
    return this.appService.getNoticias();
  }
  
  // Endpoint para crear noticias
  @Post('noticias')
  create(@Body() noticia: Noticia) {
    return this.appService.crearNoticia(noticia);
  }

  // Endpoint para obtener los últimos 3 eventos
  @Get('eventos')
  getEventos() {
    return this.appService.getEventos();
  }
  // Endpoint para crear eventos
  @Post('eventos')
  createEvento(@Body() createEventoDto: CreateEventoDto) {
      return this.appService.crearEvento(createEventoDto);
  }
}
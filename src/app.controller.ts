import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Noticia } from './noticia.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('noticias')
  getNoticias() {
    return this.appService.getNoticias();
  }
  
  // Endpoint para crear noticias
  @Post('noticias')
  create(@Body() noticia: Noticia) {
    return this.appService.crearNoticia(noticia);
  }


  @Get('eventos')
  getEventos() {
    return this.appService.getEventos();
  }
}
// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {} // Inyección de dependencias

  @Get('noticias')
  getNoticias() {
    return this.appService.getNoticias(); // Lógica delegada al servicio
  }

  @Get('eventos')
  getEventos() {
    return this.appService.getEventos();
  }
}
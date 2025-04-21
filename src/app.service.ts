// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNoticias() {
    return [
      { 
        title: "Título desde el servicio", 
        date: "2023-12-10", 
        content: "Contenido real desde el servicio" 
      },
    ];
  }

  getEventos() {
    return [
      { 
        title: "Defensa de tesis", 
        date: 5, 
        day: "Martes", 
        month: "Diciembre", 
        hour: "2:00 pm" 
      },
    ];
  }
}
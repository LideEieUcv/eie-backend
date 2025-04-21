import { Injectable, NotFoundException } from '@nestjs/common';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  private eventos: Evento[] = [
    {
      id: 1, // ID obligatorio
      title: "Defensa de tesis",
      date: 5,
      day: "Martes",
      month: "Diciembre",
      hour: "2:00 pm",
      description: "Esta es una pequeña descripción",
    }
  ];

  findAll(): Evento[] {
    return this.eventos;
  }

  findOne(id: number): Evento {
    const evento = this.eventos.find(e => e.id === id);
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return evento;
  }
}
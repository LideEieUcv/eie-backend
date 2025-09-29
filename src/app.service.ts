import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticia } from './noticia.entity';
import { Evento } from './evento.entity';
import { CreateEventoDto } from './create-evento.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Noticia)
    private noticiasRepository: Repository<Noticia>,
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  getNoticias(): Promise<Noticia[]> {
      return this.noticiasRepository.find({
        order: {
          id: 'DESC',
        },
        take: 3,
      });
  }

  crearNoticia(noticia: Noticia) {
    return this.noticiasRepository.save(noticia);
  }

  async getEventos() {
      const eventos = await this.eventoRepository.find({
        order: {
          id: 'DESC',
        },
        take: 3,
      });

      return eventos.map(evento => {
        const fecha = new Date(evento.eventDate);

        return {
          id: evento.id,
          title: evento.title,
          content: evento.content,
          date: fecha.getDate(),
          day: fecha.toLocaleDateString('es-ES', { weekday: 'long' }),
          month: fecha.toLocaleDateString('es-ES', { month: 'long' }),
          hour: fecha.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true }),
        };
      });
    }

  async crearEvento(createEventoDto:CreateEventoDto): Promise<Evento> {
    const nuevoEvento = this.eventoRepository.create(createEventoDto);
    return this.eventoRepository.save(nuevoEvento);
  }
}
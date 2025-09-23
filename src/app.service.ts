import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticia } from './noticia.entity';

@Injectable()
export class AppService {
  // 1. Inyectamos el "repositorio" de Noticia.
  // Piensa en esto como un objeto con superpoderes para acceder a la tabla 'noticia'.
  constructor(
    @InjectRepository(Noticia)
    private noticiasRepository: Repository<Noticia>,
  ) {}

  // 2. Este método ahora consulta la base de datos
  getNoticias(): Promise<Noticia[]> {
    // find() es como hacer un "SELECT * FROM noticia"
    return this.noticiasRepository.find();
  }

  // MÉTODO PARA CREAR DATOS FÁCILMENTE
  crearNoticia(noticia: Noticia) {
    return this.noticiasRepository.save(noticia);
  }

  // Mantenemos este por ahora, lo conectaremos a la BD más tarde
  getEventos() {
    return [
      {
        title: 'Defensa de tesis',
        date: 5,
        day: 'Martes',
        month: 'Enero',
        hour: '11:00 am',
      },
      {
        title: 'Defensa de tesis',
        date: 5,
        day: 'Martes',
        month: 'Enero',
        hour: '1:00 pm',
      },
    ];
  }
}
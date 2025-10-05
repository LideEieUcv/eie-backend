import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticia } from './entities/noticia.entity';

@Injectable()
export class NoticiasService {
  constructor(
    @InjectRepository(Noticia)
    private noticiasRepository: Repository<Noticia>,
  ) {}

  findAll() {
    return this.noticiasRepository.find({
      order: { id: 'DESC' },
    });
  }

  // Lógica para la página principal
  findLatest() {
    return this.noticiasRepository.find({
      order: { id: 'DESC' },
      take: 3,
    });
  }

  findOne(id: number) {
    return this.noticiasRepository.findOneBy({ id });
  }

  create(noticia: Noticia) {
    return this.noticiasRepository.save(noticia);
  }
}
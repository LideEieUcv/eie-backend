import { Noticia } from '../entities/noticia.entity';
import { NoticiaDto } from '../dto/noticia.dto';

export class NoticiaMapper {
  static toDto(noticia: Noticia): NoticiaDto {
    return {
      id: noticia.id, // Ahora id es obligatorio en ambas clases
      title: noticia.title,
      date: noticia.date,
      content: noticia.content
    };
  }
}
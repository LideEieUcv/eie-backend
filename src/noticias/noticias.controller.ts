import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiaDto } from './dto/noticia.dto';
import { NoticiaMapper } from './mappers/noticia.mapper';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Get()
  findAll(): NoticiaDto[] {
    return this.noticiasService.findAll()
      .map(NoticiaMapper.toDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): NoticiaDto {
    const noticia = this.noticiasService.findOne(+id);
    if (!noticia) {
      throw new NotFoundException('Noticia no encontrada');
    }
    return NoticiaMapper.toDto(noticia);
  }
}
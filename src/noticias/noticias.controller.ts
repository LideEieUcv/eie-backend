import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { Noticia } from './entities/noticia.entity';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Get()
  findAll() {
    return this.noticiasService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticiasService.findOne(+id);
  }

  @Post()
  create(@Body() noticia: Noticia) {
    return this.noticiasService.create(noticia);
  }
}
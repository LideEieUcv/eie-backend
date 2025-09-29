import { Repository } from 'typeorm';
import { Noticia } from './noticia.entity';
import { Evento } from './evento.entity';
import { CreateEventoDto } from './create-evento.dto';
export declare class AppService {
    private noticiasRepository;
    private eventoRepository;
    constructor(noticiasRepository: Repository<Noticia>, eventoRepository: Repository<Evento>);
    getNoticias(): Promise<Noticia[]>;
    crearNoticia(noticia: Noticia): Promise<Noticia>;
    getEventos(): Promise<{
        id: number;
        title: string;
        content: string;
        date: number;
        day: string;
        month: string;
        hour: string;
    }[]>;
    crearEvento(createEventoDto: CreateEventoDto): Promise<Evento>;
}

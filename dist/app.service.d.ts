import { Repository } from 'typeorm';
import { Noticia } from './noticia.entity';
export declare class AppService {
    private noticiasRepository;
    constructor(noticiasRepository: Repository<Noticia>);
    getNoticias(): Promise<Noticia[]>;
    crearNoticia(noticia: Noticia): Promise<Noticia>;
    getEventos(): {
        title: string;
        date: number;
        day: string;
        month: string;
        hour: string;
    }[];
}

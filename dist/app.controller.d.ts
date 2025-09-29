import { AppService } from './app.service';
import { Noticia } from './noticia.entity';
import { CreateEventoDto } from './create-evento.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getNoticias(): Promise<Noticia[]>;
    create(noticia: Noticia): Promise<Noticia>;
    getEventos(): Promise<{
        id: number;
        title: string;
        content: string;
        date: number;
        day: string;
        month: string;
        hour: string;
    }[]>;
    createEvento(createEventoDto: CreateEventoDto): Promise<import("./evento.entity").Evento>;
}

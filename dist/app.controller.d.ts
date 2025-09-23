import { AppService } from './app.service';
import { Noticia } from './noticia.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getNoticias(): Promise<Noticia[]>;
    create(noticia: Noticia): Promise<Noticia>;
    getEventos(): {
        title: string;
        date: number;
        day: string;
        month: string;
        hour: string;
    }[];
}

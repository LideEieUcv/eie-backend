import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getNoticias(): {
        title: string;
        date: string;
        content: string;
    }[];
    getEventos(): {
        title: string;
        date: number;
        day: string;
        month: string;
        hour: string;
    }[];
}

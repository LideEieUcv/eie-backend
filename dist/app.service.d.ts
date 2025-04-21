export declare class AppService {
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

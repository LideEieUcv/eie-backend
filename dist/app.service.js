"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const noticia_entity_1 = require("./noticia.entity");
const evento_entity_1 = require("./evento.entity");
let AppService = class AppService {
    noticiasRepository;
    eventoRepository;
    constructor(noticiasRepository, eventoRepository) {
        this.noticiasRepository = noticiasRepository;
        this.eventoRepository = eventoRepository;
    }
    getNoticias() {
        return this.noticiasRepository.find({
            order: {
                id: 'DESC',
            },
            take: 3,
        });
    }
    crearNoticia(noticia) {
        return this.noticiasRepository.save(noticia);
    }
    async getEventos() {
        const eventos = await this.eventoRepository.find({
            order: {
                id: 'DESC',
            },
            take: 3,
        });
        return eventos.map(evento => {
            const fecha = new Date(evento.eventDate);
            return {
                id: evento.id,
                title: evento.title,
                content: evento.content,
                date: fecha.getDate(),
                day: fecha.toLocaleDateString('es-ES', { weekday: 'long' }),
                month: fecha.toLocaleDateString('es-ES', { month: 'long' }),
                hour: fecha.toLocaleTimeString('es-ES', { hour: 'numeric', minute: '2-digit', hour12: true }),
            };
        });
    }
    async crearEvento(createEventoDto) {
        const nuevoEvento = this.eventoRepository.create(createEventoDto);
        return this.eventoRepository.save(nuevoEvento);
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(noticia_entity_1.Noticia)),
    __param(1, (0, typeorm_1.InjectRepository)(evento_entity_1.Evento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map
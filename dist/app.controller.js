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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const noticia_entity_1 = require("./noticia.entity");
const create_evento_dto_1 = require("./create-evento.dto");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getNoticias() {
        return this.appService.getNoticias();
    }
    create(noticia) {
        return this.appService.crearNoticia(noticia);
    }
    getEventos() {
        return this.appService.getEventos();
    }
    createEvento(createEventoDto) {
        return this.appService.crearEvento(createEventoDto);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('noticias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getNoticias", null);
__decorate([
    (0, common_1.Post)('noticias'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [noticia_entity_1.Noticia]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('eventos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getEventos", null);
__decorate([
    (0, common_1.Post)('eventos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createEvento", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map
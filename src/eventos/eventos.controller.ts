import { Controller, Get, Param } from "@nestjs/common";
import { EventosService } from "./eventos.service";
import { EventoDto } from "./dto/evento.dto";
import { createDiffieHellmanGroup } from "node:crypto";
import { get } from "node:http";

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventosService: EventosService ){}

    @Get()
    findAll(): EventoDto[]{
        return this.eventosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string): EventoDto{
        return this.eventosService.findOne(+id)
    }
}
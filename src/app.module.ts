import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Noticia } from './noticia.entity'; // <-- 1. Importa la entidad

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'escuela.sqlite', // Nombre del archivo de tu base de datos
      entities: [Noticia], // <-- 2. Registra la entidad aquí
      synchronize: true, // ¡La magia! Crea la tabla automáticamente
    }),
    TypeOrmModule.forFeature([Noticia]), // <-- 3. Hace el repositorio de Noticia disponible para inyección
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
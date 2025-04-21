import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('EIE Back-end')  // Título de la documentación
    .setDescription('Funcionalidad para el backend de la página web de la Escuela de Eléctrica de la Facultad de Ingeniería de la Universidad Central de Venezuela')  // Descripción
    .setVersion('0.1.1')  // Versión de la API
    .addTag('users')  // Etiquetas para agrupar endpoints
    .addBearerAuth()  // Si usas autenticación JWT (opcional)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // Ruta para acceder a la UI: /api

  await app.listen(3000);
}
bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Puerto de tu frontend Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('EIE Back-End')  // Título de la documentación
    .setDescription('Funcionalidad para el backend de la página web de la Escuela de Eléctrica de la Facultad de Ingeniería de la Universidad Central de Venezuela')  // Descripción
    .setVersion('0.1.4')  // Versión de la API
    //.addTag('Noticias y eventos')  // Etiquetas para agrupar endpoints
    .addBearerAuth()  // Si usas autenticación JWT (opcional)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // Ruta para acceder a la UI: /api

  await app.listen(3000);
}
bootstrap();
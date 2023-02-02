import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Wallet Web Application')
    .setDescription('it wallet web application api document')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, documentFactory);
  const PORT = process.env.PORT || 3004; 
  app.use(helmet());
  await app.listen(PORT)
  app.enableCors({
    origin: '*',
  });
  console.log(`Application is running on port ${PORT}`);
}
bootstrap();

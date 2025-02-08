import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //api swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Aha Smart')
    .setDescription(
      'this is aha smart api, you can do database manipulation through this ui',
    )
    .setVersion('1.0')
    .addTag('aha smart')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory, {
    customfavIcon:
      'https://res-console.cloudinary.com/dlbbfck9n/media_explorer_thumbnails/e21d9307936995dc631dc520ee985775/detailed',
    customSiteTitle: 'AhaSmartAPI',
    customCss: '.topbar { display: none; }',
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`app run on http://localhost:3000`);
}
bootstrap();

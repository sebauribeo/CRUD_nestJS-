import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logInit, MicroConfig } from './model/model';

async function bootstrap() {
  const logger = new Logger(logInit);
  const port = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  logger.log(MicroConfig.logMessage + port);
}
bootstrap();

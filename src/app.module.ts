import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './services/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigKeys } from './model/model';
import { DocumentRepository } from './model/repository/document.repository';
import { ConnectionOptions } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      async useFactory(config: ConfigService) {
        return {
          type: PostgresConfigKeys.TYPE,
          host: config.get(PostgresConfigKeys.POSTGRES_HOST),
          port: config.get(PostgresConfigKeys.POSTGRES_PORT),
          username: config.get(PostgresConfigKeys.POSTGRES_USERNAME),
          password: config.get(PostgresConfigKeys.POSTGRES_PASSWORD),
          database: config.get(PostgresConfigKeys.POSTGRES_DATABASE),
          schema: config.get(PostgresConfigKeys.POSTGRES_SCHEMA),
          autoLoadEntities: true,
          synchronize: true,
        } as ConnectionOptions;
      },
    }),
    TypeOrmModule.forFeature([ DocumentRepository]),
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@app/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    NestConfigModule.forRoot({
      isGlobal: true
    }),
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({ 
        uri: configService.get('database').adminDatabaseConnection,
        connectionName: configService.get('database').adminDatabaseName,
        useCreateIndex: true,
        useNewUrlParser: true
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { ConfigModule } from '@app/config';

@Module({
  imports: [
    UsersModule,
    NestConfigModule.forRoot({
      isGlobal: true
    }),
    ConfigModule
  ],
})
export class AppModule {}

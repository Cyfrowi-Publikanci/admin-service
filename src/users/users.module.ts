import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { config } from '@app/config';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.register([
      {
        name: 'AUTHENTICATION_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: `${config().authenticationServiceHostname}:${
            config().authenticationServicePort
          }`,
          package: 'authentication',
          protoPath: path.resolve('proto/authentication.proto'),
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

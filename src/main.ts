import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

import { AppModule } from './app.module';
import { config } from '@app/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${config().rabbitMQ.name}:${config().rabbitMQ.port}`],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ['admin'],
      url: `${config().serviceHostname}:${config().servicePort}`,
      protoPath: path.resolve('proto/admin.proto'),
    },
  });

  try {
    await app.startAllMicroservicesAsync();
  } catch (error) {
    Logger.error(error.stack);
  }
}
bootstrap();

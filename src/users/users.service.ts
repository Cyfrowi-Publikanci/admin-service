import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { UsersServiceClient } from 'types/authentication';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersServiceClient: UsersServiceClient;

  constructor(@Inject('AUTHENTICATION_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.usersServiceClient = this.client.getService<UsersServiceClient>(
      'UsersService',
    );
  }

  async getAllUsers(): Promise<string> {
    const response = await this.usersServiceClient.getAllUsers({}).toPromise();
    const { email } = response;

    return email;
  }
}

import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { User, UserDocument } from 'src/schemas/user.schema';
import { UsersServiceClient } from 'types/authentication';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersServiceClient: UsersServiceClient;

  constructor(
    @Inject('AUTHENTICATION_PACKAGE') private client: ClientGrpc,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

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

  async create(userId: string, userEmail: string) {
    await this.userModel.create({
      _id:  new Types.ObjectId(userId),
      email: userEmail
    });
  }
}

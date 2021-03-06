import { Controller } from '@nestjs/common';
import { EventPattern, GrpcMethod, MessagePattern } from '@nestjs/microservices';

import { GetAllUsersResponse, UsersServiceController } from 'types/admin';
import { UsersService } from './users.service';

@Controller()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersService', 'getAllUsers')
  async getAllUsers(): Promise<GetAllUsersResponse> {
    const response = await this.usersService.getAllUsers();

    return {
      email: response,
    };
  }

  @EventPattern('createUser')
  saveCreatedUser(data: string) {
    const obj = JSON.parse(data) as { id: string, email: string };
    this.usersService.create(obj.id, obj.email);
  }
}

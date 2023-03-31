import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'users/dtos/users.dtos';
import { UsersService } from 'users/services/users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async usersAll() {
    return await this.usersService.findAll();
  }

  @Get(':userId')
  async user(@Param('userId', ParseIntPipe) userId: number) {
    return await this.usersService.findOne(userId);
  }

  @Post()
  async createUser(@Body() payload: CreateUserDto) {
    return await this.usersService.create(payload);
  }

  @Put(':userId')
  async UpdateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UpdateUserDto,
  ) {
    return await this.usersService.update(userId, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}

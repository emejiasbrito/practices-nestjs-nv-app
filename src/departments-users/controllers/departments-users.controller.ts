import { Body, Controller, Post } from '@nestjs/common';
import { CreateDepartmentUserDto } from 'departments-users/dtos/departments-users.dtos';
import { DepartmentUserService } from 'departments-users/services/departments-users.service';

@Controller('departmentuser')
export class DepartmentUserController {
  constructor(private readonly departmentUsersService: DepartmentUserService) {}

  @Post()
  async createUser(@Body() payload: CreateDepartmentUserDto) {
    return await this.departmentUsersService.create(payload);
  }
}

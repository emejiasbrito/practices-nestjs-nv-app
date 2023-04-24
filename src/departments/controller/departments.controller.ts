import { Body, Controller, Post } from '@nestjs/common';
import { CreateDepartmentsDto } from 'departments/dtos/departments.dtos';
import { DepartmentsService } from 'departments/services/departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentService: DepartmentsService) {}

  @Post()
  async createDepartment(@Body() payload: CreateDepartmentsDto) {
    return await this.departmentService.create(payload);
  }
}

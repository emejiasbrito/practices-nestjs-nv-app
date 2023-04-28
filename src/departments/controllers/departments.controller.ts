import { Body, Controller, Post } from '@nestjs/common';
import { CreateDepartmentDto } from 'departments/dtos/departments.dtos';
import { DepartmentsService } from 'departments/services/departments.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentsService) {}

  @Post()
  async createDepartment(@Body() payload: CreateDepartmentDto) {
    return await this.departmentService.create(payload);
  }
}

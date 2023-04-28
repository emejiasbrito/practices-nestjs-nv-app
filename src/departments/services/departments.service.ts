import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentDto } from 'departments/dtos/departments.dtos';
import { Department } from 'departments/entities/departments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,
  ) {}

  /**
   * Inserta un nuevo departamento
   * @param data datos a registrar
   */
  async create(data: CreateDepartmentDto) {
    const newDepartment = this.departmentRepo.create(data);
    return await this.departmentRepo.save(newDepartment);
  }
}

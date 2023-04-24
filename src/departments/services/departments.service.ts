import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentsDto } from 'departments/dtos/departments.dtos';
import { Departments } from 'departments/entities/departments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private departmentRepo: Repository<Departments>,
  ) {}

  /**
   * Inserta un nuevo departamento
   * @param data datos a registrar
   */
  async create(data: CreateDepartmentsDto) {
    const newDepartment = this.departmentRepo.create(data);
    return await this.departmentRepo.save(newDepartment);
  }
}

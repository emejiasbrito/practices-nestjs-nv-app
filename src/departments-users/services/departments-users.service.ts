import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'users/entities/users.entity';
import { Department } from 'departments/entities/departments.entity';
import { DepartmentUser } from 'departments-users/entities/departments-users.entity';
import { CreateDepartmentUserDto } from 'departments-users/dtos/departments-users.dtos';

@Injectable()
export class DepartmentUserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,
    @InjectRepository(DepartmentUser)
    private departmentUserRepo: Repository<DepartmentUser>,
  ) {}

  /**
   * vincula un usuario con un departamento
   * @param data datos a registrarfindOne
   */
  async create(data: CreateDepartmentUserDto) {
    const user = await this.userRepo.findOneBy({ id: data.userId });
    const department = await this.departmentRepo.findOneBy({
      id: data.departmentId,
    });
    const departmentUser = new DepartmentUser();
    departmentUser.user = user;
    departmentUser.department = department;
    return this.departmentUserRepo.save(departmentUser);
  }
}

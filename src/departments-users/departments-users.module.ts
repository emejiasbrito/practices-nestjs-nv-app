import { Module } from '@nestjs/common';
import { DepartmentUserController } from './controllers/departments-users.controller';
import { DepartmentUserService } from './services/departments-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentUser } from './entities/departments-users.entity';
import { Department } from 'departments/entities/departments.entity';
import { User } from 'users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentUser, Department, User])],
  controllers: [DepartmentUserController],
  providers: [DepartmentUserService],
  exports: [DepartmentUserService],
})
export class DepartmentUserModule {}

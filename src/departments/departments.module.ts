import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Department } from 'departments/entities/departments.entity';
import { DepartmentController } from './controllers/departments.controller';
import { DepartmentsService } from './services/departments.service';
@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentController],
  providers: [DepartmentsService],
  exports: [DepartmentsService],
})
export class DepartmentModule {}

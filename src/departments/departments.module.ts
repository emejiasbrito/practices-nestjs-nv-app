import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Departments } from 'departments/entities/departments.entity';
import { DepartmentsController } from './controller/departments.controller';
import { DepartmentsService } from './services/departments.service';
@Module({
  imports: [TypeOrmModule.forFeature([Departments])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
  exports: [DepartmentsService, TypeOrmModule],
})
export class DepartmentsModule {}

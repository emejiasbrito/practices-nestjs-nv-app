import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class DepartmentUserDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsNumber()
  readonly departmentId: number;

  @IsNumber()
  readonly userId: number;
}

export class CreateDepartmentUserDto extends OmitType(DepartmentUserDto, [
  'id',
]) {}
export class UpdateDepartmentUserDto extends PartialType(DepartmentUserDto) {}

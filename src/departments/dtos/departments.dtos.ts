import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class DepartmentDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  fatherId?: number;

  @IsOptional()
  children?: DepartmentDto[];
}

export class CreateDepartmentDto extends OmitType(DepartmentDto, ['id']) {}
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}

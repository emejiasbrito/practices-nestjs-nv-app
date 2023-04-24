import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class DepartmentsDto {
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
  children?: DepartmentsDto[];
}

export class CreateDepartmentsDto extends OmitType(DepartmentsDto, ['id']) {}
export class UpdateDepartmentsDto extends PartialType(CreateDepartmentsDto) {}

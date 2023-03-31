import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
  @IsDate()
  @IsOptional()
  readonly dateBirth: Date | null;
}

export class CreateUserDto extends OmitType(UserDto, ['id']) {}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  IsDate,
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
  @IsString()
  @IsOptional()
  readonly phone: string;
  @IsString()
  @IsOptional()
  readonly address: string;
}

export class CreateUserDto extends OmitType(UserDto, ['id']) {}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

import { IsString, IsNumber, IsPhoneNumber, Min, Max } from 'class-validator';
import 'reflect-metadata';

export class UserDto {
  @IsString()
  name: string;

  @IsPhoneNumber()
  phone: string;

  @IsNumber()
  @Min(0)
  @Max(150)
  age: number;
}

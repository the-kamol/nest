import {
  IsString,
  IsNumber,
  IsPhoneNumber,
  Min,
  Max,
  IsEmail,
  IsLocale,
  Matches,
  IsOptional,
} from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
import 'reflect-metadata';

export class UserDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsPhoneNumber(undefined, {
    message: `Please provide a valid phone number with country code (e.g., +998935337909)`,
  })
  phone: string;

  @Transform(({ value }: TransformFnParams): number | string => {
    const num = Number(value);
    return isNaN(num) ? value : num;
  })
  @IsNumber()
  @Min(0)
  @Max(150)
  age: number;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsLocale()
  locale?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[A-Za-z]+\/[A-Za-z_]+$/, {
    message: 'Timezone must be in format Region/City (e.g., America/New_York)',
  })
  timezone?: string;
}

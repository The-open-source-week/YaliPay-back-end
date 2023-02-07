import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  phoneNumber: string;

  @IsString()
  code: number;

  @IsString()
  accountNumber: string;
}

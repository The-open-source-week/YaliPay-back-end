import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Precisas preencher este campo é obrigatório' })
  @ApiProperty({ required: true })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Precisas preencher este campo é obrigatório' })
  @IsEmail()
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Precisas preencher este campo é obrigatório' })
  @ApiProperty({ required: true })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Precisas preencher este campo é obrigatório' })
  @ApiProperty({ required: true })
  phoneNumber: string;

  @IsString()
  code: number;

  @IsString()
  accountNumber: string;
}

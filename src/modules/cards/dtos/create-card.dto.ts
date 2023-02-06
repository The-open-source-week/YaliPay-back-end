import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCardDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  accountId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  cardNumber: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: false })
  cvv: number;

  @ApiProperty({ required: false })
  expireAt: Date;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  amount: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}

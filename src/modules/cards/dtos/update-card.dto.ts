import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateCardDTO {
  @IsString()
  @ApiProperty({ required: true })
  accountId?: string;

  @IsNumber()
  @ApiProperty({ required: true })
  cardNumber?: number;

  @IsNumber()
  cvv?: number;

  @IsDate()
  expireAt?: Date;

  @IsNumber()
  @ApiProperty({ required: true })
  amount?: number;

  @IsBoolean()
  isActive?: boolean;
}

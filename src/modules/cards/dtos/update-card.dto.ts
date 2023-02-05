import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCardDTO {
  @IsString()
  @ApiProperty({ required: true })
  accountId?: string;

  @IsString()
  @ApiProperty({ required: true })
  cardHolderName?: string;

  @IsNumber()
  @ApiProperty({ required: true })
  cardNumber?: number;

  @IsNumber()
  @ApiProperty({ required: false })
  cvv?: number;

  @ApiProperty({ required: false })
  expireAt?: Date;

  @IsNumber()
  @ApiProperty({ required: true })
  amount?: number;

  @IsBoolean()
  isActive?: boolean;
}

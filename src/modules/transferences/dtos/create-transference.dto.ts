import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransferenceDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @IsNotEmpty()
  @ApiProperty()
  amount: number;

  @IsNotEmpty()
  @ApiProperty()
  accountId: string;

  @IsNotEmpty()
  @ApiProperty()
  cardID: string;
}

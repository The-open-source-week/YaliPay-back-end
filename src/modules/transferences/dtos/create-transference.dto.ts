import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransferenceDto {
  @IsNotEmpty({ message: 'Precisas preencher este campo é obrigatório' })
  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @IsNotEmpty({ message: 'Precisas preencher este campo é obrigatório' })
  @ApiProperty()
  amount: number;

  @IsNotEmpty()
  @ApiProperty()
  accountId: string;

  @IsNotEmpty()
  @ApiProperty()
  cardID: string;
}

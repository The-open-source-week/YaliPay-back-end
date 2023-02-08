import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthUserGuard } from '../../../accounts/guards/auth.guard';
import { Me } from 'src/modules/accounts/guards/current-user.guard';
import { GetMainCardService } from '../../services/getMainCard/GetMainCard.service';

@UseGuards(AuthUserGuard)
@Controller('card')
export class GetMainCardController {
  constructor(private showCardService: GetMainCardService) {}

  @Get('/me')
  @ApiProperty()
  @HttpCode(HttpStatus.OK)
  create(@Body() userID: string, @Me() user: any) {
    userID = user.sub.sub;
    return this.showCardService.execute(userID);
  }
}

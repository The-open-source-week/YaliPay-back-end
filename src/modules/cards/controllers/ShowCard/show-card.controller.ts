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
import { ShowCardService } from '../../services/ShowCard/ShowCard.service';

@UseGuards(AuthUserGuard)
@Controller('card')
export class ShowCardController {
  constructor(private showCardService: ShowCardService) {}

  @Get('/me')
  @ApiProperty()
  @HttpCode(HttpStatus.OK)
  create(@Body() @Me() user: any) {
    const accountID = user.sub.sub;
    return this.showCardService.execute(accountID);
  }
}

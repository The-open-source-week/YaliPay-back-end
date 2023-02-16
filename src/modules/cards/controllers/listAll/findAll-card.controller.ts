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
import { Me } from '../../../../modules/accounts/guards/current-user.guard';
import { ListAllCardService } from '../../services/listAll/ListaAllCard.service';

@UseGuards(AuthUserGuard)
@Controller('cards')
export class ListAllCardController {
  constructor(private listAllService: ListAllCardService) {}

  @Get('/')
  @ApiProperty()
  @HttpCode(HttpStatus.OK)
  create(@Body() accountID: string, @Me() user: any) {
    console.log(user);
    accountID = user.sub.sub;
    return this.listAllService.execute(accountID);
  }
}

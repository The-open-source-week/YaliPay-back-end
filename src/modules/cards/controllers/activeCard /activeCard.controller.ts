import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthUserGuard } from '../../../accounts/guards/auth.guard';
import { ActiveCardService } from '../../services/ActiveCard /activeCard.service';

@Controller('card')
export class ActiveCardController {
  constructor(private activeCard: ActiveCardService) {}

  @UseGuards(AuthUserGuard)
  @Patch('/active/:id')
  @ApiProperty()
  @HttpCode(HttpStatus.OK)
  async handle(@Param('id') cardID: string) {
    return await this.activeCard.execute(cardID);
  }
}

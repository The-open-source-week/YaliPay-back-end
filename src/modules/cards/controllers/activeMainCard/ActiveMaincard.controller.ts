import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AuthUserGuard } from '../../../accounts/guards/auth.guard';
import { ActiveMainCardService } from '../../services/activateMainCard/ActiveMainCard.service';
import { UpdateCardDTO } from '../../dtos/update-card.dto';

@Controller('card')
export class ActiveMainCardController {
  constructor(private activeMainCard: ActiveMainCardService) {}

  @UseGuards(AuthUserGuard)
  @Patch('/update/:id')
  @ApiProperty()
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id') cardID: string, @Body() data: UpdateCardDTO) {
    return this.activeMainCard.execute(cardID, data);
  }
}

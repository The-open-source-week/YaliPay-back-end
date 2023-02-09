import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CreateTransferenceDto } from '../../dtos/create-transference.dto';
import { CreateTransferencesService } from '../../services/create/create-transferences.service';
import { AuthUserGuard } from '../../../../modules/accounts/guards/auth.guard';
import { Me } from '../../../../modules/accounts/guards/current-user.guard';
import { ApiProperty } from '@nestjs/swagger';

@UseGuards(AuthUserGuard)
@Controller('transfer')
export class CreateTransferencesController {
  constructor(
    private readonly transferencesService: CreateTransferencesService,
  ) {}

  @Post('/')
  @ApiProperty()
  create(
    @Body() createTransferenceDto: CreateTransferenceDto,
    @Me() user: any,
  ) {
    createTransferenceDto.accountId = user.sub.sub;
    return this.transferencesService.create(createTransferenceDto);
  }
}

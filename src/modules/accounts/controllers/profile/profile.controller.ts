import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiProperty } from '@nestjs/swagger';

@Controller('profile')
export class ProfileController {
  @UseGuards(AuthGuard)
  @Get('/')
  @ApiProperty()
  getProfile(@Request() req) {
    return req.user;
  }
}

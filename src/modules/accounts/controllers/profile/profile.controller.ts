import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiProperty } from '@nestjs/swagger';

@Controller('user')
export class ProfileController {
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  @ApiProperty()
  async profile(@Request() req: any) {
    return await req.user;
  }
}

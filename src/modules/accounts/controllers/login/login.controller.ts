import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  UsePipes,
  Request,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginService } from '../../services/login/login.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @UsePipes(ValidationPipe)
  @ApiProperty()
  @HttpCode(HttpStatus.CREATED)
  async handle(@Req() req: any) {
    return await this.loginService.login(req.user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

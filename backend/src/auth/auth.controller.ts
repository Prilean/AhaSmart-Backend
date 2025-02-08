import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, HttpCode, HttpStatus, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() signInDto: Record<string, any>){
    const tokens = await this.authService.login(signInDto.email, signInDto.password);
    return tokens;
  }

  // @Post('logout')
  // @HttpCode(HttpStatus.OK)
  // async logout(@Body('userId') userId: number) {
  //   await this.authService.updateRefreshToken(userId, null);
  //   return { message: 'Logged out successfully' };
  // }
}

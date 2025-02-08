import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants'
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}
    
    async login(email: string, pass: string): Promise<any>{
        const user = await this.userService.validateUser(email, pass)
        if (!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const tokens = await this.generateTokens(user.id);
        return tokens;
    }
    
    async generateTokens(userId: number) {
        const accessToken = this.jwtService.sign(
          { sub: userId},
          { secret: jwtConstants.secret, expiresIn: '15m' },
        );
        return { accessToken };
      }
     
}

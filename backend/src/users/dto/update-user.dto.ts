import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { RoleEnum } from '@prisma/client';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 0 })
  points: number;

  @ApiProperty({ enum: ['USER', 'ADMIN'] })
  role: RoleEnum;
}

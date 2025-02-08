import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum, StatusEnum } from '@prisma/client';
export class CreateUserDto {
  @ApiProperty({ example: 'string' })
  email: string;

  @ApiProperty({ example: 'string' })
  firstName: string;

  @ApiProperty({ example: 'string' })
  lastName: string;

  @ApiProperty({ example: 'string' })
  gender: string;

  @ApiProperty({ example: 'string' })
  password: string;
}

export class GetUserDto {
  @ApiProperty({ example: 'string' })
  email: string;

  @ApiProperty({ example: 'string' })
  firstName: string;

  @ApiProperty({ example: 'string' })
  lastName: string;

  @ApiProperty({ example: 'string' })
  gender: string;

  @ApiProperty({ example: 'string' })
  password: string;

  @ApiProperty({ example: 0 })
  points: number;

  @ApiProperty({ enum: ['USER', 'ADMIN'] })
  role: RoleEnum;

  @ApiProperty({ enum: ['ACTIVE', 'INACTIVE'] })
  status: StatusEnum;
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, GetUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //todo create one user
  @Post()
  @ApiOperation({ summary: 'create one user' })
  @ApiProperty({ title: 'create one user', type: CreateUserDto })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.createOne(createUserDto);
  }

  //todo get all the user
  @Get()
  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({
    status: 200,
    description: 'list all users',
    type: [GetUserDto],
  })
  async findAll() {
    return this.usersService.findAll();
  }

  //todo get one user
  @Get(':id')
  @ApiOperation({ summary: 'get one user' })
  @ApiResponse({
    status: 200,
    description: 'get one user',
    type: GetUserDto,
  })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  //todo update one user
  @Patch(':id')
  @ApiOperation({ summary: 'update one user' })
  @ApiProperty({ type: UpdateUserDto })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, type: UpdateUserDto })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  //todo delete one user
  @Delete(':id')
  @ApiOperation({ summary: 'delete one user' })
  @ApiParam({ name: 'id', description: 'User Id' })
  @ApiResponse({ status: 200, type: GetUserDto })
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { User } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  //todo create one user
  async createOne(createUserDto: Prisma.UserCreateInput) {
    try {
      const user = await this.prisma.user.create({
        data: createUserDto,
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new HttpException('cannot create user', HttpStatus.BAD_REQUEST);
    }
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      }
    });
  }
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
    return user || null;
  }

  //todo find all the users
  async findAll() {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch {
      throw new HttpException('cannot create user', HttpStatus.BAD_REQUEST);
    }
  }

  //todo findOne
  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return user;
    } catch {
      throw new HttpException('cannot create user', HttpStatus.BAD_REQUEST);
    }
  }

  //todo update one user
  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    try {
      const user = await this.findOne(id);
      console.log(user);
      if (!user) {
        throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
      }
      const updateUser = await this.prisma.user.update({
        where: { id: id },
        data: updateUserDto,
      });
      return updateUser;
    } catch (error) {
      console.log(error);
      throw new HttpException('cannot update user', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.user.delete({
        where: { id: id },
      });
      if (!user) {
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      console.log(error);
      throw new HttpException('an error occurred', HttpStatus.BAD_REQUEST);
    }
  }
}

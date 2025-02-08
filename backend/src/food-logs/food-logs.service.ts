import { Injectable } from '@nestjs/common';
import { CreateFoodLogDto } from './dto/create-food-log.dto';
import { UpdateFoodLogDto } from './dto/update-food-log.dto';

@Injectable()
export class FoodLogsService {
  create(createFoodLogDto: CreateFoodLogDto) {
    return 'This action adds a new foodLog';
  }

  findAll() {
    return `This action returns all foodLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodLog`;
  }

  update(id: number, updateFoodLogDto: UpdateFoodLogDto) {
    return `This action updates a #${id} foodLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodLog`;
  }
}

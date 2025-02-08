import { Injectable } from '@nestjs/common';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { UpdateFoodCategoryDto } from './dto/update-food-category.dto';

@Injectable()
export class FoodCategoryService {
  create(createFoodCategoryDto: CreateFoodCategoryDto) {
    return 'This action adds a new foodCategory';
  }

  findAll() {
    return `This action returns all foodCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodCategory`;
  }

  update(id: number, updateFoodCategoryDto: UpdateFoodCategoryDto) {
    return `This action updates a #${id} foodCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodCategory`;
  }
}

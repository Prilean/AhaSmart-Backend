import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodCategoryService } from './food-category.service';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { UpdateFoodCategoryDto } from './dto/update-food-category.dto';

@Controller('food-category')
export class FoodCategoryController {
  constructor(private readonly foodCategoryService: FoodCategoryService) {}

  @Post()
  create(@Body() createFoodCategoryDto: CreateFoodCategoryDto) {
    return this.foodCategoryService.create(createFoodCategoryDto);
  }

  @Get()
  findAll() {
    return this.foodCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodCategoryDto: UpdateFoodCategoryDto) {
    return this.foodCategoryService.update(+id, updateFoodCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodCategoryService.remove(+id);
  }
}

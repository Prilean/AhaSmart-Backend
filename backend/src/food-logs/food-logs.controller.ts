import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodLogsService } from './food-logs.service';
import { CreateFoodLogDto } from './dto/create-food-log.dto';
import { UpdateFoodLogDto } from './dto/update-food-log.dto';

@Controller('food-logs')
export class FoodLogsController {
  constructor(private readonly foodLogsService: FoodLogsService) {}

  @Post()
  create(@Body() createFoodLogDto: CreateFoodLogDto) {
    return this.foodLogsService.create(createFoodLogDto);
  }

  @Get()
  findAll() {
    return this.foodLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodLogDto: UpdateFoodLogDto) {
    return this.foodLogsService.update(+id, updateFoodLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodLogsService.remove(+id);
  }
}

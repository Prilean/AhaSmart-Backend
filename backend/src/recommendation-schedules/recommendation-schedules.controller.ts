import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecommendationSchedulesService } from './recommendation-schedules.service';
import { CreateRecommendationScheduleDto } from './dto/create-recommendation-schedule.dto';
import { UpdateRecommendationScheduleDto } from './dto/update-recommendation-schedule.dto';

@Controller('recommendation-schedules')
export class RecommendationSchedulesController {
  constructor(private readonly recommendationSchedulesService: RecommendationSchedulesService) {}

  @Post()
  create(@Body() createRecommendationScheduleDto: CreateRecommendationScheduleDto) {
    return this.recommendationSchedulesService.create(createRecommendationScheduleDto);
  }

  @Get()
  findAll() {
    return this.recommendationSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommendationSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecommendationScheduleDto: UpdateRecommendationScheduleDto) {
    return this.recommendationSchedulesService.update(+id, updateRecommendationScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommendationSchedulesService.remove(+id);
  }
}

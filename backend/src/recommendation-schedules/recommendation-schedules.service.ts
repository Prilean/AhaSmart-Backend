import { Injectable } from '@nestjs/common';
import { CreateRecommendationScheduleDto } from './dto/create-recommendation-schedule.dto';
import { UpdateRecommendationScheduleDto } from './dto/update-recommendation-schedule.dto';

@Injectable()
export class RecommendationSchedulesService {
  create(createRecommendationScheduleDto: CreateRecommendationScheduleDto) {
    return 'This action adds a new recommendationSchedule';
  }

  findAll() {
    return `This action returns all recommendationSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommendationSchedule`;
  }

  update(id: number, updateRecommendationScheduleDto: UpdateRecommendationScheduleDto) {
    return `This action updates a #${id} recommendationSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommendationSchedule`;
  }
}

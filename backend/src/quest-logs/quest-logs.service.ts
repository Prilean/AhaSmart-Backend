import { Injectable } from '@nestjs/common';
import { CreateQuestLogDto } from './dto/create-quest-log.dto';
import { UpdateQuestLogDto } from './dto/update-quest-log.dto';

@Injectable()
export class QuestLogsService {
  create(createQuestLogDto: CreateQuestLogDto) {
    return 'This action adds a new questLog';
  }

  findAll() {
    return `This action returns all questLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questLog`;
  }

  update(id: number, updateQuestLogDto: UpdateQuestLogDto) {
    return `This action updates a #${id} questLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} questLog`;
  }
}

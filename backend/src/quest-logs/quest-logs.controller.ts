import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestLogsService } from './quest-logs.service';
import { CreateQuestLogDto } from './dto/create-quest-log.dto';
import { UpdateQuestLogDto } from './dto/update-quest-log.dto';

@Controller('quest-logs')
export class QuestLogsController {
  constructor(private readonly questLogsService: QuestLogsService) {}

  @Post()
  create(@Body() createQuestLogDto: CreateQuestLogDto) {
    return this.questLogsService.create(createQuestLogDto);
  }

  @Get()
  findAll() {
    return this.questLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestLogDto: UpdateQuestLogDto) {
    return this.questLogsService.update(+id, updateQuestLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questLogsService.remove(+id);
  }
}

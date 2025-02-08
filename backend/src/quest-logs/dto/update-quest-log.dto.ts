import { PartialType } from '@nestjs/swagger';
import { CreateQuestLogDto } from './create-quest-log.dto';

export class UpdateQuestLogDto extends PartialType(CreateQuestLogDto) {}

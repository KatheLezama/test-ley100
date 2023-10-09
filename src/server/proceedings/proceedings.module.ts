import { Module } from '@nestjs/common';
import { ProceedingsService } from './proceedings.service';
import { ProceedingsController } from './proceedings.controller';

@Module({
  controllers: [ProceedingsController],
  providers: [ProceedingsService],
})
export class ProceedingsModule {}

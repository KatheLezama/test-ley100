import { Module } from '@nestjs/common';
import { ProceedingService } from './proceeding.service';
import { ProceedingController } from './proceeding.controller';

@Module({
  controllers: [ProceedingController],
  providers: [ProceedingService],
})
export class ProceedingModule {}

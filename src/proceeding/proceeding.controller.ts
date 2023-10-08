import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProceedingService } from './proceeding.service';
import { CreateProceedingDto } from './dto/create-proceeding.dto';
import { UpdateProceedingDto } from './dto/update-proceeding.dto';

@Controller('proceeding')
export class ProceedingController {
  constructor(private readonly proceedingService: ProceedingService) {}

  @Post()
  create(@Body() createProceedingDto: CreateProceedingDto) {
    return this.proceedingService.create(createProceedingDto);
  }

  @Get()
  findAll() {
    return this.proceedingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proceedingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProceedingDto: UpdateProceedingDto) {
    return this.proceedingService.update(+id, updateProceedingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proceedingService.remove(+id);
  }
}

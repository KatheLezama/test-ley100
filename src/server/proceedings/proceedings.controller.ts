import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProceedingsService } from './proceedings.service';
import { CreateProceedingDto } from './dto/create-proceeding.dto';
import { UpdateProceedingDto } from './dto/update-proceeding.dto';

@Controller('proceedings')
export class ProceedingsController {
  constructor(private readonly proceedingsService: ProceedingsService) {}

  @Post()
  create(@Body() createProceedingDto: CreateProceedingDto) {
    return this.proceedingsService.create(createProceedingDto);
  }

  @Get()
  findAll() {
    return this.proceedingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proceedingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProceedingDto: UpdateProceedingDto) {
    return this.proceedingsService.update(+id, updateProceedingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proceedingsService.remove(+id);
  }
}

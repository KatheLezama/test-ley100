import { Injectable } from '@nestjs/common';
import { CreateProceedingDto } from './dto/create-proceeding.dto';
import { UpdateProceedingDto } from './dto/update-proceeding.dto';

@Injectable()
export class ProceedingsService {
  create(createProceedingDto: CreateProceedingDto) {
    return 'This action adds a new proceeding';
  }

  findAll() {
    return `This action returns all proceedings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proceeding`;
  }

  update(id: number, updateProceedingDto: UpdateProceedingDto) {
    return `This action updates a #${id} proceeding`;
  }

  remove(id: number) {
    return `This action removes a #${id} proceeding`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateProceedingDto } from './create-proceeding.dto';

export class UpdateProceedingDto extends PartialType(CreateProceedingDto) {}

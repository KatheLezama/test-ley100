import { Test, TestingModule } from '@nestjs/testing';
import { ProceedingsController } from './proceedings.controller';
import { ProceedingsService } from './proceedings.service';

describe('ProceedingsController', () => {
  let controller: ProceedingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProceedingsController],
      providers: [ProceedingsService],
    }).compile();

    controller = module.get<ProceedingsController>(ProceedingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

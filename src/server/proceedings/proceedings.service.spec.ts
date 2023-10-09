import { Test, TestingModule } from '@nestjs/testing';
import { ProceedingsService } from './proceedings.service';

describe('ProceedingsService', () => {
  let service: ProceedingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProceedingsService],
    }).compile();

    service = module.get<ProceedingsService>(ProceedingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

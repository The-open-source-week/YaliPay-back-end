import { Test, TestingModule } from '@nestjs/testing';
import { ActiveMainCardService } from './ActiveMainCard.service';

describe('ActiveMainCardService', () => {
  let service: ActiveMainCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiveMainCardService],
    }).compile();

    service = module.get<ActiveMainCardService>(ActiveMainCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

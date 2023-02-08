import { Test, TestingModule } from '@nestjs/testing';
import { ActiveCardService } from './activeCard.service';

describe('ActiveCardService', () => {
  let service: ActiveCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActiveCardService],
    }).compile();

    service = module.get<ActiveCardService>(ActiveCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

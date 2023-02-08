import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCardService } from './RemoveCard.service';

describe('RemoveCardService', () => {
  let service: RemoveCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveCardService],
    }).compile();

    service = module.get<RemoveCardService>(RemoveCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CreateCardService } from './createCard.service';

describe('CreateCardService', () => {
  let service: CreateCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCardService],
    }).compile();

    service = module.get<CreateCardService>(CreateCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

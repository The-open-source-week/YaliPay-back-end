import { Test, TestingModule } from '@nestjs/testing';
import { DesactiveCardService } from './desactiveCard.service';

describe('DesactiveCardService', () => {
  let service: DesactiveCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesactiveCardService],
    }).compile();

    service = module.get<DesactiveCardService>(DesactiveCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

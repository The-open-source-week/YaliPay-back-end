import { Test, TestingModule } from '@nestjs/testing';
import { CreateTransferencesService } from './create-transferences.service';

describe('TransferencesService', () => {
  let service: CreateTransferencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTransferencesService],
    }).compile();

    service = module.get<CreateTransferencesService>(
      CreateTransferencesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

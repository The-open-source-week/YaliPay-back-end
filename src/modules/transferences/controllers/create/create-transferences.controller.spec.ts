import { Test, TestingModule } from '@nestjs/testing';
import { CreateTransferencesController } from './create-transferences.controller';
import { CreateTransferencesService } from '../../services/create/create-transferences.service';

describe('TransferencesController', () => {
  let controller: CreateTransferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateTransferencesController],
      providers: [CreateTransferencesService],
    }).compile();

    controller = module.get<CreateTransferencesController>(
      CreateTransferencesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

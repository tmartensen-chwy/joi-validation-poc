import { Test, TestingModule } from '@nestjs/testing';
import { BarController } from './bar.controller';

describe('Bar Controller', () => {
  let controller: BarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarController],
    }).compile();

    controller = module.get<BarController>(BarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

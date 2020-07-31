import { Test, TestingModule } from '@nestjs/testing';
import { BarService } from './bar.service';

describe('BarService', () => {
  let service: BarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarService],
    }).compile();

    service = module.get<BarService>(BarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionItemService } from './subscription-item.service';

describe('SubscriptionItemService', () => {
  let service: SubscriptionItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionItemService],
    }).compile();

    service = module.get<SubscriptionItemService>(SubscriptionItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

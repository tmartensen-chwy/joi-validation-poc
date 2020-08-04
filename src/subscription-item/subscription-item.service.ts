import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { v4 as uuidv4 } from 'uuid';
import {
  SubscriptionItem,
  SubscriptionItemKey,
} from './subscription-item.interface';

@Injectable()
export class SubscriptionItemService {
  constructor(
    @InjectModel('Subscription')
    private model: Model<SubscriptionItem, SubscriptionItemKey>,
  ) {}

  create(pk: string, item: SubscriptionItem) {
    const itemId = uuidv4();
    return this.model.create({ ...item, pk, sk: itemId });
  }

  find(key: SubscriptionItemKey) {
    return this.model.get(key);
  }
}

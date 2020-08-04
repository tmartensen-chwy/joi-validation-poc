import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

import { Subscription, SubscriptionKey } from './subscription.interface';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel('Subscription')
    private model: Model<Subscription, SubscriptionKey>,
  ) {}

  create(subscription: Subscription) {
    const { ffm_freq, ffm_uom } = subscription;
    const id = uuidv4();
    const ffm_next_date = DateTime.utc()
      .plus({ [ffm_uom]: ffm_freq })
      .startOf('day')
      .toJSDate();
    return this.model.create({
      ...subscription,
      pk: id,
      sk: id,
      ffm_next_date,
    });
  }

  find(key: SubscriptionKey) {
    return this.model.get(key);
  }
}

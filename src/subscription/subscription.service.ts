import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import * as dynamoose from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';
import { SubscriptionQueryTypes } from './subscription.enum';

import {
  Subscription,
  SubscriptionKey,
  SubscriptionQuery,
} from './subscription.interface';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel('Subscription')
    private model: Model<Subscription, SubscriptionKey>,
  ) {}

  create(subscription: Subscription): Promise<Subscription> {
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

  findByKey(key: SubscriptionKey): Promise<Subscription> {
    return this.model.get(key);
  }

  find(query?: SubscriptionQuery): Promise<Subscription[]> {
    let q = new dynamoose.Condition();
    const { filter_by, filter_by_id, limit = 0 } = query;
    if (filter_by) {
      q.where(SubscriptionQueryTypes[filter_by]).eq(filter_by_id);
    }
    return this.model.query(q).limit(limit).exec();
  }
}

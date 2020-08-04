import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';

import { SubscriptionController } from './subscription.controller';

import { SubscriptionSchema } from './subscription.schema';
import { SubscriptionItemSchema } from '../subscription-item/subscription-item.schema';

import { SubscriptionService } from './subscription.service';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'Subscription',
        schema: [SubscriptionSchema, SubscriptionItemSchema],
      },
    ]),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, SubscriptionItemService],
})
export class SubscriptionModule {}

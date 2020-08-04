import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Subscription } from './subscription.interface';
import { SubscriptionItem } from '../subscription-item/subscription-item.interface';
import { SubscriptionService } from './subscription.service';
import { SubscriptionItemService } from '../subscription-item/subscription-item.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(
    private subscriptionService: SubscriptionService,
    private subscriptionItemService: SubscriptionItemService,
  ) {}

  @Post()
  createSubscription(@Body() subscription: Subscription) {
    return this.subscriptionService.create(subscription);
  }

  @Get(':pk')
  findSubscription(    @Param('pk', ParseUUIDPipe) pk: string,
  ) {
    return this.subscriptionService.find({pk, sk:pk})
  }

  @Post(':pk/items')
  createItem(
    @Param('pk', ParseUUIDPipe) pk: string,
    @Body() item: SubscriptionItem,
  ) {
    return this.subscriptionItemService.create(pk, item);
  }

  @Get(':pk/items/:sk')
  findItemById(
    @Param('pk', ParseUUIDPipe) pk: string,
    @Param('sk', ParseUUIDPipe) sk: string,
  ) {
    return this.subscriptionItemService.find({ pk, sk });
  }
}

import { Module } from '@nestjs/common';
import { DynamooseModule } from "nestjs-dynamoose";

import { BarController } from "./bar.controller";
import { BarSchema } from "./bar.schema";
import { BarService } from './bar.service';

@Module({
  imports: [DynamooseModule.forFeature([{ name: 'Bar', schema: BarSchema }])],
  controllers: [BarController],
  providers: [BarService],
})
export class BarModule {}

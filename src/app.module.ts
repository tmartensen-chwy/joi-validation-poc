import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamooseModule } from 'nestjs-dynamoose';
import * as dynamoose from 'dynamoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';
import { Foo } from './foo/foo.entity';
import { BarModule } from './bar/bar.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'foo-db',
      synchronize: true,
      keepConnectionAlive: true, //had to do this to keep e2e tests from bombing, see https://github.com/nestjs/typeorm/issues/61
      entities: [Foo],
    }),
    DynamooseModule.forRootAsync({
      useFactory: () => {
        dynamoose.logger.providers.set(console);
        return {
          aws: {
            region: 'localhost',
            accessKeyId: '',
            secretAccessKey: '',
          },
          local: true,
          model: {
            create: true,
          },
        };
      },
    }),
    FooModule,
    BarModule,
    SubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';
import { Foo } from './foo/foo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'foo-db',
      synchronize: true,
      keepConnectionAlive: true, //had to do this to keep e2e tests from bombing, see https://github.com/nestjs/typeorm/issues/61
      entities: [Foo],
    }),
    FooModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

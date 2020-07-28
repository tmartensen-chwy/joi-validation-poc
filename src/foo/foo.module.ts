import { Module } from '@nestjs/common';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foo } from './foo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Foo])],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}

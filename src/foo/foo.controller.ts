import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { FooService } from './foo.service';
import { Foo } from './foo.entity';
import { JoiValidationPipe } from '../joi-validation.pipe';
import { FOO_SCHEMA, FOO_SCHEMA_PATCH } from '../validation-schemas';

@Controller('foo')
export class FooController {
  constructor(private fooService: FooService) {}

  @Get()
  findAll() {
    return this.fooService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.fooService.find(id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(FOO_SCHEMA))
  create(@Body() foo: Foo) {
    return this.fooService.create(foo);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(FOO_SCHEMA))
  update(@Param('id', ParseUUIDPipe) id, @Body() foo: Foo) {
    return this.fooService.update(id, foo);
  }

  @Patch(':id')
  @UsePipes(new JoiValidationPipe(FOO_SCHEMA_PATCH))
  patch(@Param('id', ParseUUIDPipe) id, @Body() foo: Foo) {
    return this.fooService.patch(id, foo);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id) {
    return this.fooService.delete(id);
  }
}

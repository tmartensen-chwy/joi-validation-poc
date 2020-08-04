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
import { JoiValidationPipe } from '../joi-validation.pipe';
import { BAR_SCHEMA, BAR_SCHEMA_PATCH } from '../validation-schemas';
import { Bar } from './bar.interface';
import { BarService } from './bar.service';

@Controller('bar')
export class BarController {
  constructor(private barService: BarService) {}

  @Get()
  findAll() {
    return this.barService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.barService.find({ id });
  }

  @Post()
  @UsePipes(new JoiValidationPipe(BAR_SCHEMA))
  create(@Body() bar: Bar) {
    return this.barService.create(bar);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(BAR_SCHEMA))
  update(@Param('id', ParseUUIDPipe) id: string, @Body() bar: Bar) {
    return this.barService.update({ id }, bar);
  }

  @Patch(':id')
  @UsePipes(new JoiValidationPipe(BAR_SCHEMA_PATCH))
  patch(@Param('id', ParseUUIDPipe) id: string, @Body() bar: Bar) {
    return this.barService.patch({ id }, bar);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.barService.delete({ id });
  }
}

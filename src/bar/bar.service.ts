import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { v4 as uuidv4 } from 'uuid';

import { Bar, BarKey } from './bar.interface';

@Injectable()
export class BarService {
  constructor(
    @InjectModel('Bar')
    private barModel: Model<Bar, BarKey>,
  ) {}

  findAll() {
    return this.barModel.scan().exec();
  }

  find(key: BarKey) {
    return this.barModel.get(key);
  }

  create(bar: Bar) {
    return this.barModel.create({ ...bar, id: uuidv4() });
  }

  update(key: BarKey, bar: Bar) {
    return this.barModel.update(key, bar);
  }

  patch(key: BarKey, bar: Partial<Bar>) {
    return this.barModel.update(key, bar);
  }

  delete(key: BarKey) {
    return this.barModel.delete(key);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Foo } from './foo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FooService {
  constructor(
    @InjectRepository(Foo)
    private fooRepository: Repository<Foo>,
  ) {}

  find(id: string): Promise<Foo> {
    return this.fooRepository.findOne(id);
  }

  findAll(): Promise<Foo[]> {
    return this.fooRepository.find();
  }

  async create(foo: Foo): Promise<Foo> {
    // strip the id, just in case
    const { id, ...fooData } = foo;
    return this.fooRepository.save(fooData);
  }

  async update(id: string, foo: Foo): Promise<Foo> {
    await this.fooRepository.update(id, foo);
    return this.fooRepository.findOne(id);
  }

  async patch(id: string, foo: Foo): Promise<Foo> {
    await this.fooRepository.update(id, { ...foo });
    return this.fooRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.fooRepository.delete(id);
    return;
  }
}

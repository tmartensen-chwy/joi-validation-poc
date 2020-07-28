import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Foo {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  foo: string;
  @Column()
  bar: string;
  @Column()
  version: number;
}

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Foo } from '../src/foo/foo.entity';
import { getConnection } from 'typeorm';

describe('FooController (e2e)', () => {
  let app: INestApplication;
  let currentFoo;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Foo)
      .execute();
  });

  it('/foo (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/foo')
      .send({
        foo: 'Some foo',
        bar: 'Some bar',
        version: 1,
      })
      .expect(201);

    currentFoo = response.body;
  });

  it('/foo (GET)', async () => {
    return request(app.getHttpServer())
      .get('/foo')
      .expect(200)
      .expect([currentFoo]);
  });

  it('/foo/:id (PUT)', async () => {
    const updatedFoo = {
      ...currentFoo,
      id: undefined,
      foo: 'Another Foo',
    };
    const response = await request(app.getHttpServer())
      .put(`/foo/${currentFoo.id}`)
      .send(updatedFoo)
      .expect(200)
      .expect({...updatedFoo, id: currentFoo.id})

    currentFoo = response.body;
  });

  it('/foo/:id (PATCH)', async () => {
    const patchedFoo = {
      foo: 'Even More Foo'
    };
    return request(app.getHttpServer())
    .patch(`/foo/${currentFoo.id}`)
    .send(patchedFoo)
    .expect(200)
    .expect({...currentFoo, foo: 'Even More Foo', id: currentFoo.id})
  });
});

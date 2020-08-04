import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('BarController (e2e)', () => {
  let app: INestApplication;
  let currentBar;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/bar (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/bar')
      .send({
        name: 'Travis Martensen',
        email: 'tmartensen@chewy.com',
        bar: 'Some bar',
      })
      .expect(201);

    currentBar = response.body;
  });

  it('/bar (GET)', async () => {
    return request(app.getHttpServer())
      .get('/bar')
      .expect(200)
      .expect([currentBar]);
  });

  it('/bar/:id (PUT)', async () => {
    const updatedFoo = {
      ...currentBar,
      id: undefined,
      bar: 'Some more bar',
    };
    const response = await request(app.getHttpServer())
      .put(`/bar/${currentBar.id}`)
      .send(updatedFoo)
      .expect(200)
      .expect({ ...updatedFoo, id: currentBar.id });

    currentBar = response.body;
  });

  it('/bar/:id (PATCH)', async () => {
    const patchedBar = {
      bar: 'Even more bar',
    };
    return request(app.getHttpServer())
      .patch(`/bar/${currentBar.id}`)
      .send(patchedBar)
      .expect(200)
      .expect({ ...currentBar, bar: 'Even more bar', id: currentBar.id });
  });

  it('/bar/:id (DELETE)', async () => {
    return request(app.getHttpServer())
      .delete(`/bar/${currentBar.id}`)
      .expect(200);
  });
});

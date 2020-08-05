import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import * as DynamoDbLocal from 'dynamodb-local';
import { AppModule } from '../src/app.module';

describe('SubscriptionController (e2e)', () => {
  let app: INestApplication;
  const memberid = uuidv4();
  const source_orderid = uuidv4();
  let currentSubscription;

  beforeAll(async () => {
    // launch in-memory db
    await DynamoDbLocal.launch(8000, null, [], false, true);
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    DynamoDbLocal.stop(8000);
  });

  it('/subscriptions (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/subscriptions')
      .send({
        memberid,
        source_orderid,
        name: 'Test Subscription #1',
        ffm_freq: 2,
        ffm_uom: 'WEEK',
      })
      .expect(201);

    currentSubscription = response.body;
  });

  it('/subscriptions/:pk (GET)', async () => {
    await request(app.getHttpServer())
      .get(`/subscriptions/${currentSubscription.pk}`)
      .expect(200)
      .expect(currentSubscription);
  });
});

import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
import { DynamooseModule } from 'nestjs-dynamoose';
import { Test } from '@nestjs/testing';
import * as path from 'path';
import { execSync } from 'child_process';
import { BarService } from './bar.service';
import { BarModule } from './bar.module';
import { Bar } from './bar.interface';
import { DynamoDB } from 'aws-sdk';

process.env.AWS_ACCESS_KEY_ID = 'x';
process.env.AWS_SECRET_ACCESS_KEY = 'x';
process.env.AWS_REGION = 'us-east-1';

const AWS_OPTS: ServiceConfigurationOptions = {
  endpoint: 'http://localhost:4567',
};

describe('SubscriptionService', () => {
  jest.setTimeout(60000);

  let client: DocumentClient;
  let testable: BarService;

  beforeAll(async () => {
    execSync('docker-compose up -d', {
      cwd: path.join(__dirname, '..', '..'),
    });

    const ddb = new DynamoDB(AWS_OPTS);
    await ddb
      .createTable({
        TableName: 'Bar',
        AttributeDefinitions: [
          {
            AttributeName: 'id',
            AttributeType: 'S',
          },
        ],
        KeySchema: [
          {
            AttributeName: 'id',
            KeyType: 'HASH',
          },
        ],
        ProvisionedThroughput: {
          WriteCapacityUnits: 1,
          ReadCapacityUnits: 1,
        },
      })
      .promise();
    client = new DocumentClient(AWS_OPTS);
  });

  afterAll(() => {
    execSync('docker-compose down', {
      cwd: path.join(__dirname, '..', '..'),
    });
  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        DynamooseModule.forRoot({
          aws: {
            region: 'localhost',
            accessKeyId: '',
            secretAccessKey: '',
          },
          local: 'http://localhost:4567',
          model: {
            create: true,
          },
        }),
        BarModule,
      ],
    }).compile();
    testable = module.get<BarService>(BarService);
  });

  it('should do foo', async () => {
    await client
      .put({
        TableName: 'Bar',
        Item: {
          id: 'david',
          name: 'David Zemon',
          email: 'dzemon@chewy.com',
        } as Bar,
      })
      .promise();

    const actual = await testable.find({ id: 'david' });
    expect(actual).toMatchObject({
      email: 'dzemon@chewy.com',
      id: 'david',
      name: 'David Zemon',
    } as Bar);
  });
});

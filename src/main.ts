import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as DynamoDbLocal from 'dynamodb-local';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Joi Validation POC')
    .setDescription('Simple POC to test Joi validation')
    .setVersion('1.0')
    .addTag('joi')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Start Local DynamoDB here
  await DynamoDbLocal.launch(8000, path.join(__dirname, '..', 'dynamo'));

  await app.listen(3000);
}
bootstrap();

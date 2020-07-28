import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    // Only doing body checking with this pipe for now
    if (metadata.type === 'body') {
      const { error } = this.schema.validate(value);
      if (error) {
        console.error(`Validation errors: ${JSON.stringify(error, null, 2)}`);
        throw new BadRequestException('Validation failed', error.details);
      }
    }
    return value;
  }
}

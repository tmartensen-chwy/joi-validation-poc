import { Schema } from 'dynamoose';

export const BarSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  bar: {
    type: String,
  },
});

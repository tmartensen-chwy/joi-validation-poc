import { Schema } from 'dynamoose';

export const MemberConfigSchema = new Schema({
  pk: {
    type: String,
    hashKey: true,
  },
  sk: {
    type: String,
    rangeKey: true,
  },
  memberid: String,
  key: String,
  value: String,
  _ver: Number,
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'lastupdate',
  },
})

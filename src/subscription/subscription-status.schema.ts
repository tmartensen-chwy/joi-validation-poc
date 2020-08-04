import { Schema } from 'dynamoose';

export const SubscriptionStatusSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      rangeKey: true,
    },
    subid: String,
    status: String,
    update: String,
    updated_by: String,
    comment: String,
    _ver: Number,
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  },
);

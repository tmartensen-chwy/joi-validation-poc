import { Schema } from 'dynamoose';

export const SubscriptionOrderSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      rangeKey: true,
    },
    GSIPK1: String,
    GSISK1: String,
    GSIPK2: String,
    GSISK2: String,
    orderid: String,
    subid: String,
    placed: Date,
    _ver: Number,
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  },
);

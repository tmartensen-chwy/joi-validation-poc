import { Schema } from 'dynamoose';

export const PaymentSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      rangeKey: true,
    },
    gsipk1: String,
    gsisk1: String,
    payid: String,
    payrefid: String,
    walletid: String,
    paymethod: String,
    amt: Number,
    sort: Number,
    _ver: Number,
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  },
);

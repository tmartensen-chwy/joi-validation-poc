import { Schema } from 'dynamoose';

export const OrderSchema = new Schema({
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
  _et: String,
  orderid: String,
  status: String,
  blocked: Boolean,
  placed: String,
  _ver: Number,
},
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  })

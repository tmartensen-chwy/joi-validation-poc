import { Schema } from 'dynamoose'

export const ReplacementItemSchema = new Schema({
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
  subid: String,
  type: String,
  oldsku: String,
  newsku: String,
  oldquan: Number,
  newquan: Number,
  sort: Number,
  _ver: Number
},
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  })

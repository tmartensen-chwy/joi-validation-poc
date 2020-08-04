import { Schema } from 'dynamoose';

export const SubscriptionItemSchema = new Schema(
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
    gsipk2: String,
    gsisk2: String,
    itemid: String,
    catid: String,
    subid: String,
    sku: String,
    bundle_sku: String,
    quan: Number,
    price: Number,
    status: String,
    currency: String,
    totalprod: Number,
    taxamt: Number,
    shpchrg: Number,
    shptaxamt: Number,
    totaladj: Number,
    offerid: String,
    expedited: Boolean,
    onetime: Boolean,
    skipnext: Boolean,
    prepflags: Number,
    _ver: String,
    attribs: Object,
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  },
);

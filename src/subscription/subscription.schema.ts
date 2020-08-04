import { Schema } from 'dynamoose';

export const SubscriptionSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
    },
    sk: {
      type: String,
      rangeKey: true,
    },
    gsi1pk: String,
    gsi1sk: String,
    gsi3pk: Number,
    gsi3sk: String,
    memberid: String,
    subid: String,
    name: String,
    kount: String,
    status: String,
    editorid: String,
    currency: String,
    totalprod: Number,
    totaltax: Number,
    totalshp: Number,
    totalshptax: Number,
    totaladj: Number,
    blocked: Boolean,
    bchan: String,
    ip: String,
    siteid: String,
    sub_siteid: String,
    orgid: String,
    source_orderid: String,
    ffm_freq: Number,
    ffm_uom: String,
    ffm_next_date: Date,
    lastpreprocess: String,
    start: Date,
    placed: Date,
    cancel_reason: String,
    cancel_comment: String,
    cancel_bchan: String,
    cancel_by: String,
    promos: {
      // @ts-ignore
      type: Set,
      schema: [String],
    },
    _ver: Number,
  },
  {
    timestamps: {
      createdAt: 'created',
      updatedAt: 'lastupdate',
    },
  },
);

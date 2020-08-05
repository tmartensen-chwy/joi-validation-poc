import { Schema } from 'dynamoose';

export const SubscriptionSchema = new Schema(
  {
    pk: {
      type: String,
      hashKey: true,
      // set: (value:string) => `SUB#${value}`,
      // get: (value:string) => value.slice(4)
    },
    sk: {
      type: String,
      rangeKey: true,
      // set: (value:string) => `SUB#${value}`,
      // get: (value:string) => value.slice(4)
    },
    memberid: {
      type: String,
      index: {
        name: 'memberid_idx',
        global: true,
      },
    },
    source_orderid: {
      type: String,
      index: {
        name: 'source_orderid_idx',
        global: true,
      },
    },
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

export interface SubscriptionKey {
  pk: string;
  sk: string;
}

export interface Subscription extends SubscriptionKey {
  gsi1pk: string;
  gsi1sk: string;
  gsi3pk: Number;
  gsi3sk: string;
  memberid: string;
  subid: string;
  name: string;
  kount: string;
  status: string;
  editorid: string;
  currency: string;
  totalprod: Number;
  totaltax: Number;
  totalshp: Number;
  totalshptax: Number;
  totaladj: Number;
  blocked: Boolean;
  bchan: string;
  ip: string;
  siteid: string;
  sub_siteid: string;
  orgid: string;
  source_orderid: string;
  ffm_freq: Number;
  ffm_uom: string;
  ffm_next_date: Date;
  lastpreprocess: Date;
  start: Date;
  placed: Date;
  cancel_reason: string;
  cancel_comment: string;
  cancel_bchan: string;
  cancel_by: string;
  promos: Set<String>;
  _ver: Number;
  createdAt: Date;
  updatedAt: Date;
}

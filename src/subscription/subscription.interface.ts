export interface SubscriptionKey {
  pk: string;
  sk: string;
}

export interface Subscription extends SubscriptionKey {
  gsi1pk: string;
  gsi1sk: string;
  gsi3pk: number;
  gsi3sk: string;
  memberid: string;
  subid: string;
  name: string;
  kount: string;
  status: string;
  editorid: string;
  currency: string;
  totalprod: number;
  totaltax: number;
  totalshp: number;
  totalshptax: number;
  totaladj: number;
  blocked: boolean;
  bchan: string;
  ip: string;
  siteid: string;
  sub_siteid: string;
  orgid: string;
  source_orderid: string;
  ffm_freq: number;
  ffm_uom: string;
  ffm_next_date: Date;
  lastpreprocess: Date;
  start: Date;
  placed: Date;
  cancel_reason: string;
  cancel_comment: string;
  cancel_bchan: string;
  cancel_by: string;
  promos: Set<string>;
  _ver: number;
  createdAt: Date;
  updatedAt: Date;
}

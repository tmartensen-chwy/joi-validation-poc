export interface SubscriptionItemKey {
  pk: string;
  sk: string;
}

export interface SubscriptionItem extends SubscriptionItemKey {
  gsipk1: string,
  gsisk1: string,
  gsipk2: string,
  gsisk2: string,
  itemid: string,
  catid: string,
  subid: string,
  sku: string,
  bundle_sku: string,
  quan: Number,
  price: Number,
  status: string,
  currency: string,
  totalprod: Number,
  taxamt: Number,
  shpchrg: Number,
  shptaxamt: Number,
  totaladj: Number,
  offerid: string,
  expedited: Boolean,
  onetime: Boolean,
  skipnext: Boolean,
  prepflags: Number,
  _ver: string,
  attribs: Object,
  createdAt: Date,
  updatedAt: Date
}

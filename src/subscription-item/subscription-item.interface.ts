export interface SubscriptionItemKey {
  pk: string;
  sk: string;
}

export interface SubscriptionItem extends SubscriptionItemKey {
  gsipk1: string;
  gsisk1: string;
  gsipk2: string;
  gsisk2: string;
  itemid: string;
  catid: string;
  subid: string;
  sku: string;
  bundle_sku: string;
  quan: number;
  price: number;
  status: string;
  currency: string;
  totalprod: number;
  taxamt: number;
  shpchrg: number;
  shptaxamt: number;
  totaladj: number;
  offerid: string;
  expedited: boolean;
  onetime: boolean;
  skipnext: boolean;
  prepflags: number;
  _ver: string;
  attribs: Object;
  createdAt: Date;
  updatedAt: Date;
}

export interface BarKey {
  id: string;
}

export interface Bar extends BarKey {
  name: string;
  email?: string;
  bar?: string;
}

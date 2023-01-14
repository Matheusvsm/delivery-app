import { ProductType } from './product';

export type CartItemType = {
  product: ProductType;
  quantity: number;
};

export type CartType = Array<CartItemType>;

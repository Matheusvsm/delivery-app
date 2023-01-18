import { CartType } from "./cart"
import { UserType } from "./user";

export type OrderType = {
    cart: CartType;
    user: UserType;
}
import { CartType } from "./cart"
import { UserType } from "./user";

export type OrderType = {
    id: number;
    produtos: CartType;
    user: UserType;
    status: string;
    value: number;
}
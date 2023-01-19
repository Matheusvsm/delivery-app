export type UserType = {
    id: number;
    name: string;
    email: string;
    address: string;
    address_complement?: string;
    phone: string;
    password: string;
    image?: string;
    isAdmin?: boolean;
}
export interface Product {
    name: string;
    type: 'clothes' | 'food';
    category: string;
    price: number;
    imageUrl: string;
    wishlist: boolean;
}
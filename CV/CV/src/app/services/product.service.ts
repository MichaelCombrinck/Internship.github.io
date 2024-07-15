import { Injectable } from "@angular/core";
import { Product } from "../core/models/product";

@Injectable({providedIn: 'root'})
export class ProductService {
    public products: Product[]  = [];
    public productsAddedToCheckout: Product[] = [];

    public getProduct() {
        return this.products;
    }

    public setProduct(products: Product[]) {
        this.products = products;
    }

}
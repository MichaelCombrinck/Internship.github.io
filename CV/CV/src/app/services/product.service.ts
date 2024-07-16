import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products: Product[] = [];
  public productsAddedToCheckout: Product[] = [];
  public wishlistProducts: Product[] = [];
  public allProducts: Product[] = [];

  public getAllProducts() {
    return this.allProducts;
  }

  public setAllProducts(allProducts: Product[]) {
    return this.allProducts.push(...allProducts);
  }

  public getProductWishlistProducts() {
    return this.wishlistProducts;
  }

  public setWishlistProduct(products: Product[]) {
    this.wishlistProducts.push(...products);
  }

  public addProductToWishlist(product: Product) {
    this.wishlistProducts.push(product);
  }

  public removeWishlistProduct(removedWishlist: Product) {
    const index = this.wishlistProducts.indexOf(removedWishlist);
    if (index !== -1) {
      this.wishlistProducts.splice(index, 1);
    }
  }
}

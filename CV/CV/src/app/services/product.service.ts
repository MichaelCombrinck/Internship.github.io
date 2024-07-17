import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

  ProductList = new BehaviorSubject< Product[]>([]);
  public allProducts: Product[] = [];

  public products: Product[] = [];
  public productsAddedToCheckout: Product[] = [];
  public wishlistProducts: Product[] = [];



  // System Products

  public getAllProducts() {
    return this.allProducts;
  }

  public setAllProducts(allProducts: Product[]) {
    this.allProducts.push(...allProducts);
    this.ProductList.next(this.allProducts);
  }


  // Wishlist Section

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

  // Checkout Section

  public getCheckoutProducts() {
    return this.productsAddedToCheckout;
  }

  public addCheckoutProducts(product: Product) {
    this.productsAddedToCheckout.push(product);
  }


  // Filtering Section

  public filteringProductSection(category: string) {
    const value = this.allProducts.filter(p => p.category === category);
    this.ProductList.next(value);
    console.log(value)
  }


  // Change Calculation Section




}

import { Injectable } from '@angular/core';
import { Product } from '../core/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

  public ProductList = new BehaviorSubject< Product[]>([]);
  public allProducts: Product[] = [];

  public products: Product[] = [];
  public productsAddedToCheckout: Product[] = [];
  public walletList = new BehaviorSubject<Product[]>([]);
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
    if (!this.wishlistProducts.some(p => p.name === product.name && p.type === product.type)) {
      this.wishlistProducts.push(product);
    }
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
    const existingProduct = this.productsAddedToCheckout.find(
      p => p.name === product.name && p.type === product.type
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.productsAddedToCheckout.push({ ...product, quantity: 1 });
    }

    this.walletList.next(this.productsAddedToCheckout);
  }


  // Filtering Section

  public filteringProductSection(categories: string[], searchQuery: string) {
    let filteredProducts = this.allProducts;

    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => categories.includes(product.category));
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    this.ProductList.next(filteredProducts);
  }




  // Change Calculation Section




}

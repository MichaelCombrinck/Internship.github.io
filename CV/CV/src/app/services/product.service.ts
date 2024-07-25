import { Inject, Injectable } from '@angular/core';
import { Product } from '../core/models/product';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public ProductList = new BehaviorSubject<Product[]>([]);
  public allProducts: Product[] = [];

  public products: Product[] = [];
  public checkoutList: Product[] = [];
  public walletList = new BehaviorSubject<Product[]>([]);
  public wishlistProducts: Product[] = [];

  localStorage!: Storage | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.localStorage = document.defaultView?.localStorage;
    this.loadWishlistFromLocalStorage();
  }

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
    this.loadWishlistFromLocalStorage();
    return this.wishlistProducts;

  }

  public setWishlistProduct(products: Product[]) {
    this.wishlistProducts.push(...products);
    this.saveWishlistToLocalStorage();
  }

  private saveWishlistToLocalStorage() {
    console.log('the value of the this.wishlistProducts: ', this.wishlistProducts);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistProducts));
  }

  private loadWishlistFromLocalStorage() {
    const storedWishlist = this.localStorage?.getItem('wishlist');
    if (storedWishlist) {
      this.wishlistProducts = JSON.parse(storedWishlist);
      this.ProductList.next(this.wishlistProducts);
    }
  }

  public addProductToWishlist(product: Product) {
    if (
      !this.wishlistProducts.some(
        (p) => p.name === product.name && p.type === product.type
      )
    ) {
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
    return this.checkoutList;
  }

  public addCheckoutProducts(product: Product) {
    const existingProduct = this.checkoutList.find(
      (p) => p.name === product.name && p.type === product.type
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.checkoutList.push({ ...product, quantity: 1 });
    }
    this.setProductCheckoutQuantity(product);
    this.walletList.next(this.checkoutList);
  }

  public removeCheckoutProduct(removedCheckoutProduct: Product) {
    console.log('this is the value of the Product which is going to be removed from the checkout, ', removedCheckoutProduct)
    const index = this.checkoutList.indexOf(removedCheckoutProduct);
    if (index !== -1) {
      this.checkoutList.splice(index, 1);
      this.walletList.next(this.checkoutList);
    }
  }

  public setProductCheckoutQuantity(products: Product) {
    const index = this.checkoutList.indexOf(products, 0);
    if (index === -1) {
      return;
    }
    this.checkoutList[index].quantity += 1;
  }

  // Filtering Section

  public filteringProductSection(categories: string[], searchQuery: string) {
    let filteredProducts = this.allProducts;

    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categories.includes(product.category)
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    this.ProductList.next(filteredProducts);
  }
}

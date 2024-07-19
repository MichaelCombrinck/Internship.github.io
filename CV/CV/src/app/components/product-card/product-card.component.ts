import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../core/models/product';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {

  public products: Product[] = []
  public initProducts: Product[] = [
    {
      name: 'Top-Down-Sneakers',
      type: 'clothes',
      category: 'sneakers',
      quantity: 1,
      price: 40.0,
      imageUrl: '../../../assets/images/sneaker-one.jpg',
      wishlist: false,
    },
    {
      name: 'Night Sneakers',
      type: 'clothes',
      category: 'sneakers',
      quantity: 1,
      price: 2000.0,
      imageUrl: '../../../assets/images/shrocs.jpg',
      wishlist: false,
    },
    {
      name: 'T-Shirt Crocodile',
      type: 'clothes',
      category: 't-shirt',
      quantity: 1,
      price: 20000.0,
      imageUrl: '../../../assets/images/crocodile-leather.jpg',
      wishlist: false,
    },
    {
      name: 'Denim Jeans',
      type: 'clothes',
      category: 'jeans',
      quantity: 1,
      price: 5.0,
      imageUrl: '../../../assets/images/denim-jeans.jpg',
      wishlist: false,
    },
    {
      name: 'Grass Hopper',
      type: 'food',
      category: 'chinese',
      quantity: 1,
      price: 1000.0,
      imageUrl: '../../../assets/images/grasshopper.jpg',
      wishlist: false,
    },
    {
      name: 'Biltong',
      type: 'food',
      category: 'south-african',
      quantity: 1,
      price: 2000.0,
      imageUrl: '../../../assets/images/billtong.jpg',
      wishlist: false,
    },
    {
      name: 'Spaghetti',
      type: 'food',
      category: 'italian',
      quantity: 1,
      price: 100.0,
      imageUrl: '../../../assets/images/spaghetti.jpg',
      wishlist: false,
    },
  ];

  public productList: Product[] = [];

  public productIsWishlist: Product[] = [];

  constructor(private _snackBar: MatSnackBar, private _productService: ProductService) {
   

  }

  ngOnInit(): void {
    this._productService.ProductList.subscribe(value => {
      this.products = [];     
      this.products.push(...value);
    });


    if (this.products.length > 0 ){
      return
    }
    this._productService.setAllProducts(this.initProducts);
  }

  onWishlistToggleClick(index: number) {
    if (this.products[index].wishlist) {
      this.products[index].wishlist = false;
      const productToRemove = this.products[index];
      this._productService.removeWishlistProduct(productToRemove);
      this._snackBar.open('Product was removed from Wishlist', 'Close', {
        duration: 100000,
        panelClass: ['success-snackbar'],
      });
    } else {
      this.products[index].wishlist = true;
      this._productService.addProductToWishlist(this.products[index]);
      this._snackBar.open('Product added to Wishlist', 'Close', {
        duration: 100000,
        panelClass: ['success-snackbar'],
      });
    }
  }

  onAddToCardClick(product:Product) {
    this._productService.addCheckoutProducts(product)
    this._snackBar.open('Product added to Cart ','Close', {
      duration: 5000,
    })
  }

 
}

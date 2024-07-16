import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ProductCardComponent,
    CommonModule
  ],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss',
})
export class ProductListPageComponent {

  constructor(private _route: Router, private _productService: ProductService) {
    this._productService.getAllProducts();
    console.log('Here is the value of the products service: ',this._productService.getAllProducts())
  }

  onWishlistLinkClick() {
    this._route.navigate(['wishlist'])
  }

  onCheckoutCardClick() {
    this._route.navigate(['checkout']);
  }

  onCheckCategory(category: string) {
    const products = this._productService.getAllProducts();
    console.log('This is the all products: ', products);
    return products;
  }
}

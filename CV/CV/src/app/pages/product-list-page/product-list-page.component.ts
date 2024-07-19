import { Component, OnInit } from '@angular/core';
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
import { Filters, Product } from '../../core/models/product';
import { BehaviorSubject } from 'rxjs';

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
    CommonModule,
  ],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss',
})
export class ProductListPageComponent {
  public filteringList: string[] = [];

  public searchQuery: string = '';

  filters: Filters[] = [
    {
      filterName: 'Foods',
      items: [
        {
          displayValue: 'Italian',
          value: 'italian',
        },
        {
          displayValue: 'Chinese',
          value: 'chinese',
        },
        {
          displayValue: 'South-African',
          value: 'south-african',
        },
      ],
    },
    {
      filterName: 'Clothes',
      items: [
        {
          displayValue: 'Sneakers',
          value: 'sneakers',
        },
        {
          displayValue: 'T-Shirt',
          value: 't-shirt',
        },
        {
          displayValue: 'Jeans',
          value: 'jeans',
        },
        {
          displayValue: 'Golf Shirts',
          value: 'golfShirts',
        },
        {
          displayValue: 'Jackets',
          value: 'jackets',
        },
      ],
    },
  ];

  constructor(private _route: Router, private _productService: ProductService) {
    this._productService.getAllProducts();
  }


  onWishlistLinkClick() {
    this._route.navigate(['wishlist']);
  }

  onCheckoutCardClick() {
    this._route.navigate(['checkout']);
  }

  onCheckCategory(event: any, category: string) {
    if (event.checked) {
      this.filteringList.push(category);
    } else {
      const index = this.filteringList.indexOf(category);
      if (index > -1) {
        this.filteringList.splice(index, 1);
      }
    }
    this.applyFilters();
  }

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement | null;
    if (inputElement) {
      this.searchQuery = inputElement.value;
      this.applyFilters();
    }
  }

  applyFilters() {
    this._productService.filteringProductSection(
      this.filteringList,
      this.searchQuery
    );
  }
}

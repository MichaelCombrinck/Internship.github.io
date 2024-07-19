import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
  ],
  templateUrl: './wishlist-page.component.html',
  styleUrl: './wishlist-page.component.scss',
})
export class WishlistPageComponent {
  constructor(
    private _route: Router,
    private _productService: ProductService
  ) {}

  public displayedColumns: string[] = [
    'imageUrl',
    'name',
    'type',
    'category',
    'price',
  ];
  public dataSource = this._productService.getProductWishlistProducts();

  public total: number = 2000;

  onHouseLinkClick() {
    this._route.navigate(['product-list-page']);
  }
}

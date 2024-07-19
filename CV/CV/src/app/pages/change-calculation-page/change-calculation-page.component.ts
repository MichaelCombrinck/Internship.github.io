import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product';
import { ProductService } from '../../services/product.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-change-calculation-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './change-calculation-page.component.html',
  styleUrl: './change-calculation-page.component.scss',
})
export class ChangeCalculationPageComponent implements OnInit {
  public totalOfCard: number = 0;

  public displayedColumns: string[] = [
    'imageUrl',
    'name',
    'type',
    'category',
    'quantity',
    'price',
    'totalCost',
  ];
  public dataSource = this._productService.getCheckoutProducts();

  ngOnInit(): void {
    this.calculateTotal();
  }

  constructor(
    private _router: Router,
    private _productService: ProductService
  ) {
    this.calculateTotal();
  }

  onHomeLinkClick() {
    this._router.navigate(['product-list-page']);
  }

  calculateTotal() {
    const products = this._productService.getCheckoutProducts();

    this.totalOfCard = products.reduce(
      (sum, current) => sum + current.price * current.quantity,
      0
    );
  }
}

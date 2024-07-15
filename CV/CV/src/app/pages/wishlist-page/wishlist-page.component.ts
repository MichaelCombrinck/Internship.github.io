import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product';


const ELEMENT_DATA: Product[] = [
  {
      name: "T-Shirt",
      type: "clothes",
      category: "Men's Clothing",
      price: 19.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: false
  },
  {
      name: "Jeans",
      type: "clothes",
      category: "Women's Clothing",
      price: 49.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: true
  },
  {
      name: "Jacket",
      type: "clothes",
      category: "Men's Clothing",
      price: 79.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: false
  },
  {
      name: "Sweater",
      type: "clothes",
      category: "Women's Clothing",
      price: 29.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: true
  },
  {
      name: "Bread",
      type: "food",
      category: "Bakery",
      price: 2.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: false
  },
  {
      name: "Milk",
      type: "food",
      category: "Dairy",
      price: 1.49,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: true
  },
  {
      name: "Cheese",
      type: "food",
      category: "Dairy",
      price: 4.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: false
  },
  {
      name: "Apple",
      type: "food",
      category: "Fruits",
      price: 0.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: true
  },
  {
      name: "Chicken Breast",
      type: "food",
      category: "Meat",
      price: 5.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: false
  },
  {
      name: "Carrots",
      type: "food",
      category: "Vegetables",
      price: 1.99,
      imageUrl: "../../../assets/images/sneaker-one.jpg",
      wishlist: true
  }
];

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule, MatTableModule],
  templateUrl: './wishlist-page.component.html',
  styleUrl: './wishlist-page.component.scss'
})
export class WishlistPageComponent {

  // public tableHeaders: string[] = ['Product Name', 'Unit Price', 'Quantity']

  public displayedColumns: string[] = ['imageUrl','name', 'type', 'category', 'price',  'wishlist'];
  public dataSource = ELEMENT_DATA;

  public total:number = 2000;

  constructor(private _route: Router) {

  }

  onHouseLinkClick() {
    this._route.navigate(['product-list-page']);
  }
}

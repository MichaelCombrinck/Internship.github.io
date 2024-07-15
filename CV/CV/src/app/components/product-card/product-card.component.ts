import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../core/models/product';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  public products:Product[] = [{
    name: "Top-Down-Sneakers",
    type: 'clothes',
    category: 'sneakers',
    price: 40.00,
    imageUrl: '../../../assets/images/sneaker-one.jpg',
    wishlist: false
  }]

  onWishlistToggleClick() {
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].wishlist ) {
        this.products[i].wishlist = false
      }
      else{   
        this.products[i].wishlist = true;
      }
    }
  }
}

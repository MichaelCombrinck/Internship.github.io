import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product-list-page', component: ProductListPageComponent },
  { path: 'wishlist', component: WishlistPageComponent },
];

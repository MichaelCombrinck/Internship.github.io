import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-calculation-page',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './change-calculation-page.component.html',
  styleUrl: './change-calculation-page.component.scss'
})
export class ChangeCalculationPageComponent {

    constructor(private _router: Router) {
      
    }

    onHomeLinkClick() {
      this._router.navigate(['product-list-page']);
    }
}

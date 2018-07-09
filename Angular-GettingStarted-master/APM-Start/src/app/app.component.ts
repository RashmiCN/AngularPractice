import { Component } from '@angular/core';
import { ProdcutService } from './products/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProdcutService]
})
export class AppComponent {
  title = 'Acme product management';
}

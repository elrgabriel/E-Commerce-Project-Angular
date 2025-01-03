import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  products: Products[] = []
  

  constructor(private productService: ProductService) {
    this.getSubscribedProducts()
    console.log(this.products)
  }
  
  getSubscribedProducts() {
    this.productService.getProducts().subscribe(
      (items) => this.products = items.slice(0,10)  
    )
}

}

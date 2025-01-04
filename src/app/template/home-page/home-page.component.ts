import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../interfaces/products';
import { SelectProductService } from '../../services/select-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  products: Products[] = []
  

  constructor(
    private productService: ProductService,
    private selectedProduct: SelectProductService,
    private router: Router
  )
  {
    this.getSubscribedProducts()
       
  }
  
  getSubscribedProducts() {
    this.productService.getProducts().subscribe(
      (items) => this.products = items.slice(0,10)  
    )
  }
  
  onProductClick(product: any) {
    this.selectedProduct.setProduct(product)
    this.router.navigate(['/product-single',product.id])
  }

}

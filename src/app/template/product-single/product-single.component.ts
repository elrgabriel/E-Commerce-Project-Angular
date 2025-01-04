import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectProductService } from '../../services/select-product.service';
import { Title } from '@angular/platform-browser';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-single',
  standalone: false,
  
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.css'
})
export class ProductSingleComponent implements OnInit {

  product: any;
  productQuantity: number = 0;

  constructor(
    private selectedProduct: SelectProductService,
    private router: Router,
    private titleService: Title,
    private cartService: CartService
  ) {}
  
  ngOnInit(): void {
    this.product = this.selectedProduct.getProduct()

    if (this.product) {
      this.titleService.setTitle(this.product.title)
    } else {
      this.router.navigate(['/home-page'])
    }
  }

  OnAddProductClick(id: number) {
    this.cartService.addProductToCart(this.product)
    
  }

}

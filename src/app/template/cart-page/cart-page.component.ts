import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Products } from '../../interfaces/products';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  products: Products[] = []
  private newQuantity: number = 0
  private cartSubscription!: Subscription;
  
  

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartProducts$.subscribe({
      next: (cartProducts) => { this.products = cartProducts}
    })

  }
      
  
  onDeleteProductFromCart(product: Products) {

      this.cartService.removeProductFromCart(product.id!)
  
  }

  onQuantityChange(product: Products, newQuantity: number) {
    if (newQuantity > 1) {
      this.cartService.updateProductQuantityInCar(product.id!, newQuantity)
      console.log(this.products)
    }
  }

}

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

  private cartSubscription!: Subscription;
  

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartProducts$.subscribe({
      next: (cartProducts) => { this.products = cartProducts}
    })

  }
      
  
  OnDeleteProductFromCart() {
    
  }

}

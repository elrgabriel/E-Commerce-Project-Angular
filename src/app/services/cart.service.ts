import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private cartProducts: Products[] = []

  addProductToCart(product: Products) {
    this.cartProducts.push(product)
    console.log(this.cartProducts)
  }

  removeProductFromCart(id: number) {
    const index = this.cartProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      this.cartProducts.splice(index,1)
    }
    console.log(this.cartProducts)
  }
  
}

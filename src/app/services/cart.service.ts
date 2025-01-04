import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Products[] = []
  private cartProductSubject = new BehaviorSubject<Products[]>([]) //Subject a ser transformado em observable
  cartProducts$ = this.cartProductSubject.asObservable() //Observable a qual os componentes podem dar subscribe e receber updates do seu estado

  addProductToCart(product: Products) {
    this.cartProducts.push(product)
    this.cartProductSubject.next([...this.cartProducts]) //emite o update do cartProducts
    console.log(this.cartProducts)
  }

  removeProductFromCart(id: number) {
    const index = this.cartProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      this.cartProducts.splice(index, 1)
      this.cartProductSubject.next([...this.cartProducts]) //emite o update do cartProducts
    }
    console.log(this.cartProducts)
  }
  
}

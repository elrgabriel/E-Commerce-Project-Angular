import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject, findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Products[] = this.getCartFromSessionStorage()
  private cartProductSubject = new BehaviorSubject<Products[]>(this.cartProducts) //Subject a ser transformado em observable
  cartProducts$ = this.cartProductSubject.asObservable() //Observable a qual os componentes podem dar subscribe e receber updates do seu estado

  private productQuantity: Map<number, number> = new Map()
  
  

  addProductToCart(product: Products, quantity: number) {
      //Descobre se o produto já se encontra na lista do carrinho
      const index = this.cartProducts.findIndex((currentProduct) => currentProduct.id === product.id)
      //Se ja existe, muda sua quantidade
      if (index !== -1) {
        this.cartProducts[index].quantity = quantity
      //Se não existe, é adicionado a lista com a quantidade selecionada pelo utilizador  
      } else {
        product.quantity = quantity
        this.cartProducts.push(product)
        
        
        }
        this.cartProductSubject.next([...this.cartProducts]) //emite o update do cartProducts
        this.saveCartToSessionStorage(this.cartProducts)
    console.log(this.cartProducts)
  }
 

  removeProductFromCart(id: number) {
    const index = this.cartProducts.findIndex(product => product.id === id);
    if (index !== -1) {
      this.cartProducts.splice(index, 1)
      this.cartProductSubject.next([...this.cartProducts]) //emite o update do cartProducts
      this.saveCartToSessionStorage(this.cartProducts)
    }
    console.log(this.cartProducts)
  }

  updateProductQuantityInCar(id: number, quantity: number) {
    const index = this.cartProducts.findIndex((currentProduct) => currentProduct.id === id)
    this.cartProducts[index].quantity = quantity
  }

  private getCartFromSessionStorage(): Products[] {
    const cart = sessionStorage.getItem('cart');
    return cart ? JSON.parse(cart) : []; // If cart exists in sessionStorage, parse it; otherwise, return an empty array
  }

  // Function to update cart in sessionStorage
  private saveCartToSessionStorage(cart: Products[]): void {
    sessionStorage.setItem('cart', JSON.stringify(cart)); // Save cart data as a JSON string
  }

}

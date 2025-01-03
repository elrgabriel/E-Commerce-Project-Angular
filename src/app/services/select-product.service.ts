import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectProductService {

  private selectedProduct: any

  setProduct(product: any) {
    this.selectedProduct = product
  }

  getProduct(): any {
    return this.selectedProduct
}

}

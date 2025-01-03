import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.api

  constructor(private httpClient: HttpClient) {
    
   }

  getProducts() {
  return this.httpClient.get<Products[]>(this.url)
}

}

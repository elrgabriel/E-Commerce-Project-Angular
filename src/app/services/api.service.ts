import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private baseUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

 
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/usuarios`); // Endpoint para pegar usuários
  }

  
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/produtos`); // Endpoint para pegar produtos
  }

  
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/usuarios`, userData); // Endpoint para criar usuário
  }
  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/usuarios/login`, userData);
  }
}

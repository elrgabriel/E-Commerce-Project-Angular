import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL base do seu backend Flask
  private baseUrl = 'http://localhost:5000'; // ou a URL do seu servidor Flask

  constructor(private http: HttpClient) { }

  // Exemplo de função para pegar dados dos usuários
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/usuarios`); // Endpoint para pegar usuários
  }

  // Exemplo de função para pegar produtos
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/produtos`); // Endpoint para pegar produtos
  }

  // Exemplo de função para criar um novo usuário
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/usuarios`, userData); // Endpoint para criar usuário
  }
}

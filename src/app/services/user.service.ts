import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para fazer requisições HTTP
import { Observable } from 'rxjs'; // Para lidar com a resposta assíncrona

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/usuarios'; // URL da sua API Flask (ajuste conforme necessário)

  constructor(private http: HttpClient) { }

  // Método para registrar um novo usuário
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, user);
  }

  // Método para fazer login de um usuário
  loginUser(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
}

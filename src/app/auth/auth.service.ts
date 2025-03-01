
//Este serviço é responsável por fazer as chamadas HTTP para o backend de login e registro de usuário, além de gerenciar o token JWT.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`; // URL para a API de autenticação

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  register(name: string, surname: string, email: string, password: string, age: number, church: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { name, surname, email, password, age, church });
 }
}

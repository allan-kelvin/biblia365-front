import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  private apiUrl = `${environment.apiUrl}/bible`; // URL da API da Bíblia

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books`);
  }

  getChapters(book: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/chapters/${book}`);
  }

  getVerses(book: string, chapter: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/verses/${book}/${chapter}`);
  }
}

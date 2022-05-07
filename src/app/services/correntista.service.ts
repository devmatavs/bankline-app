import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081';
@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/Correntistas`);
  }
  create(correntista:any): Observable<any> {
    return this.http.post(`${baseUrl}/Correntistas`,correntista);
  }
}
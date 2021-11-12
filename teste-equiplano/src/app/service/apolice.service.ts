import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const baseUrl = `${environment.api_url}/apolice/v1`;

@Injectable({
  providedIn: 'root'
})
export class ApoliceService {

  constructor(private http: HttpClient) { }

  listAll(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listar`);
  }

  create(apolice): Observable<any> {
		return this.http.post<any>(`${baseUrl}/novo`, apolice);
	}

  update(apolice): Observable<any> {
		return this.http.put<any>(`${baseUrl}/atualizar`, apolice);
	}

  read(id: number): Observable<any> {
		return this.http.get(`${baseUrl}/buscar/${id}`);
	}

  delete(id: number): Observable<any> {
		return this.http.delete(`${baseUrl}/deletar/${id}`, { responseType: 'text' });
	}
}

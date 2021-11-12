import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const baseUrl = `${environment.api_url}/cliente/v1`;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listAll(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/listar`);
  }

  create(cliente): Observable<any> {
		return this.http.post<any>(`${baseUrl}/novo`, cliente);
	}

  update(cliente): Observable<any> {
		return this.http.put<any>(`${baseUrl}/atualizar`, cliente);
	}

  read(id: number): Observable<any> {
		return this.http.get(`${baseUrl}/buscar/${id}`);
	}

  delete(id: number): Observable<any> {
		return this.http.delete(`${baseUrl}/deletar/${id}`, { responseType: 'text' });
	}
}

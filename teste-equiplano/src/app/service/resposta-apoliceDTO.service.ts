import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const baseUrl = `${environment.api_url}/rest/consultar/apolice/`;

@Injectable({
  providedIn: 'root'
})
export class RespostaApoliceDTOService {

  constructor(private http: HttpClient) { }

  read(numero: number): Observable<any> {
		return this.http.get(`${baseUrl}${numero}`);
	}


}

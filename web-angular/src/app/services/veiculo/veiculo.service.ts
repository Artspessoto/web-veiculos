import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.module';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://localhost:44368/api/Veiculos';
  }

  getAll(): Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(this.url);
  }

  getId(id: number): Observable<Veiculo> {
    return this.httpClient.get<Veiculo>(`${this.url}/${id}`);
  }

  post(veiculo: Veiculo): Observable<Veiculo> {
    return this.httpClient.post<Veiculo>(this.url, veiculo);
  }

  put(id:number, veiculo: Veiculo): Observable<Veiculo>{
    return this.httpClient.put<Veiculo>(`${this.url}/${id}`, veiculo);
  }

  delete(id: number): Observable<Veiculo | null> {
    return this.httpClient.delete<Veiculo>(`${this.url}/${id}`);
  }
}

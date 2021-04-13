import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/dominios/produtos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  
   url = `${environment.apiUrl}/produtos`
  constructor(private http: HttpClient) {  }

  create(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.url,produto);
  }
  
  getProduto(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.url);
  }

  obterPorId(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.url}/${id}`);
  }
  editar(produto: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>(this.url,produto);
  }
  deletar(id: number): Observable<Produtos>{
    return this.http.delete<Produtos>(`${this.url}/${id}`);
  }
}

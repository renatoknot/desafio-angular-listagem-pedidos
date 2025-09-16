import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  // 3. Crie uma variável para guardar a URL do nosso JSON
  private pedidosUrl = '/pedidos.json';

  // 4. "Injete" o HttpClient no serviço através do construtor
  constructor(private http: HttpClient) {}

  // 5. Crie o método que vai buscar os pedidos
  getPedidos() {
    // Usamos o http.get para buscar os dados.
    // O <Pedido[]> diz ao TypeScript que esperamos receber um array de Pedidos.
    return this.http.get<{ pedidos: Pedido[] }>(this.pedidosUrl);
  }
}

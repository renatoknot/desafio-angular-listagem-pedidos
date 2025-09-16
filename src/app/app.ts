// src/app/app.ts

import { Component, OnInit } from '@angular/core'; // 1. Adicione OnInit
import { RouterOutlet } from '@angular/router';

import { Pedido } from './models/pedido.model'; // 3. Importe nosso modelo
import { PedidoService } from './services/pedido'; // 4. Importe nosso serviço

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
// 6. Faça o componente "implementar" o OnInit
export class AppComponent implements OnInit {
  // 7. Crie uma lista vazia para guardar os pedidos
  public pedidos: Pedido[] = [];

  // 8. Injete o PedidoService no construtor
  constructor(private pedidoService: PedidoService) {}

  // 9. O ngOnInit é um "gancho de ciclo de vida".
  // O código aqui dentro roda assim que o componente é iniciado.
  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((response) => {
      this.pedidos = response.pedidos;
    });
  }
}

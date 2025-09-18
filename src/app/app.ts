// src/app/app.ts

import { Component, OnInit } from '@angular/core'; // 1. Adicione OnInit
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { Pedido } from './models/pedido.model'; // 3. Importe nosso modelo
import { PedidoService } from './services/pedido'; // 4. Importe nosso serviço

// Components
import { FiltrosComponent } from './components/filtros/filtros';
import { PedidoDetalheComponent } from './components/pedido-detalhe/pedido-detalhe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, FiltrosComponent, MatDialogModule, PedidoDetalheComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
// 6. Faça o componente "implementar" o OnInit
export class AppComponent implements OnInit {
  private allPedidos: Pedido[] = []; // 1. Lista original, privada.
  public pedidosFiltrados: Pedido[] = []; // 2. Lista para exibição.

  // 8. Injete o PedidoService no construtor
  constructor(private pedidoService: PedidoService, public dialog: MatDialog) {}

  // 9. O ngOnInit é um "gancho de ciclo de vida".
  // O código aqui dentro roda assim que o componente é iniciado.
  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe((response) => {
      this.allPedidos = response.pedidos;
      this.pedidosFiltrados = response.pedidos;
    });
  }

  // 4. Crie o método que vai receber os filtros do componente filho
  applyFilters(filters: any): void {
    let pedidosTemp = [...this.allPedidos]; // Comece com a lista completa

    // Filtro por nome
    if (filters.nome) {
      pedidosTemp = pedidosTemp.filter((pedido) =>
        pedido.client.name.toLowerCase().includes(filters.nome.toLowerCase())
      );
    }

    // Filtro por valor
    if (filters.valor !== null && filters.valor !== undefined) {
      pedidosTemp = pedidosTemp.filter((pedido) => pedido.value >= filters.valor);
    }

    // Filtro por data de Inicio
    if (filters.inicio) {
      const dataInicio = new Date(filters.inicio);
      dataInicio.setHours(0, 0, 0, 0);
      pedidosTemp = pedidosTemp.filter((p) => new Date(p.date) >= dataInicio);
    }

    // Filtro por data de Fim
    if (filters.fim) {
      const dataFim = new Date(filters.fim);
      dataFim.setHours(23, 59, 59, 999);
      pedidosTemp = pedidosTemp.filter((p) => new Date(p.date) <= dataFim);
    }

    this.pedidosFiltrados = pedidosTemp; // Atualize a lista de exibição
  }

  // 3. Crie o método que abrirá o modal
  openPedidoModal(pedido: Pedido): void {
    this.dialog.open(PedidoDetalheComponent, {
      width: '500px', // Define a largura do modal
      data: pedido, // 4. Aqui passamos o objeto 'pedido' para o modal!
    });
  }
}

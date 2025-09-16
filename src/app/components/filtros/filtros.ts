import { Component, EventEmitter, Output } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './filtros.html',
  styleUrl: './filtros.scss',
})
export class FiltrosComponent {
  @Output() filterChange = new EventEmitter<any>();

  nomeCliente: string = '';
  valorPedido: number | null = null;

  onFilterChange(): void {
    const filters = {
      nome: this.nomeCliente,
      valor: this.valorPedido,
    };
    // 5. Emita o evento com os valores atuais dos filtros
    this.filterChange.emit(filters);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './filtros.html',
  styleUrl: './filtros.scss',
})
export class FiltrosComponent {
  @Output() filterChange = new EventEmitter<any>();

  nomeCliente: string = '';
  valorPedido: number | null = null;
  dataInicio: Date | null = null;
  dataFim: Date | null = null;

  onFilterChange(): void {
    const filters = {
      nome: this.nomeCliente,
      valor: this.valorPedido,
      inicio: this.dataInicio,
      fim: this.dataFim,
    };
    // 5. Emita o evento com os valores atuais dos filtros
    this.filterChange.emit(filters);
  }
}

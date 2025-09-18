import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedido-detalhe',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatListModule],
  templateUrl: './pedido-detalhe.html',
  styleUrl: './pedido-detalhe.scss',
})
export class PedidoDetalheComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Pedido) {}
}

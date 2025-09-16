// Define a estrutura do Cliente
export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Define a estrutura de um Item do pedido
export interface Item {
  name: string;
  description: string;
  quantity: number;
  value: number;
}

// Define a estrutura principal do Pedido
export interface Pedido {
  id: number;
  value: number;
  date: string;
  items: Item[]; // Uma lista (array) de Itens
  client: Client;
}

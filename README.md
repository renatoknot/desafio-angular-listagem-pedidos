# Desafio Front-End: Painel de Pedidos do Festival

Este projeto é a solução para um desafio de vaga de front-end, construído com Angular 20 e Angular Material. A aplicação consiste em um painel para visualizar e filtrar pedidos realizados durante um festival.

![Badge Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Badge SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

---

### 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Demonstração](#-demonstração)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Decisões de Arquitetura](#-decisões-de-arquitetura)

---

### ✨ Funcionalidades

- **Listagem de Pedidos:** Exibição dos pedidos em cards, com layout responsivo em grade.
- **Filtros Combinados:** Filtre os pedidos em tempo real por:
  - Nome do cliente (busca textual).
  - Valor mínimo do pedido.
  - Intervalo de datas (início e fim).
- **Modal de Detalhes:** Ao clicar em um pedido, um modal exibe todas as informações, incluindo os dados do cliente e a lista de itens.
- **Interface Moderna:** Construída com a suíte de componentes do Angular Material.

---

### 🖥️ Demonstração

![Screenshot da aplicação](https://raw.githubusercontent.com/renatoknot/desafio-angular-listagem-pedidos/main/Screenshot_53.png)

---

### 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação em seu ambiente local.

**Pré-requisitos:**

- [Node.js](https://nodejs.org/en/) (versão 22.x ou superior)
- [Angular CLI](https://angular.dev/cli) (versão 20.x ou superior)

```bash
# 1. Clone o repositório
git clone [https://github.com/renatoknot/desafio-angular-listagem-pedidos.git](https://github.com/renatoknot/desafio-angular-listagem-pedidos.git)

# 2. Navegue até a pasta do projeto
cd desafio-angular-listagem-pedidos

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
ng serve -o
```

A aplicação estará disponível em `http://localhost:4200/`.

---

### 🛠️ Tecnologias Utilizadas

- **Angular 20:** Framework principal para a construção da SPA.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Angular Material:** Biblioteca de componentes de UI para uma interface coesa e moderna.
- **SCSS:** Pré-processador CSS para estilos mais organizados.
- **RxJS:** Utilizado implicitamente pelo HttpClient do Angular para lidar com a busca de dados assíncrona.

---

### 🏛️ Decisões de Arquitetura

- **Arquitetura Baseada em Componentes:** A aplicação foi modularizada em componentes específicos para cada responsabilidade (`FiltrosComponent`, `PedidoDetalheComponent`), facilitando a manutenção.
- **Serviços e Injeção de Dependência:** A lógica de busca de dados foi isolada em um `PedidoService`, separando as responsabilidades e tornando o código dos componentes mais limpo.
- **Tipagem Forte com Interfaces:** Foram criadas interfaces (`Pedido`, `Client`, `Item`) para garantir a integridade e o contrato dos dados em toda a aplicação.
- **Comunicação entre Componentes:** A comunicação do componente de filtros (filho) para o principal (pai) foi feita utilizando `@Output` e `EventEmitter` para notificar sobre as mudanças nos filtros.
- **State Management Simples:** Para esta aplicação, foi adotada uma abordagem de gerenciamento de estado local no `AppComponent`, mantendo uma lista original de pedidos e uma lista filtrada para exibição.

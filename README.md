# Aplicação Web Completa (Full Stack)

Este projeto é uma aplicação de e-commerce completa com um FrontEnd em React (usando Vite) e um BackEnd em Node.js/Express, conectando-se a um banco de dados MongoDB para gerenciar produtos e informações de usuários.

## Tecnologias Utilizadas

### FrontEnd
- React com Vite para desenvolvimento rápido e otimizado.
- Axios para realizar chamadas HTTP ao servidor.
- CSS para estilização básica.

### BackEnd
- Node.js e Express para a construção do servidor e API REST.
- MongoDB e Mongoose para armazenamento e manipulação de dados.
- Cors para gerenciar o controle de acesso entre o FrontEnd e o BackEnd.
---

## Estrutura do Projeto


```bash
Aplicacao_Web_FullStack
│
├── client                  # Diretório do FrontEnd (React com Vite)
│   ├── public
│   │   └── index.html      # Arquivo HTML principal
│   └── src
│       ├── App.jsx         # Componente principal do React
│       ├── main.jsx        # Ponto de entrada do React
│       └── components      # Componentes reutilizáveis
│
├── server                  # Diretório do BackEnd (Node.js/Express)
│   ├── controllers
│   │   └── productController.js
│   ├── models
│   │   └── product.js      # Modelo do MongoDB para o produto
│   ├── routes
│   │   └── productRoutes.js
│   └── index.js            # Ponto de entrada do servidor
│
├── .gitignore              # Ignora node_modules e arquivos desnecessários
├── README.md               # Explicação do projeto
└── package.json            # Configuração do Node.js para o BackEnd

```
---

## Funcionalidades

### FrontEnd
- **Página de Listagem de Produtos**: Exibe produtos vindos da API.
- **Estilo Responsivo**: A interface é projetada para ser responsiva e amigável.
- **Integração com API**: Conexão com o BackEnd para listagem de dados.

### BackEnd
- **API RESTful**: Oferece endpoints para CRUD de produtos.
- **Conexão com MongoDB**: Armazena produtos e dados dos usuários.
- **Controle de Acesso**: Utilização de CORS para controle entre FrontEnd e BackEnd.

---

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js**
- **MongoDB**

### Configuração do BackEnd

1. No terminal, vá até a pasta `server` e instale as dependências:

```bash
cd server
npm install
```


2. Configure e inicie o servidor MongoDB, em seguida execute o servidor Node.js:

```bash
node index.js

```
O servidor estará rodando em http://localhost:5000.

# Configuração do FrontEnd

Em outro terminal, vá até a pasta client, instale as dependências e execute o Vite:

``` bash
cd ../client
npm install
npm run dev
```
Acesse o FrontEnd no endereço que Vite fornecer, geralmente http://localhost:5173.

# Endpoints da API

Abaixo estão os principais endpoints do BackEnd:
``` bash
GET /api/products - Retorna todos os produtos.
POST /api/products - Adiciona um novo produto.
PUT /api/products/:id - Atualiza um produto existente.
DELETE /api/products/:id - Exclui um produto pelo ID.
```
# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorias.

# Melhorias Futuras

Autenticação: Adicionar autenticação de usuário.
Carrinho de Compras: Implementar funcionalidades de carrinho e checkout.
Painel Administrativo: Adicionar um painel para gerenciamento de produtos e usuários.

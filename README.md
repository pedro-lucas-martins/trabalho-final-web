# Planejador de Estudos

Sistema web full-stack para organizar, agendar e acompanhar o progresso em estudos de forma eficiente.

## Visão Geral

O Planejador de Estudos é uma aplicação web que permite aos usuários:

- **Gerenciar Matérias**: Cadastrar, editar e remover disciplinas de estudo
- **Organizar Tópicos**: Detalhar tópicos dentro de cada matéria com status de progresso
- **Agendar Sessões**: Criar eventos no calendário para sessões de estudo focadas
- **Centralizar Recursos**: Anexar links e anotações aos tópicos
- **Acompanhar Progresso**: Visualizar o status dos tópicos e progresso geral

## Arquitetura

O sistema segue o modelo de três camadas:

```
┌─────────────────────────────────────────┐
│         Frontend (React + Tailwind)     │
│         Port: 3000                      │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Backend (NestJS + Prisma)          │
│         Port: 3001                      │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Database (SQLite)                  │
│      File: prisma/dev.db                │
└─────────────────────────────────────────┘
```

## Tecnologias Utilizadas

### Frontend
- **React 19**: Framework JavaScript para UI
- **Tailwind CSS 4**: Framework CSS utilitário
- **TypeScript**: Tipagem estática
- **Vite**: Build tool rápido
- **Axios**: Cliente HTTP

### Backend
- **NestJS**: Framework Node.js progressivo
- **Prisma**: ORM moderno
- **SQLite**: Banco de dados relacional
- **TypeScript**: Tipagem estática
- **class-validator**: Validação de dados

### Infraestrutura
- **Docker**: Conteinerização
- **Docker Compose**: Orquestração de serviços

## Pré-requisitos

- Docker (versão 20.10+)
- Docker Compose (versão 2.0+)

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone <repository-url>
cd planejador-estudos
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (opcional, já existem valores padrão):

```bash
cp .env.example .env
```

### 3. Inicie os serviços com Docker Compose

```bash
docker-compose up -d
```

Este comando irá:
- Construir as imagens Docker para frontend e backend
- Criar e iniciar os containers
- Configurar a rede entre os serviços
- Inicializar o banco de dados SQLite

### 4. Acesse a aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## Desenvolvimento Local (sem Docker)

### Backend

```bash
cd backend

# Instalar dependências
npm install

# Configurar banco de dados
npx prisma migrate dev

# Iniciar servidor em modo desenvolvimento
npm run dev
```

### Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar servidor em modo desenvolvimento
npm run dev
```

## Estrutura do Projeto

```
planejador-estudos/
├── backend/
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── modules/
│   │   │   ├── materia/
│   │   │   ├── topico/
│   │   │   ├── recurso/
│   │   │   └── sessao-estudo/
│   │   └── common/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages/
│   │   ├── components/
│   │   └── styles/
│   ├── public/
│   ├── Dockerfile
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Modelos de Dados

### Materia
- `id`: UUID (Chave primária)
- `nome`: String (obrigatório)
- `descricao`: String (opcional)
- `criadoEm`: DateTime
- `atualizadoEm`: DateTime

### Topico
- `id`: UUID (Chave primária)
- `titulo`: String (obrigatório)
- `prioridade`: Enum (BAIXA, MÉDIA, ALTA)
- `status`: Enum (NÃO_INICIADO, EM_ANDAMENTO, CONCLUÍDO)
- `materiaId`: UUID (Chave estrangeira)
- `criadoEm`: DateTime
- `atualizadoEm`: DateTime

### Recurso
- `id`: UUID (Chave primária)
- `titulo`: String (obrigatório)
- `url`: String (obrigatório)
- `topicoId`: UUID (Chave estrangeira)
- `criadoEm`: DateTime
- `atualizadoEm`: DateTime

### SessaoEstudo
- `id`: UUID (Chave primária)
- `titulo`: String (obrigatório)
- `dataInicio`: DateTime (obrigatório)
- `dataFim`: DateTime (obrigatório)
- `topicoId`: UUID (Chave estrangeira)
- `criadoEm`: DateTime
- `atualizadoEm`: DateTime

## API Endpoints

### Matérias
- `GET /api/materias` - Listar todas as matérias
- `GET /api/materias/:id` - Obter uma matéria específica
- `POST /api/materias` - Criar nova matéria
- `PUT /api/materias/:id` - Atualizar matéria
- `DELETE /api/materias/:id` - Deletar matéria

### Tópicos
- `GET /api/topicos` - Listar todos os tópicos
- `GET /api/topicos/:id` - Obter um tópico específico
- `POST /api/topicos` - Criar novo tópico
- `PUT /api/topicos/:id` - Atualizar tópico
- `DELETE /api/topicos/:id` - Deletar tópico

### Recursos
- `GET /api/recursos` - Listar todos os recursos
- `GET /api/recursos/:id` - Obter um recurso específico
- `POST /api/recursos` - Criar novo recurso
- `PUT /api/recursos/:id` - Atualizar recurso
- `DELETE /api/recursos/:id` - Deletar recurso

### Sessões de Estudo
- `GET /api/sessoes` - Listar todas as sessões
- `GET /api/sessoes/:id` - Obter uma sessão específica
- `POST /api/sessoes` - Criar nova sessão
- `PUT /api/sessoes/:id` - Atualizar sessão
- `DELETE /api/sessoes/:id` - Deletar sessão

## Requisitos Funcionais

- [x] RF01: CRUD de Matérias
- [x] RF02: Matérias com nome e descrição
- [x] RF03: CRUD de Tópicos
- [x] RF04: Tópicos com título, status e prioridade
- [x] RF05: Agendar Sessões de Estudo
- [x] RF06: Sessões com data/hora de início e fim
- [x] RF07: Adicionar/visualizar/remover Recursos
- [x] RF08: Recursos com título e anotações
- [x] RF09: Interface responsiva

## Requisitos Não-Funcionais

- [x] RNF01: Desempenho (< 500ms)
- [x] RNF02: Usabilidade (interface intuitiva)
- [x] RNF03: Confiabilidade (testes unitários)
- [x] RNF04: Implantação (Docker + Docker Compose)

## Comandos Úteis

### Docker Compose

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir imagens
docker-compose build --no-cache

# Executar comando no container
docker-compose exec backend npm run migrate
```

### Backend

```bash
# Instalar dependências
npm install

# Executar migrations
npx prisma migrate dev

# Abrir Prisma Studio
npx prisma studio

# Executar testes
npm run test

# Build para produção
npm run build
```

### Frontend

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Testes

### Backend

```bash
cd backend

# Executar testes unitários
npm run test

# Executar testes com cobertura
npm run test:cov

# Modo watch
npm run test:watch
```

## Troubleshooting

### Porta já em uso
Se a porta 3000 ou 3001 já está em uso, você pode alterar as portas no `docker-compose.yml`:

```yaml
ports:
  - "3000:3000"  # Altere o primeiro número
```

### Banco de dados corrompido
Para resetar o banco de dados:

```bash
docker-compose down -v
docker-compose up -d
```

### Problemas de conexão entre serviços
Verifique se os serviços estão na mesma rede Docker:

```bash
docker network ls
docker network inspect planejador_planejador-network
```

## Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.

## Contato

Para dúvidas ou sugestões, entre em contato com os desenvolvedores:
- Antonio Gabriel Souza Gomes (108188)
- Pedro Lucas Martins Brandão (108210)

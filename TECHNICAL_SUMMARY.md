# Resumo Técnico - Planejador de Estudos

## Visão Geral da Arquitetura

O Planejador de Estudos é uma aplicação web full-stack seguindo o padrão de três camadas (3-tier architecture), totalmente conteinerizada com Docker e Docker Compose.

```
┌─────────────────────────────────────────┐
│   Frontend (React 18 + Tailwind CSS)    │
│   Port: 3000                            │
│   Framework: Vite                       │
│   Linguagem: TypeScript                 │
└─────────────────────────────────────────┘
              ↓ HTTP/REST
┌─────────────────────────────────────────┐
│   Backend (NestJS + Prisma)             │
│   Port: 3001                            │
│   ORM: Prisma                           │
│   Linguagem: TypeScript                 │
└─────────────────────────────────────────┘
              ↓ SQL
┌─────────────────────────────────────────┐
│   Database (SQLite)                     │
│   Arquivo: prisma/dev.db                │
│   Persistência: Volume Docker           │
└─────────────────────────────────────────┘
```

## Tecnologias Utilizadas

### Frontend
- **React 18.2.0**: Framework JavaScript para construção de UIs
- **Vite 5.0.8**: Build tool rápido e moderno
- **TypeScript 5.3.3**: Tipagem estática para JavaScript
- **Tailwind CSS 4.0.0**: Framework CSS utilitário
- **Axios 1.6.2**: Cliente HTTP para requisições
- **React Router DOM 6.20.0**: Roteamento de páginas
- **Date-fns 2.30.0**: Manipulação de datas

### Backend
- **NestJS 10.2.10**: Framework Node.js progressivo
- **Prisma 5.7.0**: ORM moderno com type-safety
- **TypeScript 5.3.3**: Tipagem estática
- **class-validator 0.14.0**: Validação de DTOs
- **class-transformer 0.5.1**: Transformação de objetos
- **Express 4.x**: Servidor HTTP (via NestJS)

### Banco de Dados
- **SQLite**: Banco de dados relacional leve
- **Prisma Client**: Query builder type-safe
- **Prisma Migrations**: Versionamento de schema

### Infraestrutura
- **Docker**: Conteinerização de aplicações
- **Docker Compose**: Orquestração de serviços
- **Node.js 20-alpine**: Runtime JavaScript leve

## Estrutura de Diretórios

```
planejador-estudos/
├── backend/
│   ├── src/
│   │   ├── main.ts                      # Entry point
│   │   ├── app.module.ts                # Módulo raiz
│   │   ├── common/
│   │   │   └── exceptions/
│   │   │       └── http-exception.filter.ts
│   │   ├── modules/
│   │   │   ├── materia/
│   │   │   │   ├── materia.module.ts
│   │   │   │   ├── materia.service.ts
│   │   │   │   ├── materia.controller.ts
│   │   │   │   └── dto/
│   │   │   ├── topico/
│   │   │   ├── recurso/
│   │   │   └── sessao-estudo/
│   │   └── prisma/
│   │       ├── prisma.module.ts
│   │       └── prisma.service.ts
│   ├── prisma/
│   │   └── schema.prisma                # Schema do banco
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx                     # Entry point
│   │   ├── App.tsx                      # Componente raiz
│   │   ├── App.css                      # Estilos globais
│   │   ├── index.css                    # Tailwind directives
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Header.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Materias.tsx
│   │   │   ├── MateriaDetail.tsx
│   │   │   └── Sessoes.tsx
│   │   └── services/
│   │       └── api.ts                   # Serviço HTTP
│   ├── public/
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
│
├── docker-compose.yml                   # Orquestração
├── README.md                            # Documentação geral
├── QUICKSTART.md                        # Início rápido
├── DOCKER_SETUP.md                      # Guia Docker detalhado
└── TECHNICAL_SUMMARY.md                 # Este arquivo
```

## Modelos de Dados

### Materia
```typescript
{
  id: string (UUID)
  nome: string (unique)
  descricao?: string
  topicos: Topico[]
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Topico
```typescript
{
  id: string (UUID)
  titulo: string
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA'
  status: 'NAO_INICIADO' | 'EM_ANDAMENTO' | 'CONCLUIDO'
  materiaId: string (FK)
  recursos: Recurso[]
  sessoesEstudo: SessaoEstudo[]
  createdAt: DateTime
  updatedAt: DateTime
}
```

### Recurso
```typescript
{
  id: string (UUID)
  titulo: string
  url: string
  topicoId: string (FK)
  createdAt: DateTime
  updatedAt: DateTime
}
```

### SessaoEstudo
```typescript
{
  id: string (UUID)
  titulo: string
  dataInicio: DateTime
  dataFim: DateTime
  topicoId: string (FK)
  createdAt: DateTime
  updatedAt: DateTime
}
```

## API REST Endpoints

### Matérias
- `GET /api/materias` - Listar todas
- `GET /api/materias/:id` - Obter uma
- `GET /api/materias/:id/progress` - Progresso
- `POST /api/materias` - Criar
- `PUT /api/materias/:id` - Atualizar
- `DELETE /api/materias/:id` - Deletar

### Tópicos
- `GET /api/topicos` - Listar todas
- `GET /api/topicos/:id` - Obter um
- `GET /api/topicos/materia/:materiaId` - Por matéria
- `POST /api/topicos` - Criar
- `PUT /api/topicos/:id` - Atualizar
- `DELETE /api/topicos/:id` - Deletar

### Recursos
- `GET /api/recursos` - Listar todos
- `GET /api/recursos/:id` - Obter um
- `GET /api/recursos/topico/:topicoId` - Por tópico
- `POST /api/recursos` - Criar
- `PUT /api/recursos/:id` - Atualizar
- `DELETE /api/recursos/:id` - Deletar

### Sessões de Estudo
- `GET /api/sessoes` - Listar todas
- `GET /api/sessoes/:id` - Obter uma
- `GET /api/sessoes/topico/:topicoId` - Por tópico
- `GET /api/sessoes?startDate=...&endDate=...` - Por período
- `POST /api/sessoes` - Criar
- `PUT /api/sessoes/:id` - Atualizar
- `DELETE /api/sessoes/:id` - Deletar

## Fluxo de Requisições

1. **Frontend (React)**: Usuário interage com a UI
2. **Axios Client**: Requisição HTTP para o backend
3. **NestJS Controller**: Recebe e valida a requisição
4. **NestJS Service**: Executa lógica de negócio
5. **Prisma Client**: Query ao banco de dados
6. **SQLite**: Persistência de dados
7. **Response**: Retorno ao frontend com dados

## Validações

### DTOs (Data Transfer Objects)
- `CreateMateriaDto`: Validação de nome (required, 1-255 chars)
- `CreateTopicoDto`: Validação de título, prioridade, status
- `CreateRecursoDto`: Validação de URL e título
- `CreateSessaoEstudoDto`: Validação de datas (ISO 8601)

### Decoradores de Validação
- `@IsString()`: Valida tipo string
- `@IsUrl()`: Valida formato de URL
- `@IsEnum()`: Valida valores de enum
- `@IsDateString()`: Valida formato de data
- `@MinLength()` / `@MaxLength()`: Valida comprimento
- `@IsUUID()`: Valida formato UUID

## Tratamento de Erros

### Backend
- `NotFoundException`: Recurso não encontrado (404)
- `BadRequestException`: Requisição inválida (400)
- `ValidationPipe`: Validação automática de DTOs
- `HttpExceptionFilter`: Filtro customizado de exceções

### Frontend
- Try-catch em chamadas de API
- Estados de erro em componentes
- Mensagens de erro ao usuário

## Performance

### Otimizações
- **Lazy Loading**: Componentes React carregados sob demanda
- **Query Optimization**: Índices no Prisma schema
- **Caching**: Dados em cache no frontend
- **Compression**: Gzip em respostas HTTP
- **Database Indexing**: Foreign keys indexadas

### Requisitos Não-Funcionais
- **RNF01**: Respostas < 500ms (queries otimizadas)
- **RNF02**: Interface intuitiva (Tailwind + componentes bem estruturados)
- **RNF03**: Testes unitários (Jest + Vitest)
- **RNF04**: Docker + Docker Compose (totalmente conteinerizado)

## Segurança

### Implementado
- CORS configurável
- Validação de entrada (class-validator)
- Tratamento de exceções
- Tipagem TypeScript (type-safety)

### Recomendações Futuras
- Autenticação JWT
- Rate limiting
- HTTPS/TLS
- SQL injection prevention (já garantido pelo Prisma)
- CSRF protection
- Helmet.js para headers de segurança

## Desenvolvimento Local

### Sem Docker
```bash
# Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

### Com Docker
```bash
docker-compose up -d
```

## Build e Deploy

### Desenvolvimento
```bash
docker-compose up -d
```

### Produção
```bash
NODE_ENV=production docker-compose up -d
```

## Monitoramento

### Logs
```bash
docker-compose logs -f
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Saúde dos Serviços
```bash
docker-compose ps
docker stats
```

## Escalabilidade

### Horizontal
- Frontend: Servir via CDN ou load balancer
- Backend: Múltiplas instâncias com load balancer
- Database: Replicação ou sharding

### Vertical
- Aumentar recursos do container
- Otimizar queries
- Implementar caching distribuído

## Próximos Passos

1. **Autenticação**: Implementar JWT ou OAuth
2. **Testes**: Adicionar testes unitários e E2E
3. **CI/CD**: GitHub Actions ou GitLab CI
4. **Monitoring**: Prometheus + Grafana
5. **Logging**: ELK Stack ou similar
6. **Cache**: Redis para sessões e dados
7. **Search**: Elasticsearch para buscas avançadas
8. **Real-time**: WebSockets para atualizações em tempo real

## Referências

- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Docker Docs](https://docs.docker.com/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

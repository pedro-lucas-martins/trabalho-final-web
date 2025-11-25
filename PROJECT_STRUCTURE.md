# Estrutura do Projeto - Planejador de Estudos

## Visão Geral

Este documento descreve a estrutura completa do projeto Planejador de Estudos, incluindo todos os arquivos e diretórios.

## Estrutura de Diretórios

```
planejador-estudos/
│
├── backend/                              # Aplicação NestJS
│   ├── src/
│   │   ├── main.ts                      # Entry point do servidor
│   │   ├── app.module.ts                # Módulo raiz da aplicação
│   │   ├── common/
│   │   │   └── exceptions/
│   │   │       └── http-exception.filter.ts  # Filtro de exceções HTTP
│   │   ├── modules/                     # Módulos de funcionalidades
│   │   │   ├── materia/
│   │   │   │   ├── materia.module.ts
│   │   │   │   ├── materia.service.ts
│   │   │   │   ├── materia.controller.ts
│   │   │   │   └── dto/
│   │   │   │       ├── create-materia.dto.ts
│   │   │   │       └── update-materia.dto.ts
│   │   │   ├── topico/
│   │   │   │   ├── topico.module.ts
│   │   │   │   ├── topico.service.ts
│   │   │   │   ├── topico.controller.ts
│   │   │   │   └── dto/
│   │   │   │       ├── create-topico.dto.ts
│   │   │   │       └── update-topico.dto.ts
│   │   │   ├── recurso/
│   │   │   │   ├── recurso.module.ts
│   │   │   │   ├── recurso.service.ts
│   │   │   │   ├── recurso.controller.ts
│   │   │   │   └── dto/
│   │   │   │       ├── create-recurso.dto.ts
│   │   │   │       └── update-recurso.dto.ts
│   │   │   └── sessao-estudo/
│   │   │       ├── sessao-estudo.module.ts
│   │   │       ├── sessao-estudo.service.ts
│   │   │       ├── sessao-estudo.controller.ts
│   │   │       └── dto/
│   │   │           ├── create-sessao-estudo.dto.ts
│   │   │           └── update-sessao-estudo.dto.ts
│   │   └── prisma/                      # Integração com Prisma
│   │       ├── prisma.module.ts
│   │       └── prisma.service.ts
│   ├── prisma/
│   │   └── schema.prisma                # Schema do banco de dados
│   ├── Dockerfile                       # Imagem Docker do backend
│   ├── .dockerignore                    # Arquivos ignorados no Docker
│   ├── package.json                     # Dependências do Node.js
│   ├── tsconfig.json                    # Configuração do TypeScript
│   ├── .eslintrc.js                     # Configuração do ESLint
│   ├── .prettierrc                      # Configuração do Prettier
│   ├── .gitignore                       # Arquivos ignorados no Git
│   ├── nest-cli.json                    # Configuração do NestJS CLI
│   └── config.example.ts                # Exemplo de configuração
│
├── frontend/                             # Aplicação React
│   ├── src/
│   │   ├── main.tsx                     # Entry point da aplicação
│   │   ├── App.tsx                      # Componente raiz
│   │   ├── App.css                      # Estilos do App
│   │   ├── index.css                    # Estilos globais e Tailwind
│   │   ├── components/                  # Componentes reutilizáveis
│   │   │   ├── Layout.tsx               # Layout principal
│   │   │   ├── Sidebar.tsx              # Barra lateral de navegação
│   │   │   └── Header.tsx               # Cabeçalho da página
│   │   ├── pages/                       # Páginas da aplicação
│   │   │   ├── Dashboard.tsx            # Página inicial
│   │   │   ├── Materias.tsx             # Listagem de matérias
│   │   │   ├── MateriaDetail.tsx        # Detalhes de uma matéria
│   │   │   └── Sessoes.tsx              # Sessões de estudo
│   │   └── services/
│   │       └── api.ts                   # Serviço de requisições HTTP
│   ├── public/                          # Arquivos estáticos
│   │   └── vite.svg                     # Logo do Vite
│   ├── Dockerfile                       # Imagem Docker do frontend
│   ├── .dockerignore                    # Arquivos ignorados no Docker
│   ├── index.html                       # HTML principal
│   ├── package.json                     # Dependências do Node.js
│   ├── tsconfig.json                    # Configuração do TypeScript
│   ├── tsconfig.node.json               # Configuração do TypeScript para Node
│   ├── vite.config.ts                   # Configuração do Vite
│   ├── tailwind.config.js               # Configuração do Tailwind CSS
│   ├── postcss.config.js                # Configuração do PostCSS
│   ├── .eslintrc.cjs                    # Configuração do ESLint
│   └── .gitignore                       # Arquivos ignorados no Git
│
├── docker-compose.yml                   # Orquestração dos serviços
├── .gitignore                           # Arquivos ignorados no Git (raiz)
├── README.md                            # Documentação principal
├── QUICKSTART.md                        # Guia de início rápido
├── DOCKER_SETUP.md                      # Guia detalhado do Docker
├── TECHNICAL_SUMMARY.md                 # Resumo técnico
├── PROJECT_STRUCTURE.md                 # Este arquivo
└── todo.md                              # Lista de tarefas do projeto
```

## Descrição dos Arquivos Principais

### Backend (NestJS)

#### Configuração
- **main.ts**: Inicializa o servidor NestJS na porta 3001
- **app.module.ts**: Módulo raiz que importa todos os módulos de funcionalidades
- **nest-cli.json**: Configuração do CLI do NestJS
- **tsconfig.json**: Configuração do TypeScript para o backend
- **package.json**: Dependências e scripts do Node.js

#### Módulos
Cada módulo segue a estrutura: Module → Controller → Service → DTO

- **Materia**: Gerenciamento de disciplinas
- **Topico**: Gerenciamento de tópicos dentro de matérias
- **Recurso**: Gerenciamento de recursos de aprendizado
- **SessaoEstudo**: Gerenciamento de sessões de estudo

#### Prisma
- **schema.prisma**: Define os modelos de dados (Materia, Topico, Recurso, SessaoEstudo)
- **prisma.service.ts**: Serviço que gerencia a conexão com o banco
- **prisma.module.ts**: Módulo que exporta o PrismaService

### Frontend (React)

#### Configuração
- **index.html**: Template HTML principal
- **main.tsx**: Entry point do React
- **App.tsx**: Componente raiz com roteamento
- **vite.config.ts**: Configuração do Vite
- **tailwind.config.js**: Configuração do Tailwind CSS
- **tsconfig.json**: Configuração do TypeScript para o frontend

#### Componentes
- **Layout.tsx**: Wrapper que combina Sidebar e Header
- **Sidebar.tsx**: Navegação lateral com links para as páginas
- **Header.tsx**: Cabeçalho com título e ícones

#### Páginas
- **Dashboard.tsx**: Página inicial com resumo das matérias
- **Materias.tsx**: Listagem e CRUD de matérias
- **MateriaDetail.tsx**: Detalhes de uma matéria com seus tópicos
- **Sessoes.tsx**: Listagem e CRUD de sessões de estudo

#### Serviços
- **api.ts**: Configuração do Axios com endpoints para comunicação com o backend

### Docker
- **docker-compose.yml**: Define os serviços (backend, frontend) e suas configurações
- **backend/Dockerfile**: Imagem Docker para o backend
- **frontend/Dockerfile**: Imagem Docker para o frontend

### Documentação
- **README.md**: Documentação geral do projeto
- **QUICKSTART.md**: Guia rápido para começar
- **DOCKER_SETUP.md**: Guia detalhado sobre Docker e Docker Compose
- **TECHNICAL_SUMMARY.md**: Resumo técnico da arquitetura
- **PROJECT_STRUCTURE.md**: Este arquivo
- **todo.md**: Lista de tarefas e progresso do projeto

## Fluxo de Dados

### Criar uma Matéria

1. **Frontend**: Usuário clica em "Adicionar Matéria" em Materias.tsx
2. **Frontend**: Formulário é preenchido e enviado via Axios
3. **Backend**: MateriaController recebe a requisição POST
4. **Backend**: MateriaService valida e processa os dados
5. **Backend**: Prisma insere na tabela MATERIAS do SQLite
6. **Frontend**: Resposta é recebida e lista é atualizada

### Visualizar Tópicos de uma Matéria

1. **Frontend**: Usuário clica em "Ver Detalhes" em uma matéria
2. **Frontend**: MateriaDetail.tsx carrega os dados da matéria
3. **Backend**: MateriaController retorna matéria com seus tópicos
4. **Frontend**: Tópicos são exibidos em cards com status e prioridade

## Dependências Principais

### Backend
- **@nestjs/common**: Framework NestJS
- **@nestjs/core**: Core do NestJS
- **@prisma/client**: Cliente Prisma para banco de dados
- **class-validator**: Validação de DTOs
- **class-transformer**: Transformação de objetos

### Frontend
- **react**: Biblioteca React
- **react-dom**: Renderização no DOM
- **react-router-dom**: Roteamento de páginas
- **axios**: Cliente HTTP
- **tailwindcss**: Framework CSS utilitário
- **typescript**: Tipagem estática

## Portas Utilizadas

- **Frontend**: 3000 (http://localhost:3000)
- **Backend**: 3001 (http://localhost:3001)
- **SQLite**: Arquivo local (backend/prisma/dev.db)

## Variáveis de Ambiente

### Backend
- `NODE_ENV`: development | production
- `PORT`: Porta do servidor (padrão: 3001)
- `DATABASE_URL`: URL de conexão com banco (padrão: file:./prisma/dev.db)
- `CORS_ORIGIN`: Origem CORS permitida (padrão: http://localhost:3000)

### Frontend
- `VITE_API_URL`: URL da API backend (padrão: http://localhost:3001)

## Como Adicionar uma Nova Funcionalidade

1. **Backend**:
   - Criar novo módulo em `backend/src/modules/nova-funcionalidade/`
   - Criar DTOs em `dto/`
   - Criar service, controller e module
   - Adicionar modelo ao `prisma/schema.prisma`
   - Executar migration: `npx prisma migrate dev`

2. **Frontend**:
   - Criar página em `frontend/src/pages/NovaFuncionalidade.tsx`
   - Adicionar rota em `App.tsx`
   - Adicionar link no Sidebar
   - Criar serviço em `services/api.ts` se necessário

3. **Docker**:
   - Reconstruir imagens: `docker-compose build --no-cache`
   - Reiniciar serviços: `docker-compose restart`

## Próximos Passos Recomendados

1. Implementar autenticação e autorização
2. Adicionar testes unitários e E2E
3. Configurar CI/CD (GitHub Actions)
4. Implementar cache (Redis)
5. Adicionar logging centralizado
6. Configurar monitoramento (Prometheus)
7. Implementar WebSockets para atualizações em tempo real
8. Adicionar busca avançada (Elasticsearch)

## Referências

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

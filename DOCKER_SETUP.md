# Guia de Execução com Docker Compose

Este documento fornece instruções detalhadas para executar o Planejador de Estudos usando Docker e Docker Compose.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Docker**: versão 20.10 ou superior
  - Instalar: https://docs.docker.com/get-docker/
  - Verificar: `docker --version`

- **Docker Compose**: versão 2.0 ou superior
  - Geralmente instalado junto com Docker Desktop
  - Verificar: `docker-compose --version`

## Estrutura do Projeto

```
planejador-estudos/
├── backend/                    # Aplicação NestJS
│   ├── src/                   # Código-fonte
│   ├── prisma/                # Schema e migrations
│   ├── Dockerfile             # Imagem Docker do backend
│   ├── package.json           # Dependências Node
│   └── tsconfig.json          # Configuração TypeScript
├── frontend/                   # Aplicação React
│   ├── src/                   # Código-fonte
│   ├── Dockerfile             # Imagem Docker do frontend
│   ├── package.json           # Dependências Node
│   └── vite.config.ts         # Configuração Vite
├── docker-compose.yml         # Orquestração dos serviços
├── README.md                  # Documentação geral
└── DOCKER_SETUP.md           # Este arquivo
```

## Passos para Execução

### 1. Clonar o Repositório

```bash
git clone <repository-url>
cd planejador-estudos
```

### 2. Configurar Variáveis de Ambiente

As variáveis de ambiente padrão já estão configuradas no `docker-compose.yml`. Se desejar customizar, crie um arquivo `.env` na raiz do projeto:

```bash
# Backend
NODE_ENV=development
PORT=3001
DATABASE_URL=file:./prisma/dev.db
CORS_ORIGIN=http://localhost:3000

# Frontend
VITE_API_URL=http://localhost:3001
```

### 3. Iniciar os Serviços

```bash
# Iniciar em modo background
docker-compose up -d

# Ou iniciar em modo interativo (para ver logs)
docker-compose up
```

**Saída esperada:**
```
Creating planejador-frontend ... done
Creating planejador-backend  ... done
```

### 4. Aguardar Inicialização

Os serviços levam alguns segundos para inicializar. Você pode verificar o status com:

```bash
docker-compose ps
```

**Saída esperada:**
```
NAME                  COMMAND                  SERVICE      STATUS      PORTS
planejador-backend    npm run dev              backend      Up 2 mins   0.0.0.0:3001->3001/tcp
planejador-frontend   npm run dev              frontend     Up 2 mins   0.0.0.0:3000->3000/tcp
```

### 5. Acessar a Aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## Operações Comuns

### Ver Logs

```bash
# Logs de todos os serviços
docker-compose logs -f

# Logs apenas do backend
docker-compose logs -f backend

# Logs apenas do frontend
docker-compose logs -f frontend

# Últimas 100 linhas
docker-compose logs --tail=100
```

### Parar os Serviços

```bash
# Parar mantendo os dados
docker-compose stop

# Parar e remover containers
docker-compose down

# Parar e remover tudo (incluindo volumes)
docker-compose down -v
```

### Reconstruir Imagens

```bash
# Reconstruir sem cache
docker-compose build --no-cache

# Reconstruir e iniciar
docker-compose up -d --build
```

### Executar Comandos nos Containers

```bash
# No backend
docker-compose exec backend npm run migrate
docker-compose exec backend npm run test

# No frontend
docker-compose exec frontend npm run build
```

### Acessar o Shell do Container

```bash
# Backend
docker-compose exec backend sh

# Frontend
docker-compose exec frontend sh
```

## Estrutura de Dados

### Banco de Dados SQLite

O banco de dados SQLite é armazenado em:
- **Local**: `backend/prisma/dev.db`
- **No Container**: `/app/prisma/dev.db`

O volume está configurado para persistência automática.

### Migrations

Para criar uma nova migration após alterar o schema:

```bash
docker-compose exec backend npx prisma migrate dev --name <nome-da-migration>
```

### Visualizar Dados (Prisma Studio)

```bash
docker-compose exec backend npx prisma studio
```

Acesse em: http://localhost:5555

## Troubleshooting

### Porta Já em Uso

Se a porta 3000 ou 3001 já está em uso:

1. Identifique o processo usando a porta:
   ```bash
   # Linux/Mac
   lsof -i :3000
   lsof -i :3001
   
   # Windows
   netstat -ano | findstr :3000
   ```

2. Mate o processo ou altere a porta no `docker-compose.yml`:
   ```yaml
   ports:
     - "3002:3000"  # Altere o primeiro número
   ```

### Banco de Dados Corrompido

Para resetar o banco de dados:

```bash
docker-compose down -v
docker-compose up -d
```

### Erro de Conexão entre Serviços

Verifique se os serviços estão na mesma rede:

```bash
docker network ls
docker network inspect planejador_planejador-network
```

### Erro de Permissão no Banco de Dados

```bash
# Ajustar permissões do volume
docker-compose exec backend chmod 666 /app/prisma/dev.db
```

### Limpeza Completa

Para remover tudo e começar do zero:

```bash
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

## Desenvolvimento Local (Sem Docker)

Se preferir desenvolver sem Docker:

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Performance e Otimizações

### Aumentar Recursos do Docker

Se o Docker está lento, aumente os recursos em Docker Desktop:
- Settings → Resources → Memory: 4GB+
- Settings → Resources → CPUs: 2+

### Modo de Desenvolvimento vs Produção

O `docker-compose.yml` atual está configurado para **desenvolvimento**. Para produção:

1. Altere `NODE_ENV=production`
2. Use `npm run build` em vez de `npm run dev`
3. Configure um reverse proxy (Nginx)
4. Use um banco de dados gerenciado (não SQLite)

## Monitoramento

### Verificar Saúde dos Serviços

```bash
# Status geral
docker-compose ps

# Inspecionar um container
docker-compose exec backend npm run test

# Verificar uso de recursos
docker stats
```

## Backup do Banco de Dados

```bash
# Fazer backup
docker cp planejador-backend:/app/prisma/dev.db ./backup-dev.db

# Restaurar backup
docker cp ./backup-dev.db planejador-backend:/app/prisma/dev.db
```

## Próximos Passos

1. **Adicionar Dados de Exemplo**: Crie um script de seed
2. **Implementar Autenticação**: Adicione JWT ou OAuth
3. **Testes Automatizados**: Configure CI/CD
4. **Deploy**: Use Kubernetes, AWS ECS, ou Heroku
5. **Monitoramento**: Configure logs centralizados e alertas

## Suporte

Para problemas ou dúvidas:

1. Verifique os logs: `docker-compose logs`
2. Consulte a documentação oficial:
   - Docker: https://docs.docker.com/
   - Docker Compose: https://docs.docker.com/compose/
   - NestJS: https://docs.nestjs.com/
   - React: https://react.dev/
3. Abra uma issue no repositório

## Referências Úteis

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

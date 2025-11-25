# Planejador de Estudos - TODO

## Fase 1: Análise e Planejamento
- [x] Análise das especificações do PDF
- [x] Análise dos diagramas (DER, Classes, Casos de Uso)
- [x] Planejamento da arquitetura
- [x] Criar estrutura do projeto com Docker

## Fase 2: Configuração Docker e Docker Compose
- [x] Criar Dockerfile para backend (NestJS)
- [x] Criar Dockerfile para frontend (React)
- [x] Criar docker-compose.yml com serviços (backend, frontend, SQLite)
- [x] Configurar volumes para persistência de dados
- [x] Configurar variáveis de ambiente

## Fase 3: Banco de Dados (Prisma + SQLite)
- [x] Instalar Prisma e dependências
- [x] Criar schema.prisma com modelos:
  - [x] Materia (id, nome, descricao)
  - [x] Topico (id, titulo, prioridade, status, materiaId)
  - [x] Recurso (id, titulo, url, topicoId)
  - [x] SessaoEstudo (id, titulo, dataInicio, dataFim, topicoId)
- [ ] Criar migrations do Prisma
- [ ] Seed inicial (dados de exemplo)

## Fase 4: Backend NestJS
- [x] Criar projeto NestJS
- [x] Configurar TypeORM/Prisma
- [x] Implementar módulos:
  - [x] MateriaModule (CRUD)
  - [x] TopicoModule (CRUD)
  - [x] RecursoModule (CRUD)
  - [x] SessaoEstudoModule (CRUD)
- [x] Implementar controllers com endpoints REST
- [x] Implementar services com lógica de negócio
- [x] Adicionar validação com class-validator
- [x] Implementar tratamento de erros
- [ ] Testes unitários para services

## Fase 5: Frontend React + Tailwind
- [x] Criar projeto React com Vite
- [x] Configurar Tailwind CSS
- [x] Implementar layout base:
  - [x] Header com logo e navegação
  - [x] Sidebar com menu
  - [x] Main content area
- [x] Implementar páginas:
  - [x] Dashboard (Visão Geral)
    - [x] Cards de matérias
    - [x] Progresso de estudo (barras)
    - [ ] Calendário de sessões
  - [x] Matérias
    - [x] Listagem de matérias
    - [x] Criar/editar matéria
    - [x] Deletar matéria
  - [x] Tópicos (dentro de matéria)
    - [x] Listagem de tópicos
    - [x] Criar/editar tópico
    - [x] Deletar tópico
    - [x] Visualizar recursos
  - [x] Sessões de Estudo
    - [ ] Calendário com sessões
    - [x] Criar/editar sessão
    - [x] Deletar sessão
  - [ ] Recursos
    - [ ] Adicionar recurso a tópico
    - [ ] Visualizar recursos
    - [ ] Deletar recurso
- [x] Implementar componentes reutilizáveis
- [x] Integração com API backend (axios/fetch)
- [x] Responsividade mobile

## Fase 6: Integração e Testes
- [ ] Testar CRUD de matérias
- [ ] Testar CRUD de tópicos
- [ ] Testar CRUD de recursos
- [ ] Testar CRUD de sessões
- [ ] Testar fluxo completo
- [ ] Testes de performance (< 500ms)
- [ ] Testes de responsividade

## Fase 7: Documentação e Entrega
- [x] Criar README.md com instruções
- [ ] Documentar API endpoints
- [ ] Documentar variáveis de ambiente
- [ ] Instruções para executar com Docker Compose
- [ ] Verificação final de todos os requisitos

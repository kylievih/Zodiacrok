# 🌌 Zodiac'Rok

Aplicativo mobile educacional, gamificado e baseado na interação dos usuários e tecnologia 4.0, desenvolvido com **React Native (Expo)** no frontend e **Node.js + Express + Prisma** no backend.

---

## 📁 Estrutura do Projeto

ZodiacRok/
├── assets/ # Recursos visuais (ícones, imagens, etc.)
│ └── icons/Menu/ # Ícones personalizados para o menu
│
├── backend/ # Backend Node.js com Express e Prisma
│ ├── prisma/ # Configurações do Prisma
│ │ └── schema.prisma # Modelo do banco de dados
│ ├── src/
│ │ ├── controllers/ # Controladores: lógica dos endpoints (ex: auth.controller.ts)
│ │ ├── models/ # Modelos de dados (ex: User, Perfil)
│ │ ├── routes/ # Definições de rotas da API (ex: auth.routes.ts)
│ │ ├── services/ # Lógica de negócio separada dos controllers (ex: auth.service.ts)
│ │ ├── middlewares/ # Middlewares globais (ex: autenticação, logs)
│ │ ├── utils/ # Funções utilitárias
│ │ ├── config/ # Configurações gerais (ex: conexão com DB)
│ │ ├── server.ts # Inicializa o servidor
│ │ └── app.ts # Instância do app Express com middlewares
│ ├── package.json # Dependências e scripts do backend
│ ├── tsconfig.json # Configuração TypeScript do backend
│ └── .env # Variáveis de ambiente
│
├── src/ # Frontend mobile com React Native (Expo)
│ ├── pages/ # Telas principais do app
│ │ ├── login/ # Tela de Login
│ │ ├── cadastro/ # Tela de Cadastro
│ │ ├── home/ # Tela principal após login
│ │ ├── planets/ # Telas relacionadas aos videos, lives e series
│ │ ├── zodiac/ # Telas relacionadas aos games e disciplinas
│ │ ├── rokmojih/ # Telas dos avatares
│ │ ├── perfil/ # Tela de perfil do usuário
│ │ ├── explorar/ # Tela de exploração de conteúdo
│ │ ├── notificacoes/ # Tela de notificações
│ │ └── chat/ # Tela de chat e interação
│ ├── hooks/ # Hooks customizados (ex: useAuth, useFetch)
│ ├── services/ # Serviços de API e autenticação
│ ├── routes/ # Navegação (pilha, tabs, etc.)
│ └── App.tsx # Componente raiz do app

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: React Native (Expo), TypeScript
- **Backend**: Node.js, Express, Prisma ORM, PostgreSQL
- **Navegação**: React Navigation
- **Autenticação**: JWT + Middleware de autenticação
- **Estilização**: StyleSheet customizados por tela

---

## 📌 Objetivo do Projeto

O Zodiac'Rok tem como objetivo unir educação e tecnologia em uma plataforma interativa, gamificada e educativa para jovens e estudantes.

---

## 📂 Sugestões Futuras

- Implementar **Dark Mode**
- Adicionar **testes automatizados** no frontend e backend
- Expandir funcionalidades de chat em tempo real
- Integração com push notifications

---

## 🧑‍💻 Autora

Desenvolvido por Kylie Vih

---

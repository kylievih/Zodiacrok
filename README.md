# 🌌 Zodiac'Rok

Aplicativo mobile educacional, gamificado e baseado na interação dos usuários e tecnologia 4.0, desenvolvido com **React Native (Expo)** no frontend e **Mongo** no backend.

---

## 📁 Estrutura do Projeto

ZodiacRok/
├── assets/ # Recursos visuais (ícones, imagens, etc.)
│ └── icons/Menu/ # Ícones personalizados para o menu
│
├── backend/
│
├── Frontend/
├── src/
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
- **Backend**: MongoDB
- **Navegação**: React Navigation
- **Autenticação**: JWT + Middleware de autenticação
- **Estilização**: StyleSheet customizados por tela

🎯 Próximos passos possíveis no backend (dependendo do que já fez):

| Área                     | Descrição                                                                 |
| ------------------------ | ------------------------------------------------------------------------- |
| ✅ **Autenticação**      | Registro, login, tokens, segurança. Pode usar JWT, OAuth ou Firebase Auth |
| 🧠 **Perfil do usuário** | Dados, progresso, Rokmojih, zodíaco etc.                                  |
| 🛰️ **API de conteúdo**   | Roteamento para vídeos, games, quiz, séries, etc.                         |
| 💬 **Chat**              | Sistema de mensagens em tempo real (Ex: WebSocket + MongoDB ou Firebase)  |
| 🔔 **Notificações**      | Enviar/receber alertas no app, pode ser via push ou via backend mesmo     |
| 🧩 **Gamificação**       | Níveis, pontos, conquistas, etc.                                          |

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

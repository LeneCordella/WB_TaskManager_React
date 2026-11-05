# WB Task Manager

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)

</div>

A task management application built with React to practice state management, component composition, routing, and browser persistence.

## Live Demo

Visit the deployed app here:

https://wb-task-manager-react-quvg1882w-lenecdrs-projects.vercel.app/

## Overview

This project allows users to:

- create tasks with a title and description
- mark tasks as completed or pending
- delete tasks from the list
- open a dedicated task details page
- keep task data saved locally in the browser

It was created as a frontend learning project using React and Vite.

## Features

- Add tasks
- Toggle completion status
- Remove tasks
- View task details
- Local persistence with localStorage
- Clean and responsive interface

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- UUID

## Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── App.css
├── assets/
├── components/
│   ├── AddTask.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Tasks.jsx
│   └── Title.jsx
└── pages/
    └── TaskDetail.jsx
```

## Screenshots

<p align="center">
  <img src="src/assets/screenshot%2001.png" alt="Screenshot 01" width="420" />
  <img src="src/assets/screenshot%2002.png" alt="Screenshot 02" width="420" />
</p>

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <url-do-repositorio>
cd WB_TaskManager_React
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

---

# WB Task Manager (Português)

Aplicação de gerenciamento de tarefas desenvolvida em React para praticar gerenciamento de estado, componentes, rotas e persistência no navegador.

## Demo

Acesse a versão publicada:

https://wb-task-manager-react-quvg1882w-lenecdrs-projects.vercel.app/

## Visão geral

Este projeto permite:

- criar tarefas com título e descrição
- marcar tarefas como concluídas ou pendentes
- excluir tarefas da lista
- acessar uma página de detalhes de cada tarefa
- manter os dados salvos localmente no navegador

O projeto foi criado como estudo prático de frontend com React e Vite.

## Funcionalidades

- Adicionar tarefas
- Alternar status de conclusão
- Remover tarefas
- Visualizar detalhes da tarefa
- Persistência com localStorage
- Interface limpa e responsiva

## Stack tecnológica

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- UUID

## Estrutura do projeto

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── App.css
├── assets/
├── components/
│   ├── AddTask.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Tasks.jsx
│   └── Title.jsx
└── pages/
    └── TaskDetail.jsx
```

## Printscreens

<p align="center">
  <img src="src/assets/screenshot%2001.png" alt="Screenshot 01" width="420" />
  <img src="src/assets/screenshot%2002.png" alt="Screenshot 02" width="420" />
</p>

## Como executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone <url-do-repositorio>
cd WB_TaskManager_React
npm install
```

### Rodar localmente

```bash
npm run dev
```

Acesse a URL que o Vite mostrar no terminal, normalmente:

```bash
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o projeto em modo de desenvolvimento.

```bash
npm run build
```

Gera a build de produção.

```bash
npm run preview
```

Abre uma prévia da build localmente.

```bash
npm run lint
```

Executa a validação do código com ESLint.

## Como usar

1. Digite o título e a descrição da tarefa.
2. Clique em "Add Task".
3. Use o botão da tarefa para marcar como concluída ou pendente.
4. Abra a página de detalhes para ver os dados completos.
5. Exclua qualquer tarefa pelo botão de lixeira.

## Observações

As tarefas ficam salvas no localStorage do navegador e continuam disponíveis após recarregamentos até que os dados do navegador sejam limpos.

## Referência do tutorial

Este projeto foi desenvolvido seguindo o guia do curso React para Iniciantes do canal Felipe Rocha no YouTube.

- Canal: Felipe Rocha
- Curso: React para Iniciantes
- Vídeo: https://youtu.be/2RWsLmu8yVc

## Licença

Este projeto foi desenvolvido para fins de estudo e uso pessoal.

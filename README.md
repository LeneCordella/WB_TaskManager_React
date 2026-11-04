# WB Task Manager

A simple and clean task manager built with React, Vite, and React Router. The app lets you add tasks, mark them as complete or pending, delete them, and view task details in a dedicated page.

## Features

- Add a new task with a title and description
- Toggle tasks between pending and done states
- Delete tasks from the list
- View task details in a separate route
- Persist tasks in the browser using localStorage
- Responsive, lightweight interface with modern styling

## Tech Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- Lucide React icons
- uuid for unique task IDs

## Project Structure

```bash
src/
├── App.jsx
├── main.jsx
├── index.css
├── App.css
├── components/
│   ├── AddTask.jsx
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Tasks.jsx
│   └── Title.jsx
├── pages/
│   └── TaskDetail.jsx
└── assets/
```

## Prerequisites

Before running this project, make sure you have installed:

- Node.js 18 or later
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd WB_TaskManager_React
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser. The Vite development server will usually provide a local URL such as:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the app for production.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Runs ESLint to check code quality.

## Usage

- Enter a task title and description in the form
- Click "Add Task" to create a task
- Use the task button to mark it as done or pending
- Click the details arrow to open the task detail page
- Use the trash button to remove a task

## Notes

Tasks are stored in the browser's localStorage, so they remain available after refreshes unless the browser storage is cleared.

## Tutorial Reference

This project was created as a guided learning exercise based on the React For Beginners course by Felipe Rocha on YouTube.

- YouTube channel: Felipe Rocha
- Course: React para Iniciantes
- Tutorial used as guidance for this project
- Link: https://youtu.be/2RWsLmu8yVc

## License

This project is intended for learning and personal use.

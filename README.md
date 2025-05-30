# React Todo List Application

A modern and interactive Todo List application built with React. This application helps users manage their daily tasks with a clean interface and powerful features.

## Features

- ✨ Add new tasks with validation
- ✅ Mark tasks as complete/incomplete
- 🗑️ Delete individual tasks
- 🔍 Filter tasks by status (All, Active, Completed)
- 🔄 Sort tasks alphabetically
- 🧹 Clear completed tasks or all tasks
- 💾 Persistent storage using localStorage
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations

## Live Demo

You can try the application at [http://localhost:3000](http://localhost:3000) after starting the development server.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd to-do_list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Adding Tasks
- Type your task in the input field
- Press Enter or click the Add button
- Empty tasks are not allowed

### Managing Tasks
- Click the checkbox to mark a task as complete/incomplete
- Click the Delete button to remove a task
- Use filter buttons to view All, Active, or Completed tasks
- Click Sort button to arrange tasks alphabetically

### Bulk Actions
- Use "Clear Completed" to remove all completed tasks
- Use "Clear All" to remove all tasks
- Confirmation will be asked before bulk deletions

## Project Structure

```
src/
  ├── components/
  │   ├── TodoList.js     # Main component
  │   ├── TodoItem.js     # Individual todo item
  │   ├── FilterButtons.js # Filter and sort controls
  │   └── TodoList.css    # Styles
  ├── hooks/
  │   └── useLocalStorage.js # Custom hook for persistence
  ├── App.js
  └── index.js
```

## Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder

## Technologies Used

- React 18
- React Hooks (useState, useEffect)
- CSS3 with Modern Features
- LocalStorage for Data Persistence
- Custom Hooks
- Component Optimization with React.memo

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a Pull Request

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrash, 
  faPlus, 
  faTasks,
  faSort,
  faList,
  faClipboardCheck,
  faEraser,
  faBroom
} from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from '../hooks/useLocalStorage';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortAscending, setSortAscending] = useState(true);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTodos([...todos, { text: input.trim(), completed: false, id: Date.now() }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    if (window.confirm('Are you sure you want to clear all todos?')) {
      setTodos([]);
    }
  };

  const clearCompletedTodos = () => {
    if (window.confirm('Are you sure you want to clear all completed todos?')) {
      setTodos(todos.filter(todo => !todo.completed));
    }
  };

  const sortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (sortAscending) {
        return a.text.localeCompare(b.text);
      }
      return b.text.localeCompare(a.text);
    });
    setTodos(sortedTodos);
    setSortAscending(!sortAscending);
  };

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-container">      <h1>
        <FontAwesomeIcon icon={faTasks} className="title-icon" />
        Todo List
      </h1>
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </form>

      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          <FontAwesomeIcon icon={faList} /> All
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''} 
          onClick={() => setFilter('active')}
        >
          <FontAwesomeIcon icon={faTasks} /> Active
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          <FontAwesomeIcon icon={faClipboardCheck} /> Completed
        </button>
        <button 
          className="sort-button"
          onClick={sortTodos}
        >
          <FontAwesomeIcon icon={faSort} /> Sort {sortAscending ? '↓' : '↑'}
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="todo-stats">
        <p>Active tasks: {activeCount} | Completed tasks: {completedCount}</p>
        <div className="clear-buttons">
          <button 
            className="clear-button"
            onClick={clearCompletedTodos}
            disabled={completedCount === 0}
          >
            <FontAwesomeIcon icon={faEraser} /> Clear Completed
          </button>
          <button 
            className="clear-all-button"
            onClick={clearAllTodos}
            disabled={todos.length === 0}
          >
            <FontAwesomeIcon icon={faBroom} /> Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

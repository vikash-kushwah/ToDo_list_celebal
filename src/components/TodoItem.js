import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => (
  <li className="todo-item">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span className={todo.completed ? 'completed' : ''}>
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)} className="delete-button">
      Delete
    </button>
  </li>
));

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const handleTextClick = () => {
    toggleComplete(task.id);
  };

  const handleEdit = () => {
    editTodo(task.id);
  };

  const handleDelete = () => {
    deleteTodo(task.id);
  };

  return (
    <div className='Todo'>
      <p
        onClick={handleTextClick}
        className={`todo-text ${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenSquare} onClick={handleEdit} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/>
      </div>
    </div>
  );
};

import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';
import '../styles/style.css';
import { EditTodoForm } from './EditForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (EditedtaskText, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: EditedtaskText, isEditing: false } : todo
      )
    );
  };


  return (
    <div>
      <h1>Here's My Todo List!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
        <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
        )
      ))}
    </div>
  );
};


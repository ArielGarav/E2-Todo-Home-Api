import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Calcula si hay tareas incompletas
  const hasIncompleteTodos = todos.some((todo) => !todo.completed);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleComplete, hasIncompleteTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

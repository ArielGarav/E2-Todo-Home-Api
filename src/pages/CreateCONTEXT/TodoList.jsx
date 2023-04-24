import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { MdDelete } from "react-icons/md";
import {
  ButtonAdd,
  ButtonDelete,
  ContainerPrincipal,
  Formulario,
  Input,
  LI,
  Ul,
} from "./TodoListStyles";
import ErrorMessage from "../../Components/ErrorMsj/Error";
const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { todos, addTodo, deleteTodo, toggleComplete } =
    useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    const existingTodo = todos.find((todo) => todo.text === newTodo);
    if (existingTodo) {
      setErrorMessage("Task already exists");

      setNewTodo("");
      return;
    }
    addTodo({
      id: Date.now(),
      text: newTodo,
      completed: false,
    });
    setNewTodo("");
    setErrorMessage(null);
  };

  return (
    <>
      <ContainerPrincipal>
        <Formulario onSubmit={handleSubmit}>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <ButtonAdd type="submit">Add</ButtonAdd>
        </Formulario>
        {errorMessage && <ErrorMessage message={errorMessage} />}

        <Ul>
          {todos.map((todo) => (
            <LI key={todo.id}>
              <span
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <ButtonDelete onClick={() => deleteTodo(todo.id)}>
                Delete <MdDelete />
              </ButtonDelete>
            </LI>
          ))}
        </Ul>
      </ContainerPrincipal>
    </>
  );
};

export default TodoList;

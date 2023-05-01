import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { ContainerTotal } from "./TaskFormStylos";

const TodoList = () => {
  return (
    <ContainerTotal>
      <TaskForm />
      <TaskList />
    </ContainerTotal>
  );
};

export default TodoList;

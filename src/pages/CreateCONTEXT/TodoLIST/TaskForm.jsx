import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Features/Tasks/taskSlice";
import { v4 as uuid } from "uuid";
import {
  ButtonAdd,
  ContainerPrincipal,
  Formulario,
  Input,
} from "../TodoLIST/TaskFormStylos";
import ErrorMessage from "../../../Components/ErrorMsj/Error";

const TaskForm = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    const existingTask = taskList.find((t) => t.name === task.name);

    if (existingTask) {
      setErrorMessage("Task already exists!");
      return;
    }
    if (!task.name) {
      setErrorMessage("Please enter a Task Name!");
      return;
    }

    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    setErrorMessage(null);
  };

  return (
    <ContainerPrincipal>
      <Formulario onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="name"
          type="text"
          id=""
          placeholder="Add Task"
        />

        <ButtonAdd>Add </ButtonAdd>
      </Formulario>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </ContainerPrincipal>
  );
};

export default TaskForm;

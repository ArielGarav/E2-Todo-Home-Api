import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTask } from "../Features/Tasks/taskSlice";
import {
  ButtonDelete,
  ContainerTask,
  Description,
  Name,
} from "./TaskListStyles";
import { MdDelete } from "react-icons/md";
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      {tasks.map((task) => (
        <ContainerTask key={task.id}>
          <Name>{task.name}</Name>
          <Description>{task.description}</Description>
          <ButtonDelete onClick={() => handleDelete(task.id)}>
            Delete
            <MdDelete />
          </ButtonDelete>
        </ContainerTask>
      ))}{" "}
    </div>
  );
};

export default TaskList;

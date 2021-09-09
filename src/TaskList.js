import { useState } from "react";
import { deleteTask } from "./services/task.service";
import "./Task.css";

const TaskList = ({
  tasks,
  removeTask,
  updateModalState,
  taskModal,
  openModal,
  closeModal,
}) => {
  const onClickEdit = async (task) => {
    updateModalState(task);
    openModal();
  };

  const onClickDelete = async (task) => {
    await deleteTask(task.id);
    removeTask(task);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <>
          <div className="cardDesign" key={index}>
            <h3>Title: {task.title}</h3>
            <p>Description: {task.description}</p>
            <p>
              Status: <i>{task.status}</i>
            </p>
            <button onClick={() => onClickEdit(task)}>Edit</button>
            <button onClick={() => onClickDelete(task)} className="taskButton">
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default TaskList;

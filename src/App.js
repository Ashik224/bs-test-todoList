import { useState, useEffect } from "react";
import TaskModal from "./tasks/TaskModal";
import { validateForm } from "./tasks/validateCreateForm";
import { getTasks, postTask, updateTask } from "./services/task.service";
import TaskList from "./tasks/TaskList";
import FilterTask from "./tasks/FilterTask";
import ShowStats from "./tasks/ShowStats";
import './assets/css/App.css';

function App() {
  const [taskModal, setTaskModal] = useState(false);
  const [modalState, setModalState] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [createFormError, setCreateFormError] = useState({});
  const [tasks, setTasks] = useState([]);
  const [tempTasks, setTempTasks] = useState([]);
  const [buttonLabel, setButtonLabel] = useState("Create");
  const [retrievedState, setRetrievedState] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    (async () => {
      await fetchTasks();    
    })();    
  }, []);

  useEffect(() => {
    const filteredValue = tasks.filter((task) => task.status === statusFilter);
    if (filteredValue.length === 0) {
      setTempTasks(tasks);
    } else setTempTasks(filteredValue);
    console.log("Value: ", filteredValue);
  }, [statusFilter]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    setTempTasks(data);
  };

  const removeTask = (task) => {
    const remainedTask = tasks.filter((value) => value.id !== task.id);
    setTasks(remainedTask);
    setTempTasks(remainedTask);
  };

  const onCloseModal = () => {
    setTaskModal(false);
    setCreateFormError({});
  };

  const onOpenModal = () => {
    setTaskModal(true);
  };

  const onHandleChange = (event) => {
    setModalState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    if (buttonLabel === "Create") {
      setCreateFormError(validateForm(modalState));
      if (!Object.values(modalState).some((value) => value === "")) {
        console.log("State: ", modalState);
        const postedTask = await postTask(modalState);
        setTasks((tasks) => [postedTask, ...tasks]);
        setTempTasks((tasks) => [postedTask, ...tasks]);
        onCloseModal();
        setModalState({ title: "", description: "", status: "" });
      }
    } else if (buttonLabel === "Edit") {
      const updatedTask = await updateTask(modalState, retrievedState.id);
      const filteredTasks = tasks.filter(
        (task) => task.id !== retrievedState.id
      );
      setTasks([updatedTask, ...filteredTasks]);
      setTempTasks([updatedTask, ...filteredTasks]);
      setModalState({ title: "", description: "", status: "" });
      onCloseModal();
    }
  };

  const updateModalState = (value) => {
    setRetrievedState(value);
    setModalState({
      title: value.title,
      description: value.description,
      status: value.status,
    });
    setButtonLabel("Edit");
  };

  const onClickCreateButton = () => {
    setButtonLabel("Create");
    setTaskModal(true);
  };

  const onHandleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  return (
    <div className="outerDiv">
      <TaskModal
        openModal={taskModal}
        closeModal={onCloseModal}
        modalState={modalState}
        handleChange={onHandleChange}
        handleSubmit={onHandleSubmit}
        setError={createFormError}
        buttonLabel={buttonLabel}
      />
      <ShowStats tasks={tasks} />
      <button onClick={onClickCreateButton}>CREATE NEW</button>
      <br /><br />
      <FilterTask
        statusFilter={statusFilter}
        handleStatusFilterChange={onHandleStatusFilterChange}
      />
      <br />
      <TaskList
        tasks={tempTasks}
        removeTask={removeTask}
        updateModalState={updateModalState}
        modalState={modalState}
        taskModal={taskModal}
        openModal={onOpenModal}
      />
    </div>
  );
}

export default App;

import { useContext } from "react";
import Taskcard from "./Taskcard";
import {TaskContext} from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white p-4 rounded-md text-4xl font-bold text-center ">No hay tareas agregadas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-3 p-4 ">
      {tasks.map((task) => (
        <Taskcard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

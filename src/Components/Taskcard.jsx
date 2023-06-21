import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskcard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-700 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>{" "}
      <p className="text-gray-400 text-xs">{task.description}</p>
      <button className="bg-red-700 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default Taskcard;

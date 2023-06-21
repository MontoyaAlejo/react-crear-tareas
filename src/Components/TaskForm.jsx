import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle(""); //Reinicio la variable
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-white p-3 uppercase font-bold text-center ">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escriba el texto"
          onChange={(e) => setTitle(e.target.value)}
          value={title} //Refleje el valor que tiene el estado
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus //Colocar el cursor de una vez en la caja de input
        />
        <textarea
          placeholder="Digitar la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Enviar</button>
      </form>
    </div>
  );
}

export default TaskForm;

import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const valor = useContext(TaskContext);
  console.log(valor);

  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="font-mono">{task.id}</h1>
      <h3>{task.titulo}</h3>
      <p>{task.descripcion}</p>
    </div>
  );
}

export default TaskCard;
import TaskCard from "./TaskCard";

function TaskList({tasks}) {

  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t}/>
      ))}
    </div>
  );
}

export default TaskList;

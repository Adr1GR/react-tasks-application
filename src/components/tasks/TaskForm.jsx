import { useState } from "react"


export function TaskForm({createTask}) {
    const [title, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({title,descripcion});
        setTitle('');
        setDescripcion('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        <input placeholder="Descripcion de la tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
        />
        <button>
            Guardar
        </button>
    </form>
  )
}

export default TaskForm;
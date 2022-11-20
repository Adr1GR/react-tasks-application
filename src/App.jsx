import TaskList from "./components/tasks/TaskList";
import TaskForm from "./components/tasks/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";
import { pokemons as dataPokemons } from "./data/pokemons";
import PokemonList from "./components/pokemons/PokemonList"

function App() {
  const [tasks, setTasks] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setTasks(data);
    setPokemons(dataPokemons);
  }, []);

  function createPokemon(pokemon) {
    setPokemons([...pokemons, {
      id: pokemons.length,
      name: pokemon.name,
      type: pokemon.type,
      img : "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    }]);
  }

  function createTask(task) {
    setTasks([...tasks, {
      id: tasks.length,
      titulo: task.title,
      descripcion: task.descripcion
    }]);
  }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
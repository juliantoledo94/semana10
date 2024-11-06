import { useState } from 'react'
import './App.css'
import ListaTareas from './components/ListaTareas'
import Tarea from './components/Tareas'


function App() {

  /*  const [tarea, setTarea] = useState("");
   const [tarea, setTarea] = useState(""); */

  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])

  const agregarTarea  = (e) =>{
    e.preventDefault();
    if(tarea.trim() != ""){
      setTareas([...tareas, {texto: tarea, completada: false}])
      setTarea("")
    }
  }

  const eliminarTareaPorIndice = (indice) =>{
    setTareas(tareas.filter((_, i) => i !== indice));
    setTarea("")
  }




  const completarTarea = (indice) =>{
      setTareas(tareas.map((t, i) =>
        i === indice ? {...t,completada: true} : t
      ))
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={agregarTarea}>

        <input
          type="text"
          placeholder='Escribe una tarea'
          value={tarea}
          onChange={(e) => setTarea(e.target.value)} 
        />
        <button type='submit'>Agregar una tarea</button>

      </form>
      <ListaTareas>
        {tareas.map((tarea,index) =>(
          <Tarea 
          key={index} 
          tarea={tarea}
          eliminarTarea = {() =>eliminarTareaPorIndice(index)}
          completarTarea = {() => completarTarea(index)}
          />
        ))}
      </ListaTareas>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const Tarea = ({ tarea, eliminarTarea, completarTarea }) => {

  return (
    <>

      <li>{tarea.texto}

        <span style={{ color: tarea.completada ? "green" : "grey" }}> ({tarea.completada ? "completada" : "pendiente"})</span>

        <button onClick={eliminarTarea}>Eliminar</button>

        <button onClick={completarTarea}>completar</button>
        
        </li>
    </>
  )
}

export default Tarea
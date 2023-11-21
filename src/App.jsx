import React, { useState, useEffect } from 'react'
import {TaskForm, TaskList} from "./components/index.js"

function App() {

  const [tasks, setTasks] = useState([])
  const [currentTasks, setCurrentTasks] = useState([])
  const [searchString, setSearchString] = useState('')

  const addTask = (task) =>{
    setTasks([...tasks, task])
  }

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const handleChangeFilter = (e) =>{
    setSearchString(e.target.value)
  }

  useEffect(() =>{
    setCurrentTasks(tasks.filter(task => 
      task.title.toLowerCase().includes(searchString.toLowerCase())
      ||
      task.description.toLowerCase().includes(searchString.toLowerCase())
      ))
  }, [searchString, tasks])

  return (
    <>
      <div className='controls'>
        <input type="text" placeholder='Escribe para buscar...' value={searchString} onChange={handleChangeFilter} />
      
        <TaskForm addTask={addTask}/>
      </div>
      <TaskList tasks={currentTasks} deleteTask={deleteTask} />
    </>
  )
}

export default App


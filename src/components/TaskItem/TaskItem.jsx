import React from 'react'
import { TaskForm } from "../index";

const TaskItem = ({tasks, deleteTask, addTask, editTask}) => {

    return (
        <div>
            <h2>{tasks.title}</h2>
            <p>{tasks.description}</p>
            <span>{tasks.creatAt}</span>
            {
                tasks.checkbox 
                ? <span>Tarea completada</span>
                : <span>Tarea por completar</span>
            }
            <TaskForm editTask={editTask} edit={true} task={tasks}/>
            <button onClick={() => deleteTask(tasks.id)}>Eliminar</button>
            <hr />
        </div>
    )
}

export default TaskItem
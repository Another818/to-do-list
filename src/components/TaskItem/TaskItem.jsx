import React from 'react'
import './TaskItem.css'

const TaskItem = ({tasks, deleteTask}) => {
    return (
        <div className='item'>
            <h2>{tasks.title}</h2>
            <p>{tasks.description}</p>
            <span>{tasks.creatAt}</span>
            <button onClick={() => deleteTask(tasks.id)}>Finalizar</button>
            <hr />
        </div>
    )
}

export default TaskItem
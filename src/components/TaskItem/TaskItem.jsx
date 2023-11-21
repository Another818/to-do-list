import React from 'react'

const TaskItem = ({tasks, deleteTask}) => {
    return (
        <div>
            <h2>{tasks.title}</h2>
            <p>{tasks.description}</p>
            <span>{tasks.creatAt}</span>
            <button onClick={() => deleteTask(tasks.id)}>Finalizar</button>
            <hr />
        </div>
    )
}

export default TaskItem
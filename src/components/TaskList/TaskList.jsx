import React from 'react'
import TaskItem from "../TaskItem/TaskItem";

function TaskList({tasks, deleteTask, addTask, editTask}) {
    return (
        <div>
            {
                tasks.length === 0
                ? <h2>Aun no has ingresado tareas.</h2>
                : tasks.map(task => (
                    <TaskItem tasks={task} key={task.id} deleteTask={deleteTask} addTask={addTask} editTask={editTask}/>
                ))

            }
        </div>
    )
}

export default TaskList
import React from 'react';
import { TaskForm } from '../index';
import './TaskItem.css';
import 'animate.css';

const TaskItem = ({ tasks, deleteTask, addTask, editTask }) => {
	return (
		<div className='item '>
			<h2>{tasks.title}</h2>
			<p>{tasks.description}</p>
			<span>{tasks.createAt}</span>
			{tasks.checkbox ? (
				<span>Tarea completada</span>
			) : (
				<span>Tarea por completar</span>
			)}
			<hr />
			<section style={{ display: 'flex', flexWrap: 'wrap' }}>
				<TaskForm editTask={editTask} edit={true} task={tasks} />
				<button onClick={() => deleteTask(tasks.id)}>Eliminar</button>
			</section>
		</div>
	);
};

export default TaskItem;

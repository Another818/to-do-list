import React from 'react';
import { TaskForm } from '../index';
import './TaskItem.css';

const TaskItem = ({ tasks, deleteTask, addTask, editTask, index }) => {
	const calculateAnimationDelay = sec => {
		// Ajusta el retraso base según tus necesidades
		const baseDelay = 0.5;
		// Calcula el retraso para cada elemento
		return sec * baseDelay;
	};
	return (
		<div
			className='item'
			style={{
				animation: 'Fade 1s',
				animationDelay: `${calculateAnimationDelay(index)}s`,
			}}
		>
			<h2>{tasks.title}</h2>
			<p>{tasks.description}</p>
			<span>{tasks.createAt}</span>
			{tasks.checkbox ? (
				<span>Tarea completada ✅</span>
			) : (
				<span>Tarea por completar ⏳</span>
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

import React, { useState, useEffect } from 'react';
import { TaskForm, TaskList } from './components/index.js';
import './App.css';

function App() {
	const [tasks, setTasks] = useState(
		// Guarda las tareas en el almacenamiento local
		JSON.parse(localStorage.getItem('tasks')) || [],
	);
	const [currentTasks, setCurrentTasks] = useState([]);
	const [searchString, setSearchString] = useState('');

	const addTask = task => {
		setTasks([...tasks, task]);
	};

	const deleteTask = taskId => {
		setTasks(tasks.filter(task => task.id !== taskId));
	};

	const editTask = (taskId, updatedTask) => {
		// Encuentra la tarea a editar
		const index = tasks.findIndex(task => task.id === taskId);

		if (index !== -1) {
			// Copia el array actual de tareas
			const newTasks = [...tasks];

			// Actualiza la tarea en el nuevo array
			newTasks[index] = updatedTask;

			console.log(newTasks);

			// Establece el nuevo array de tareas
			setTasks(newTasks);
		}
	};

	const handleChangeFilter = e => {
		setSearchString(e.target.value);
	};

	useEffect(() => {
		setCurrentTasks(
			tasks.filter(
				task =>
					task.title.toLowerCase().includes(searchString.toLowerCase()) ||
					task.description.toLowerCase().includes(searchString.toLowerCase()),
			),
		);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [searchString, tasks]);

	return (
		<>
			<h1>Lista de tareas 📝</h1>
			<div className='controls'>
				<input
					type='text'
					placeholder='Escribe para buscar...'
					value={searchString}
					onChange={handleChangeFilter}
				/>
			</div>
			<TaskForm addTask={addTask} editTask={editTask} edit={false} />
			<TaskList
				tasks={currentTasks}
				deleteTask={deleteTask}
				addTask={addTask}
				editTask={editTask}
			/>
		</>
	);
}

export default App;

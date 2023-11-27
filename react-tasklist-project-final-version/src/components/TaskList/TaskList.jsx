import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';
import 'animate.css';

function TaskList({ tasks, deleteTask, addTask, editTask }) {
	return (
		<div className='list'>
			{tasks.length === 0 ? (
				<h2>Aun no has ingresado tareas ❌</h2>
			) : (
				tasks.map((task, index) => (
					<TaskItem
						tasks={task}
						key={task.id}
						deleteTask={deleteTask}
						addTask={addTask}
						editTask={editTask}
						index={index}
					/>
				))
			)}
		</div>
	);
}

export default TaskList;

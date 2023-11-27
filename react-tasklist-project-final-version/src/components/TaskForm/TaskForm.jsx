import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlusCircle } from 'react-icons/fa';
import './TaskForm.css';

const TaskForm = ({ addTask, editTask, edit, task }) => {

	// Se setea y toma la información de checkbox dependiendo si el usuario esta editando o agregando una tarea
	const [isChecked, setIsChecked] = useState(false);
	const [isCheckedEdit, setIsCheckedEdit] = useState(false);

	const [isOpenModal, setIsOpenModal] = useState(false);

	
	const handleSetInitialCheck = () =>{
		setIsCheckedEdit(task.checkbox)
	}

	const handleOpenModal = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	const handleTwoFunction = () =>{
		handleOpenModal()
		handleSetInitialCheck()
	}

	const handleIsCheckedEdit = e => {
		setIsCheckedEdit(e.target.checked);
	};

	const handleIsChecked = e => {
		setIsChecked(e.target.checked);
	};


	const handleSubmitTask = e => {
		if (edit === true) {
			e.preventDefault();
			const title = e.target.title.value;
			const description = e.target.description.value;
			const checkbox = isCheckedEdit;
			const taskForm = {
				title,
				description,
				checkbox,
				createAt: new Date().toLocaleDateString('es-AR'),
				id: task.id,
			};
			editTask(task.id, taskForm);
			handleCloseModal();
		} else {
			e.preventDefault();
			const title = e.target.title.value;
			const description = e.target.description.value;
			const checkbox = isChecked;
			const task = {
				title,
				description,
				checkbox,
				createAt: new Date().toLocaleDateString('es-AR'),
				id: uuidv4(),
			};
			addTask(task);
			handleCloseModal();
		}
	};

	return (
		<div className='container-form'>
			{edit ? (
				<button onClick={handleTwoFunction}>
					Editar <FaPlusCircle />
				</button>
			) : (
				<button onClick={handleOpenModal} className='crearBtn'>
					Crear tarea <FaPlusCircle />
				</button>
			)}
			{isOpenModal && (
				<div className='modal-background'>
					<div className='modal'>
						{edit ? <h2>Editar tarea</h2> : <h2>Agregar nueva tarea</h2>}

						{edit ? (
							<div>
								<form onSubmit={handleSubmitTask}>
									<div className='input-container'>
										<label htmlFor='title'>Título de tarea</label>
										<input
											type='text'
											id='title'
											name='title'
											placeholder='Título de tarea'
											defaultValue={task.title}
										/>
									</div>
									<div className='input-container'>
										<label htmlFor='title'>Descripción de tarea</label>
										<textarea
											type='text'
											id='description'
											name='description'
											placeholder='Aclaraciones'
											defaultValue={task.description}
										/>
									</div>
									<div className='check-container'>
										<input
											type='checkbox'
											id='cbox1'
											checked={isCheckedEdit}
											onChange={handleIsCheckedEdit}
										/>
										<label htmlFor='cbox1'>
											{isCheckedEdit
												? 'Tarea completada ✅'
												: 'Tarea por completar ⏳'}
										</label>
									</div>
									<div className='btn-container'>
										<button onClick={handleCloseModal}>Cancelar</button>
										<button type='submit'>Confirmar</button>
									</div>
								</form>
							</div>
						) : (
							<div>
								<form onSubmit={handleSubmitTask}>
									<div className='input-container'>
										<label htmlFor='title'>Título de tarea</label>
										<input
											type='text'
											id='title'
											name='title'
											placeholder='Título de tarea'
										/>
									</div>
									<div className='input-container'>
										<label htmlFor='title'>Descripción de tarea</label>
										<textarea
											type='text'
											id='description'
											name='description'
											placeholder='Aclaraciones'
										/>
									</div>
									<div className='check-container'>
										<input
											type='checkbox'
											id='cbox1'
											checked={isChecked}
											onChange={handleIsChecked}
										/>
										<label htmlFor='cbox1'>
											{isChecked
												? 'Tarea completada ✅'
												: 'Tarea por completar ⏳'}
										</label>
									</div>

									<div className='btn-container'>
										<button onClick={handleCloseModal}>Cancelar</button>
										<button type='submit'>Agregar</button>
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TaskForm;

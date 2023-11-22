import React, {useState} from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css'
import 'animate.css'


const TaskForm = ({addTask}) => {
    
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () =>{
        setIsOpenModal(true)
    }

    const handleCloseModal = () =>{
        setIsOpenModal(false)
    }

    const handleSubmitTask = (e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const task = {title, description, createAt: new Date().toDateString(), id: uuidv4()}
        addTask(task)
        handleCloseModal()
    }

    return (
        <div>
            <button id='btnCrearTarea' onClick={handleOpenModal}>Crear tarea <FaPlusCircle/></button>
            {
                isOpenModal
                &&
                <div className='modal-background'>
                <div className="modal">
                    <h2>Agregar nueva tarea</h2>
                    <form onSubmit={handleSubmitTask}>
                        <div className="input-container">
                            <label htmlFor="title">Título de tarea</label>
                            <input type="text" id='title' name='title' placeholder='Título de tarea' />
                        </div>
                        <div className="input-container">
                            <label htmlFor="title">Título de tarea</label>
                            <textarea type="text" id='description' name='description' placeholder='Aclaraciones' />
                        </div>
                        <div className="btn-container">
                            <button onClick={handleCloseModal}>Cancel</button>
                            <button type='submit'>Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
            }
        </div>
    )
}

export default TaskForm
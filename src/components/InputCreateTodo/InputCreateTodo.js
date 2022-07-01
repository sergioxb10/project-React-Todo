import React from 'react';
import { TodoContext } from '../../Todocontext/Todocontext';
import './InputCreateTodo.css';

const InputCreateTodo = ()=>{
    const value = React.useContext(TodoContext);
    const changeNewTodoValue = (e)=>{
        value.getNewTodoValue(e.target.value);
    }
    return(
        <input value={value.newTodoValue} placeholder='Ingresa tu tarea' className='inputCreateTodo' onChange={changeNewTodoValue}></input>
    );
}

export {InputCreateTodo} ;
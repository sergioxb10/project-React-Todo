import React from 'react';
import { TodoContext } from '../../Todocontext/Todocontext';
import './TodoCounter.css';

const TodoCounter = ()=>{
    const value = React.useContext(TodoContext);
    return(
        <p className='TodoCounter-title'>Has completado  {value.totalTodos} de {value.completedTodos} TODOs</p>
    );
}

export {TodoCounter} ;
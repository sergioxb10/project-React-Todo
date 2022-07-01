import React from 'react';
import { TodoContext } from '../../Todocontext/Todocontext';
import '../InputCreateTodo/InputCreateTodo.css';

function TodoSearch(){
    const value = React.useContext(TodoContext);    
    
    const onSearchValueChange = (event)=>{
        value.setSearchValue(event.target.value)
    }

    return(
        <>
            <input 
                onChange={onSearchValueChange}
                placeholder='Busca tu tarea'
                className='inputCreateTodo'
                value={value.searchValue}>
            </input>
        </>
    );
}

export {TodoSearch};
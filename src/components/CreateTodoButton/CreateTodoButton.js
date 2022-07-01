import React from 'react';
import Button from '@mui/material/Button';
import { TodoContext } from '../../Todocontext/Todocontext';

function CreateTodoButton(){
    const value = React.useContext(TodoContext);
    const addTodo = ()=>{
        if(value.newTodoValue!==""){
            value.addTodos(value.newTodoValue);
            value.setNewTodoValue("");
        }
    };
    return(
        <Button variant="contained"
        onClick={addTodo}>
            Crear tarea
        </Button>
    );
}

export {CreateTodoButton};
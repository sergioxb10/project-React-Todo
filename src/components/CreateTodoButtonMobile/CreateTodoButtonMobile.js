import React from 'react';
import './CreateTodoButtonMobile.css';
import { TodoContext } from '../../Todocontext/Todocontext';

function CreateTodoButtonMobile() {
    const value = React.useContext(TodoContext);
    return (
        <button
        className="CreateTodoButton"
        onClick={value.handleShowModalCreateModalTodo}
        >
        +
        </button>
    );
}

export { CreateTodoButtonMobile };
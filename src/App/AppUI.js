import React from "react";
import {TodoCounter} from '../components/TodoCounter/TodoCounter';
import {TodoSearch} from '../components/TodoSearch/TodoSearch';
import {TodoList} from '../components/TodoList/TodoList';
import {TodoItem} from '../components/TodoItem/TodoItem';
import {CreateTodoButton} from '../components/CreateTodoButton/CreateTodoButton';
import {InputCreateTodo} from '../components/InputCreateTodo/InputCreateTodo';
import {ImageCreateTodo} from '../components/ImageCreateTodo/ImageCreateTodo';
import {TodoHeader} from '../components/TodoHeader/TodoHeader';
import { TodoContext } from "../Todocontext/Todocontext";
import { Modal } from "../Modal/Modal";
import { CreateTodoModal } from "../components/CreateTodoModal/CreateTodoModal";
import { CreateTodoButtonMobile } from "../components/CreateTodoButtonMobile/CreateTodoButtonMobile";
import LinearProgress from '@mui/material/LinearProgress';
import './index.css';

const AppUI = ()=>{

    const value = React.useContext(TodoContext);
    return(
        <>
            <TodoHeader/>
            <section className='main-section'>
                <section className='main-section--create_counter'>
                    <section className='main-section--create_counter-card'>
                    <InputCreateTodo/>
                    <CreateTodoButton/>
                    <ImageCreateTodo/>
                    </section>    
                </section>
                <section className='main-section--Todos'>
                    <section className='main-section--Todos-card'>
                    <TodoCounter/>
                    <TodoSearch/>
                    <TodoList>
                        {value.error && <p>Desespérate, hubo un error...</p>}
                        {value.loading && <LinearProgress />}
                        {(!value.loading && !value.searchedTodos.length) && <p>crea, tu primer Todo...</p>}
                        {value.searchedTodos.map((todo,index)=>(
                        <TodoItem 
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={()=>value.completeTodos(todo.id)}
                            deleteTodos={()=>value.deleteTodos(todo.id)}
                        />
                        ))} 
                    </TodoList>
                    </section>
                </section>
            </section>
            <Modal>
                <CreateTodoModal/>
            </Modal>
            <CreateTodoButtonMobile/>
        </>  
    );
}

export {AppUI};
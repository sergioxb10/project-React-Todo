import React from "react";
import { useLocaleStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props)=>{
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
    } = useLocaleStorage('TODOS_V1',[]);
    const [searchValue,setSearchValue] = React.useState('');
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const completedTodos = todos.filter(todo=>todo.completed === true).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if(!searchValue.length >= 1){
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo =>{
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const completeTodos = (id) =>{
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed ){
            newTodos[todoIndex].completed = false;
        }else{
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    }

    const deleteTodos = (id) =>{
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    const addTodos = (text) =>{
        const newTodos = [...todos];
        const getLastNumber = Math.max.apply(Math, newTodos.map(function (e) { return e.id; })) + 1

        newTodos.push({
            "id":getLastNumber,
            "text":text,
            "completed":false,
        });
        saveTodos(newTodos);
        setShowModalCreateModalTodo(false);
    }

    const getNewTodoValue = (newTodo)=>{
        setNewTodoValue(newTodo);
    }

    React.useEffect(()=>{
    console.log('use effect');
    },[totalTodos]);

    const [showModalCreateModalTodo, setShowModalCreateModalTodo] = React.useState(false);
    const handleCloseModalCreateModalTodo = () => {
        setShowModalCreateModalTodo(false);
    };
    const handleShowModalCreateModalTodo = () => {
        console.log("hola")
        setShowModalCreateModalTodo(true);
    };

    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            setShowModalCreateModalTodo,
            handleCloseModalCreateModalTodo,
            handleShowModalCreateModalTodo,
            showModalCreateModalTodo,
            addTodos,
            newTodoValue,
            getNewTodoValue,
            setNewTodoValue
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}



export{TodoContext,TodoProvider};
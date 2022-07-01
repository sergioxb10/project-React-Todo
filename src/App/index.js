//import logo from './logo.svg';
import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../Todocontext/Todocontext';

/*const defaultTodos = [
  {id:1, text:"Cortar cebolla", completed:false},
  {id:2, text:"Tomar curso", completed:false},
  {id:3, text:"Terminar curso", completed:false},
  {id:4, text:"Cortar cebolla", completed:false},
  {id:5, text:"Tomar curso", completed:false},
  {id:6, text:"Terminar curso", completed:false},
  {id:7, text:"Cortar cebolla", completed:false},
  {id:8, text:"Tomar curso", completed:false},
  {id:9, text:"Terminar curso", completed:false},
];*/

function App() {

  return (
    <>
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    </>      
  );
}

export default App;

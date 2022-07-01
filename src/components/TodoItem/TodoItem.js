import React from 'react';
import './TodoItem.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function TodoItem(props){
    return(
        <li className='item'>
            <CheckBoxIcon 
                onClick={props.onComplete}
                className={`checkTodo ${props.completed && 'icon-check--Active'}`}      
            />
            <p className={`${props.completed && 'item-p--complete'}`} >{props.text}</p>
            <DeleteForeverIcon onClick={props.deleteTodos} className="icon-delete"/>
        </li>
    );
}

export { TodoItem };
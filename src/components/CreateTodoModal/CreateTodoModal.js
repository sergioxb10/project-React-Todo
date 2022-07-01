import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { TodoContext } from "../../Todocontext/Todocontext";


const CreateTodoModal = () =>{

    const [newTodoValue,setNewTodoValue] = React.useState(""); 
    const value = React.useContext(TodoContext);
    const changeNewTodoValue = (e)=>{
        setNewTodoValue(e.target.value);
    }
    const addTodo = ()=>{
        if(newTodoValue!==""){
            value.addTodos(newTodoValue);
            setNewTodoValue("");
        }
    };

    return (
        <>
            <Modal show={value.showModalCreateModalTodo} onHide={value.handleCloseModalCreateModalTodo}>
            <Modal.Header closeButton>
                <Modal.Title>Crea tu tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                    type="text"
                    placeholder="Ingresa tu tarea"
                    autoFocus
                    value={newTodoValue}
                    onChange={changeNewTodoValue}
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={value.handleCloseModalCreateModalTodo}>
                Cerrar
                </Button>
                <Button variant="primary" onClick={addTodo}>
                Guardar
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );

}

export{CreateTodoModal};
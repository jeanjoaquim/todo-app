import { useContext, useState } from 'react';
import TodoContext from "../context/TodoContext";

function Form({ nightMode }) {

    const {NightMode, addTodo} = useContext(TodoContext);
    const [message, setMessage] = useState('');
    const [todoText, setTodoText] = useState('');

    // const TextChange = (e) => {
    //     setTodoText(e.target.value);
    //     if(todoText.length <= 10) {
    //         setMessage('An item should be at least 10 characters');
    //     } else {
    //         setMessage(null);
    //     }

    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newTodo = {
    //         description: todoText
    //     }
    //     if(todoText.trim().length > 10) {
    //         addTodo(newTodo);
    //     }
    //     setTodoText('tete');
    // }

    const TextChange = (e) => {
        if(todoText === '') {
            setMessage(null);
        } else if(todoText !== '' && todoText.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
        } else {
            setMessage(null);
        }

        setTodoText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(todoText.trim().length > 10) {
            const newTodo = {
                id: 5,
                description: todoText,
                status: 'active'
            }
            addTodo(newTodo);
            setTodoText('');
        }
    }

    return(
        <form onSubmit={handleSubmit} >
            <input onChange={TextChange} value={todoText} placeholder='Type a new todo...' type='text' className={`todo-input ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} />
            {message && <p>{message}</p>}
        </form>
    );
}

export default Form;
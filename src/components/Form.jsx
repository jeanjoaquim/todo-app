import { useContext, useState } from 'react';
import TodoContext from "../context/TodoContext";

function Form({ nightMode }) {

    const {NightMode, addTodo} = useContext(TodoContext);
    const [message, setMessage] = useState('');
    const [todoText, setTodoText] = useState('');

    const TextChange = (e) => {
        setTodoText(e.target.value);
        if(todoText.length <= 10) {
            setMessage('An item should be at least 10 characters');
        } else {
            setMessage(null);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            description: todoText
        }
        if(todoText.trim().length > 10) {
            addTodo(newTodo);
        }
    }

    return(
        <form onSubmit={handleSubmit} >
            <input onChange={TextChange} placeholder='Type a new todo...' type='text' className={`todo-input ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} />
            {message && <p>{message}</p>}
        </form>
    );
}

export default Form;
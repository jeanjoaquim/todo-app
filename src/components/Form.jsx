import { useContext, useState } from 'react';
import TodoContext from "../context/TodoContext";

function Form() {

    const {NightMode, addTodo, todoData} = useContext(TodoContext);
    const [message, setMessage] = useState('');
    const [todoText, setTodoText] = useState('');

    //Check if the new todo has at least 10 characters
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

    //Add new todo
    const handleSubmit = (e) => {
        e.preventDefault();

        //Double check if there's more than 10 characters
        if(todoText.trim().length > 10) {
            const newTodo = {
                id: todoData.length + 1,
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
            {message && <p style={{color:'#cccee7', marginTop: '.5rem'}}>{message}</p>}
        </form>
    );
}

export default Form;
import { useContext } from 'react';
import TodoContext from "../context/TodoContext";

function Form({ nightMode }) {

    const {NightMode} = useContext(TodoContext);

    return(
        <form>
            <input type='text' className={`todo-input ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} />
        </form>
    );
}

export default Form;
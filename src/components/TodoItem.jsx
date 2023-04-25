import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import DeleteIcon from '../images/icon-cross.svg';

function TodoItem({ item }) {

    const {deleteItem, NightMode} = useContext(TodoContext);

    return(
        <li draggable='true' className={`todo-item ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
            <label className={`custom-checkbox ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                <input type='checkbox' />
                <div className="custom-checkmark"></div>
                <div className={`custom-checkmark-background ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
            </label>
            <p>{item.description}</p>
            <img onClick={() => deleteItem(item.id)} src={DeleteIcon} alt="" className="delete-icon" />
        </li>
    );
}

export default TodoItem;
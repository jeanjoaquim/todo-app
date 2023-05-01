import { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';
import DeleteIcon from '../images/icon-cross.svg';

function TodoItem({ item }) {

    const {deleteItem, NightMode} = useContext(TodoContext);
    const [check, setCheck] = useState(false);

    const teste = (e) => {
        if(e.target.checked) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }

    return(
        <li draggable='true' className={`todo-item ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
            <label className={`custom-checkbox ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                <input onClick={teste} type='checkbox' className='checkbox'/>
                <div className="custom-checkmark"></div>
                <div className={`custom-checkmark-background ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
            </label>
            <p className='item-name' style={{
                textDecoration: `${check ? `line-through` : `none`}`,
                opacity: `${check ? .5 : 1}`
            }}>{item.description}</p>
            <img onClick={() => deleteItem(item.id)} src={DeleteIcon} alt="" className="delete-icon" />
        </li>
    );
}

export default TodoItem;
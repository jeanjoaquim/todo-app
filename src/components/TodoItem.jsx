import { useContext, useEffect, useState } from 'react';
import TodoContext from '../context/TodoContext';
import DeleteIcon from '../images/icon-cross.svg';

function TodoItem({ item }) {

    const {howMany, deleteItem, NightMode} = useContext(TodoContext);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        if(item.status === 'completed') {
            setCheck(true);
        } else if (item.status === 'active') {
            setCheck(false);
        }
    }, [])

    const handledCheckedItems = (e) => {
        if(e.target.checked === true) {
            setCheck(true);
            item.status = 'completed';
        } else {
            setCheck(false);
            item.status = 'active';
        }
        howMany();
    }

    return(
        <li draggable='true' className={`todo-item ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
            <label className={`custom-checkbox ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                <input checked={check} onClick={handledCheckedItems} type='checkbox' className='checkbox'/>
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
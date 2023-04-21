import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import DeleteIcon from '../images/icon-cross.svg';

function TodoList() {

    const {NightMode} = useContext(TodoContext);

    return(
        <section>
            <ul className={`todo-list ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                <div className="todo-container">
                    {/* Delete the following code and create an item component later */}
                    <li draggable='true' className={`todo-item ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                        <label className={`custom-checkbox ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                            <input type='checkbox' />
                            <div className="custom-checkmark"></div>
                            <div className={`custom-checkmark-background ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
                        </label>
                        <p>item 1</p>
                        <img src={DeleteIcon} alt="" className="delete-icon" />
                    </li>
                    <li draggable='true' className={`todo-item ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                        <label className={`custom-checkbox ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                            <input type='checkbox' />
                            <div className="custom-checkmark"></div>
                            <div className={`custom-checkmark-background ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
                        </label>
                        <p>item 1</p>
                        <img src={DeleteIcon} alt="" className="delete-icon" />
                    </li>
                    <li draggable='true' className={`todo-item ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                        <label className={`custom-checkbox ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                            <input type='checkbox' />
                            <div className="custom-checkmark"></div>
                            <div className={`custom-checkmark-background ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
                        </label>
                        <p>item 1</p>
                        <img src={DeleteIcon} alt="" className="delete-icon" />
                    </li>
                </div>
                <li className={`todo-footer ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                    <p><span className='total-items'></span>Items left</p>
                    <nav className='filter'>
                        <a className='all selected'>All</a>
                        <a className='active'>Active</a>
                        <a className='complete'>Complete</a>
                    </nav>
                    <p className="clear-items">Clear Completed</p>
                </li>
            </ul>
        </section>
    );
}

export default TodoList;
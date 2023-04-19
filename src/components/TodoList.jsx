import DeleteIcon from '../images/icon-cross.svg';

function TodoList({ nightMode }) {
    return(
        <section>
            <ul className={`todo-list ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                <div className="todo-container">
                    {/* Delete the following code and create an item component later */}
                    <li draggable='true' className={`todo-item ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                        <label className={`custom-checkbox ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                            <input type='checkbox' />
                            <div className="custom-checkmark"></div>
                            <div className={`custom-checkmark-background ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
                        </label>
                        <p>item 1</p>
                        <img src={DeleteIcon} alt="" className="delete-icon" />
                    </li>
                    <li draggable='true' className={`todo-item ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                        <label className={`custom-checkbox ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                            <input type='checkbox' />
                            <div className="custom-checkmark"></div>
                            <div className={`custom-checkmark-background ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
                        </label>
                        <p>item 1</p>
                        <img src={DeleteIcon} alt="" className="delete-icon" />
                    </li>
                    <li draggable='true' className={`todo-item ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                        <label className={`custom-checkbox ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                            <input type='checkbox' />
                            <div className="custom-checkmark"></div>
                            <div className={`custom-checkmark-background ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`}></div>
                        </label>
                        <p>item 1</p>
                        <img src={DeleteIcon} alt="" className="delete-icon" />
                    </li>
                </div>
                <li className={`todo-footer ${nightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                    <p><span className='total-items'></span>Items left</p>
                    <nav className='filter'>
                        <a className='all selected'>All</a>
                        <a className='active'>All</a>
                        <a className='complete'>All</a>
                    </nav>
                    <p className="clear-items">Clear Completed</p>
                </li>
            </ul>
        </section>
    );
}

export default TodoList;
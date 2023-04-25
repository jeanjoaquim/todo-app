import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {

    const {todoData, NightMode} = useContext(TodoContext);

    return(
        <section>
            <ul className={`todo-list ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                <div className="todo-container">
                    {
                        todoData.map((item) => (
                            <TodoItem key={item.id} item={item} />
                        ))
                    }
                </div>
                <li className={`todo-footer ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                    <p><span className='total-items'></span>{todoData.length} Items left</p>
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
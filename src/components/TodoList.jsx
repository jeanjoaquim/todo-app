import { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {

    const {clearItems, itemsLeft, todoData, NightMode} = useContext(TodoContext);
    const [fillList, setFillList] = useState(todoData);


    const handleListContent = (e) => {
        if(e.target.className === 'active') {
            setFillList(
                todoData.filter((item) => (
                    item.status === 'active'
                ))
            )
        } else if(e.target.className === 'complete') {
            setFillList(
                todoData.filter((item) => (
                    item.status === 'completed'
                ))
            )
        } else {
            setFillList(todoData)
        }
    }

    return(
        <section>
            <ul className={`todo-list ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                <div className="todo-container">
                    {
                        fillList.map((item) => (
                            <TodoItem key={item.id} item={item} />
                        ))
                    }
                </div>
                <li className={`todo-footer ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                    <p><span className='total-items'></span>{itemsLeft} Items left</p>
                    <nav className='filter'>
                        <a onClick={handleListContent} className='all selected'>All</a>
                        <a onClick={handleListContent} className='active'>Active</a>
                        <a onClick={handleListContent} className='complete'>Complete</a>
                    </nav>
                    <p onClick={clearItems} className="clear-items">Clear Completed</p>
                </li>
            </ul>
        </section>
    );
}

export default TodoList;
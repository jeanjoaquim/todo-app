import { useContext, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {

    const {clearItems, itemsLeft, todoData, setTodoData, NightMode} = useContext(TodoContext);
    const [fillList, setFillList] = useState(todoData);

    const handleDragEnd = ({destination, source}) => {
        if(!destination) return;

        setFillList(reorder(fillList, source.index, destination.index));
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    useEffect(() => {
        setFillList(todoData);
    }, [todoData])

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

                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId='droppable'>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} >
                            {fillList.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        index={index}
                                        draggableId={item.id}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoItem key={item.id} item={item} /> 
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            }
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {/* <div className="todo-container">
                    {
                        fillList.map((item) => (
                            <TodoItem key={item.id} item={item} />
                        ))
                    }
                </div> */}
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
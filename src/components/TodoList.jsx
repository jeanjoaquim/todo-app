import { useContext, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

function FooterListItem(props) {
    const { item, active, onClick } = props;

    return(
        <li
            className={`${item} ${active ? 'selected' : ''}`}
            onClick={() => onClick(item)}
        >
            {item}
        </li>
    )
}

function TodoList() {

    const {clearItems, itemsLeft, todoData, setTodoData, NightMode} = useContext(TodoContext);
    const [fillList, setFillList] = useState(todoData);
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        if(item === 'active') {
            setFillList(
                todoData.filter((item) => (
                    item.status === 'active'
                ))
            )

        } else if(item === 'complete') {
            setFillList(
                todoData.filter((item) => (
                    item.status === 'completed'
                ))
            )
        } else {
            setFillList(todoData)
        }
        setActiveItem(item);
        console.log(item);
      }

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

    const handleListContent = (e, item) => {
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
        setActiveItem(e);
        console.log(item);
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
                    <ul className='filter'>
                    <FooterListItem
                        item="all"
                        active={activeItem === "all"}
                        onClick={handleItemClick}
                    />
                    <FooterListItem
                        item="active"
                        active={activeItem === "active"}
                        onClick={handleItemClick}
                    />
                    <FooterListItem
                        item="complete"
                        active={activeItem === "complete"}
                        onClick={handleItemClick}
                    />
                    </ul>
                    <p onClick={clearItems} className="clear-items">Clear Completed</p>
                </li>
            </ul>
        </section>
    );
}

export default TodoList;
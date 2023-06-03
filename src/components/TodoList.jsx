import { useContext, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

//Use props to toggle todo list
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
    //fillList filters the list visually without messing with the actual list
    const [fillList, setFillList] = useState(todoData);
    const [activeItem, setActiveItem] = useState(null);

    //Update the other list as well when adding a new todo
    useEffect(() => {
        setFillList(todoData);
    }, [todoData])

    //Toggle todo list
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
    }

    //Updates the order of the list when dropping an item
    const handleDragEnd = async ({destination, source}) => {
        if(!destination) return;

        setTodoData(reorder(todoData, source.index, destination.index));
    }

    //Reorder items after dropping an item
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
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
                                        draggableId={item.id.toString()}
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

                <li className={`todo-footer ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`} >
                    <p><span className='total-items'></span>{itemsLeft} Items left</p>
                    {/* Only for Desktop */}
                    <ul className='desktop-filter'>
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
            <ul className={`mobile-filter ${NightMode ? 'night-mode-active' : 'night-mode-disabled'}`}>
                {/* Only for Mobile */}
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
        </section>
    );
}

export default TodoList;
import { createContext, useState, useEffect } from 'react';
import TodoData from '../TodoData';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [NightMode, setNightMode] = useState(false);
    const [todoData, setTodoData] = useState(TodoData);
    const [itemsLeft, setItemsLeft] = useState(todoData.length);

    useEffect(() => {
        howMany();
    }, [])

    const howMany = () => {
        let cont = 0;
        todoData.forEach((item) => {
            if(item.status === 'completed') {
                cont++;
            }
        })
        setItemsLeft(todoData.length - cont);
    }

    const clearItems = () => {
        setTodoData(
            todoData.filter((item) => (
                item.status !== 'completed'
            ))
        )
    }

    const toggleNightMode = () => {
        if(NightMode === false) {
            setNightMode(true);
        } else {
            setNightMode(false);
        }
    }

    const addTodo = (newTodo) => {
        setTodoData([newTodo, ...TodoData]);
    }

    const deleteItem = (id) => {
        setTodoData(
            todoData.filter((item) => (
                item.id !== id
            ))
        )
    }

    return (
        <TodoContext.Provider
            value={{
                NightMode,
                todoData,
                itemsLeft,
                howMany,
                setTodoData,
                clearItems,
                toggleNightMode,
                addTodo,
                deleteItem
            }}
        >
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext;
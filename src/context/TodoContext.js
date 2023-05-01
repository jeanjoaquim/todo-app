import { createContext, useState, useEffect } from 'react';
import TodoData from '../TodoData';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [NightMode, setNightMode] = useState(false);
    const [todoData, setTodoData] = useState(TodoData);

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
        console.log(id);
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
import { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [NightMode, setNightMode] = useState(false);
    const [todoData, setTodoData] = useState([]);
    const [itemsLeft, setItemsLeft] = useState(todoData.length);

    useEffect(() => {
        countCompletedTodos();
    }, [])

    useEffect(() => {
        fetchTodos();
    }, [])

    //Get Todos
    const fetchTodos = () => {

        const data = JSON.parse(localStorage.getItem('todos'));

        let cont = 0;

        data.forEach(obj => {
            if(obj.status === 'completed') {
                cont++;
            }
        })
        setItemsLeft(data.length - cont);
        setTodoData(data);
    }

    //Count how many items left
    const countCompletedTodos = () => {
        let cont = 0;
        todoData.forEach((item) => {
            if(item.status === 'completed') {
                cont++;
            }
        })
        setItemsLeft(todoData.length - cont);
    }

    //Delete completed items
    const clearItems = () => {

        if(window.confirm("Are you sure you want to delete?")) {

            setTodoData(
                todoData.filter((item) => (
                    item.status !== 'completed'
                ))
            )

            const todos = JSON.parse(localStorage.getItem('todos'));
            const filtered = todos.filter(todo => todo.status !== 'completed');
            localStorage.setItem('todos', JSON.stringify(filtered));
        }
        
    }

    //Toggle Night Mode
    const toggleNightMode = () => {
        if(NightMode === false) {
            setNightMode(true);
        } else {
            setNightMode(false);
        }
    }

    //Add Todo
    const addTodo = (newTodo) => {
        setTodoData([newTodo, ...todoData]);
        localStorage.setItem('todos', JSON.stringify([newTodo, ...todoData]));
    }

    //Delete Todo
    const deleteItem = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {

            setTodoData(
                todoData.filter((item) => (
                    item.id !== id
                ))
            )
            
            const todos = JSON.parse(localStorage.getItem('todos'));
            const filtered = todos.filter(todo => todo.id !== id);
            localStorage.setItem('todos', JSON.stringify(filtered));
        }
        
    }

    return (
        <TodoContext.Provider
            value={{
                NightMode,
                todoData,
                itemsLeft,
                countCompletedTodos,
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
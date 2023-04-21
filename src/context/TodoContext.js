import { createContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [NightMode, setNightMode] = useState(false);

    const toggleNightMode = () => {
        if(NightMode === false) {
            setNightMode(true);
        } else {
            setNightMode(false);
        }
    } 

    return (
        <TodoContext.Provider
            value={{
                NightMode,
                toggleNightMode
            }}
        >
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext;
import React, { useContext } from 'react';
import { TodoProvider } from './context/TodoContext';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <TodoProvider>
            <App />
        </TodoProvider>
    </React.StrictMode>
, document.getElementById('root'));
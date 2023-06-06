import React from 'react';
import { TodoProvider } from './context/TodoContext';
import ReactDOM from 'react-dom';
import Test from './Test';


ReactDOM.render(
    <TodoProvider>
        <Test />
    </TodoProvider>
, document.getElementById('root'));
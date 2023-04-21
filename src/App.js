import { useState, useContext } from 'react';
import TodoContext from './context/TodoContext';
import NightIcon from './images/icon-moon.svg';
import DayIcon from './images/icon-sun.svg'
import BgDay from './images/bg-desktop-light.jpg';
import BgNight from './images/bg-desktop-dark.jpg';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './styles.css';

function App() {

    const {NightMode} = useContext(TodoContext);

    return(
        <div className='container'>
            <div className={`teste ${NightMode ? 'night-mode-active-darker' : 'night-mode-disabled'}`}></div>
            <img src={NightMode ? BgNight : BgDay} className='background-image night-mode-transition' alt='' />
            <Header nightIcon={NightIcon} dayIcon={DayIcon} />

            <main>
                <Form />
                <TodoList />
                <footer>
                    <p>Drag and drop to reorder list</p>
                </footer>
            </main>
        </div>

    );
}

export default App;
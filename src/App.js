import { useState } from 'react';
import NightIcon from './images/icon-moon.svg';
import DayIcon from './images/icon-sun.svg'
import BgDay from './images/bg-desktop-light.jpg';
import BgNight from './images/bg-desktop-dark.jpg';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './styles.css';

function App() {

    const [NightMode, setNightMode] = useState(false);

    return(
        <div class='container'>
            <img src={NightMode ? BgNight : BgDay} className='background-image night-mode-transition' alt='' />
            <Header nightMode={NightMode} nightIcon={NightIcon} dayIcon={DayIcon} />

            <main>
                <Form nightMode={NightMode} />
                <TodoList nightMode={NightMode} />
                <footer>
                    <p>Drag and drop to reorder list</p>
                </footer>
            </main>
        </div>

    );
}

export default App;
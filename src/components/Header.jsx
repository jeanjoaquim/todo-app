import { useContext } from 'react';
import NightIcon from '../images/icon-moon.svg';
import DayIcon from '../images/icon-sun.svg';
import TodoContext from '../context/TodoContext';

function Header() {

    const {NightMode, toggleNightMode} = useContext(TodoContext);

    return(
        <header>
            <h1 className="todo-title">todo</h1>
            <img onClick={() => toggleNightMode()} src={NightMode ? DayIcon : NightIcon} alt="" className="night-mode" />
        </header>
    );
}

export default Header;
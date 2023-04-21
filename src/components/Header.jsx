import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function Header({ nightMode, nightIcon, dayIcon }) {

    const {NightMode, toggleNightMode} = useContext(TodoContext);

    return(
        <header>
            <h1 className="todo-title">todo</h1>
            <img onClick={() => toggleNightMode()} src={NightMode ? dayIcon : nightIcon} alt="" className="night-mode night-mode-transition" />
        </header>
    );
}

export default Header;
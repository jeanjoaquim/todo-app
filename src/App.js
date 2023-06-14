import { useContext } from 'react';
import TodoContext from './context/TodoContext';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './styles.css';

function App() {

    const {NightMode} = useContext(TodoContext);

    return(
        <div className={`container ${NightMode ? 'night-mode-active-darker' : 'night-mode-disabled'}`}>
            {/* <div className={`bg-color ${NightMode ? 'night-mode-active-darker' : 'night-mode-disabled'}`}></div> */}
            <div className={`bg-image ${NightMode ? 'background-night' : 'background-day'}`} />

            <Header />

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
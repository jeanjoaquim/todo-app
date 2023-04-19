function Header({ nightMode, nightIcon, dayIcon }) {
    return(
        <header>
            <h1 className="todo-title">todo</h1>
            <img src={nightMode ? dayIcon : nightIcon} alt="" className="night-mode night-mode-transition" />
        </header>
    );
}

export default Header;
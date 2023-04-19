function Form({ nightMode }) {
    return(
        <form>
            <input type='text' className={nightMode ? 'night-mode-active' : 'night-mode-disabled'} />
        </form>
    );
}

export default Form;
import "./App.scss";
const App = () => {
    return (
        <section className="container">
            <div className="col-lg-6 px-5 py-3 mt-3 todo-container">
                <p className="todo-title my-2">Todo App</p>
                <div className="todo-form mt-3">
                    <input className="form-control" type="text" placeholder="Add your new todo"/>
                    <button className="btn btn-info"><i className="fas fa-plus"/></button>
                    {/* if update <button className="btn btn-info"><i className="far fa-edit"/></button> */}
                </div>
                <ul className="todo-list mt-3">
                    <li className="todo-empty" />
                    <li className="mb-2">
                        <span className="checkbox completed-checkbox"/>
                        <span className="todo-content completed-content">Buy a new gaming laptop</span>
                        <div className="todo-control-buttons">
                            <span><i className="far fa-edit" style={{color: "#3498db"}}/></span>
                            <span><i className="far fa-trash-alt" style={{color: "#e74c3c"}}/></span>
                        </div>
                    </li>
                    <li className="mb-2">
                        <span className="checkbox "/>
                        <span className="todo-content">Buy a new gaming laptop</span>
                        <div className="todo-control-buttons">
                            <span><i className="far fa-edit" style={{color: "#3498db"}}/></span>
                            <span><i className="far fa-trash-alt" style={{color: "#e74c3c"}}/></span>
                        </div>
                    </li>
                </ul>
                <div className="todo-info mt-3">
                    <p className="d-none d-sm-block">You have 1 pending tasks</p>
                    <button className="btn btn-danger">Clear All</button>
                </div>
            </div>
        </section>
    )
}

export default App;

function Todos(props) {
    const { todos } = props;
    return (
        <div>
            {todos.map(todo => {
                return (
                    <div>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <button>
                            {todo.completed == true
                                ? "Completed"
                                : "Mark as Completed"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Todos;

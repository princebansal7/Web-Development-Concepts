/* eslint-disable react/prop-types */
function Todos(props) {
    const { todos } = props;
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <button>
                            {todo.completed ? "Completed" : "Mark as Completed"}
                        </button>
                        <br />
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default Todos;


interface TodoProp {
  title: string,
  description: string,
  completed: boolean
}

function App() {
  return (
    <>
      <Todo title="Buy Milk" description="2 L milk" completed={false} />
      <Todo title="Buy Bread" description="2 pkt Brown bread" completed={false} />
      <Todo title="Buy broccoli" description="2 kg broccoli" completed={false} />
    </>
  )
}

function Todo(props: TodoProp) {
  return <>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    <h3>{props.completed}</h3>
  </>
}

export default App

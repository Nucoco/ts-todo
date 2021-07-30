import { VFC, useState } from 'react';
import { TodoList, NewTodo } from './components'
import { Todo } from './todo.model'

const App: VFC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandler = (text: Todo["text"]) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }])
  }

  const todoDeleteHandler = (todoId: Todo["id"]) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;

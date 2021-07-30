import { VFC } from 'react'
import './TodoList.css'

interface TodoListProps {
	items: { id: string; text: string; }[];
	onDeleteTodo: (id: string) => void
}

// const TodoList: VFC<{items: { id: string; text: string; }[]}> = (props) => {return;}
const TodoList: VFC<TodoListProps> = (props) => {
	return (
		<ul>
			{props.items.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button onClick={props.onDeleteTodo.bind(null, todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList

import React from "react"

function TodoItem({ todo, markAsCompleted, deleteTodo }) {
	const completedTodoStyling = {
		textDecoration: "line-through",
		fontStyle: "italic",
	}
	return (
		<div className="todo-item">
			<div
				className="text"
				onClick={() => {
					markAsCompleted(todo.id)
				}}
				style={todo.completed ? completedTodoStyling : null}
			>
				{todo.item}
			</div>

			<button
				onClick={() => {
					deleteTodo(todo.id)
				}}
			>
				Delete
			</button>
		</div>
	)
}

export default TodoItem

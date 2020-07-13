import React from "react"

function TodoItem({ todo }) {
	return (
		<div>
			{todo.item} <button>Delete</button>
		</div>
	)
}

export default TodoItem

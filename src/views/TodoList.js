import React, { Component } from "react"
import AddTodo from "../components/AddTodo"
import TodoItem from "../components/TodoItem"

class TodoList extends Component {
	constructor() {
		super()
		this.state = {
			todoList: [],
		}
		this.updateTodoList = this.updateTodoList.bind(this)
	}

	updateTodoList(todo) {
		// console.log("object", todo)
		this.setState(prevState => {
			const todoList = [...prevState.todoList]
			// console.log(todoList)
			todoList.push(todo)
			return {
				todoList,
			}
		})
	}

	render() {
		return (
			<div>
				<div>
					<AddTodo updateTodos={this.updateTodoList} />
				</div>

				<div>
					{this.state.todoList.map((todo, index) => {
						return <TodoItem key={index} todo={todo} />
					})}
				</div>
			</div>
		)
	}
}

export default TodoList

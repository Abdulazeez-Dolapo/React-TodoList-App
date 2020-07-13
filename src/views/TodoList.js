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
		this.markAsCompleted = this.markAsCompleted.bind(this)
		this.deleteTodo = this.deleteTodo.bind(this)
	}

	updateTodoList(todo) {
		this.setState(prevState => {
			const todoList = [...prevState.todoList]
			todoList.push(todo)
			return {
				todoList,
			}
		})
	}

	markAsCompleted(id) {
		const todoList = this.state.todoList.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		})
		this.setState({
			todoList,
		})
	}

	deleteTodo(id) {
		const todoList = this.state.todoList.filter(todo => todo.id !== id)
		this.setState({
			todoList,
		})
	}

	render() {
		const todo = this.state.todoList.map((todo, index) => (
			<TodoItem
				markAsCompleted={this.markAsCompleted}
				deleteTodo={this.deleteTodo}
				key={index}
				todo={todo}
			/>
		))

		return (
			<div>
				<div>
					<AddTodo updateTodos={this.updateTodoList} />
				</div>

				<div>{todo}</div>
			</div>
		)
	}
}

export default TodoList

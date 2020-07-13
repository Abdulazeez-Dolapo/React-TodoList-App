import React, { Component } from "react"

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todo: "",
			error: false,
			errorMessage: "",
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
		this.checkErrors = this.checkErrors.bind(this)
	}

	handleInput(e) {
		const value = e.target.value
		this.setState({
			todo: value,
		})
	}

	checkErrors() {
		if (this.state.todo.trim().length < 5) {
			this.setState({
				error: true,
				errorMessage: "A todo should not contain less than 5 characters",
			})
			return true
		} else {
			this.setState({
				error: false,
				errorMessage: "",
			})
			return false
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		if (this.checkErrors()) return
		const id = Math.random().toString(16).slice(2)
		const todo = {
			item: this.state.todo,
			completed: false,
			id,
		}

		this.setState({
			todo: "",
			error: false,
			errorMessage: "",
		})
		this.props.updateTodos(todo)
	}

	render() {
		return (
			<div className="add-todo-item">
				<form onSubmit={this.handleSubmit}>
					<label>Add Todo</label>
					<input
						value={this.state.todo}
						placeholder="e.g build a react portofolio site"
						onChange={this.handleInput}
					/>

					<button className="add">Add</button>
				</form>
				<p className="error">
					{this.state.error && this.state.errorMessage}
				</p>
			</div>
		)
	}
}

export default AddTodo

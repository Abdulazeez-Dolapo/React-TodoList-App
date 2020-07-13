import React, { Component } from "react"

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todo: "",
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleInput = this.handleInput.bind(this)
	}

	handleInput(e) {
		const value = e.target.value
		this.setState({
			todo: value,
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		const id = Math.random().toString(16).slice(2)
		const todo = {
			item: this.state.todo,
			completed: false,
			id,
		}

		this.setState({
			todo: "",
		})
		this.props.updateTodos(todo)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Add Todo
						<input
							value={this.state.todo}
							placeholder="Learn React"
							onChange={this.handleInput}
						/>
					</label>

					<button>Add</button>
				</form>
			</div>
		)
	}
}

export default AddTodo

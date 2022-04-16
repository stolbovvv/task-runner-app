import { Component } from 'react';
import './task-add-form.css';

class TaskAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	changeName = (e) => {
		this.setState({ name: e.target.value });
	};

	submitTask = (e) => {
		e.preventDefault();

		this.props.onSubmitTask(this.state.name);
		this.setState({ name: '' });
	};

	render() {
		const { name } = this.state;

		return (
			<form className="task-add-form" onSubmit={this.submitTask}>
				<div className="task-add-form__input-name">
					<input
						type="text"
						placeholder="Add new task"
						name="name"
						value={name}
						onInput={(e) => {
							this.changeName(e);
						}}
					/>
					<i className="bx bxs-plus-square"></i>
				</div>
				<div className="task-add-form__buttons">
					<button className="btn" type="submit" data-type="base">
						Add
					</button>
				</div>
			</form>
		);
	}
}

export default TaskAddForm;

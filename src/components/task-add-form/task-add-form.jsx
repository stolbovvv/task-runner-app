import { Component } from 'react';
import './task-add-form.css';

class TaskAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			error: false,
		};
	}

	changeName = (e) => {
		if (!e.target.value.length) this.setState({ error: false });
		if (e.target.value.length >= 3) this.setState({ error: false });

		this.setState({ name: e.target.value });
	};

	submitTask = (e) => {
		e.preventDefault();

		if (this.state.name.length < 3) {
			this.setState({ error: true });
		} else {
			this.props.onSubmitTask(this.state.name);
			this.setState({ name: '' });
		}
	};

	render() {
		const { name, error } = this.state;

		return (
			<>
				<form className="task-add-form" onSubmit={this.submitTask} data-error={error}>
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
				<div className="form-error-message" data-error={error}>
					<i className="bx bxs-error"></i>
					<span>Error: The task title is too short. Please enter at least 3 characters!</span>
				</div>
			</>
		);
	}
}

export default TaskAddForm;

import TaskItem from '../task-item/task-item';
import './task-list.css';

const TaskList = ({ tasks, filter, onDeleteTask, onCompletedTask, onMakeTaskImportant }) => {
	if (tasks.length) {
		const list = tasks.map((item) => {
			const { id, ...data } = item;
			return (
				<TaskItem
					key={id}
					{...data}
					onDeleteTask={() => {
						onDeleteTask(id);
					}}
					onCompletedTask={() => {
						onCompletedTask(id);
					}}
					onMakeTaskImportant={() => {
						onMakeTaskImportant(id);
					}}
				/>
			);
		});

		return <ul className="task-list">{list}</ul>;
	} else {
		const type = filter.type === 'all' ? null : filter.type;
		const term = filter.terms.length ? `named: «${filter.terms}»` : null;

		return (
			<div className="task-list-message">
				<span>¯\_(ツ)_/¯</span>
				<span>
					You don't have {type} tasks {term}
				</span>
			</div>
		);
	}
};

export default TaskList;

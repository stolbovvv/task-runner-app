import './task-item.css';

const TaskItem = ({ name, isCompleted, isImportant, onDeleteTask, onCompletedTask, onMakeTaskImportant }) => {
	let type = 'default';

	if (isCompleted) {
		type = 'completed';
	} else if (isImportant) {
		type = 'important';
	} else {
		type = 'default';
	}

	return (
		<li className="task-item" data-type={type}>
			<label className="task-item__label">
				<input className="bx" type="checkbox" checked={isCompleted} onChange={onCompletedTask} />
				<span>{name}</span>
			</label>
			<button className="bx btn-icon" data-type="star" onClick={onMakeTaskImportant}></button>
			<button className="bx btn-icon" data-type="trash" onClick={onDeleteTask}></button>
		</li>
	);
};

export default TaskItem;

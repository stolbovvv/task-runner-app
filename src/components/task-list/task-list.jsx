import TaskItem from '../task-item/task-item';
import './task-list.css';

const TaskList = ({ tasks, onDeleteTask, onCompleteTask, onMakeTaskImportant }) => {
	const tasksList = tasks.map((item) => {
		const { id, ...data } = item;

		return (
			<TaskItem
				key={id}
				{...data}
				onDeleteTask={() => {
					onDeleteTask(id);
				}}
				onCompleteTask={() => {
					onCompleteTask(id);
				}}
				onMakeTaskImportant={() => {
					onMakeTaskImportant(id);
				}}
			/>
		);
	});

	return <ul className="task-list">{tasksList}</ul>;
};

export default TaskList;

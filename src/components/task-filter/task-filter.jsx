import './task-filter.css';

const TaskFilter = (props) => {
	const { filter, onSelectFilter, onInputTerms } = props;

	const buttonData = [
		{ id: 1, name: 'all' },
		{ id: 2, name: 'active' },
		{ id: 3, name: 'completed' },
	];

	const buttons = buttonData.map((item) => {
		const type = item.name === filter.type ? 'current' : 'base';

		return (
			<button
				key={item.id}
				className="btn"
				name={item.name}
				data-type={type}
				onClick={(e) => {
					onSelectFilter(e);
				}}>
				{item.name}
			</button>
		);
	});

	return (
		<div className="task-filter">
			<div className="task-filter__search">
				<input
					type="text"
					value={filter.terms}
					onInput={(e) => onInputTerms(e)}
					placeholder="Find a task and/or filter them"
				/>
				<i className="bx bx-search"></i>
			</div>
			<div className="task-filter__buttons">{buttons}</div>
		</div>
	);
};

export default TaskFilter;

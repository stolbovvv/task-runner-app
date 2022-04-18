import './app-header.css';

const AppHeader = (props) => {
	let numToDoTasks = 0;
	let numDoneTasks = 0;

	props.data.forEach((item) => {
		if (item.isCompleted) {
			numDoneTasks += 1;
		} else {
			numToDoTasks += 1;
		}
	});

	return (
		<header className="app-header">
			<div className="app-header__logo logo">
				<i className="bx bx-task logo__icon"></i>
				<h1 className="logo__name">Task Runner</h1>
			</div>
			<span className="app-header__info app-header__info_blue">ToDo: {numToDoTasks}</span>
			<span className="app-header__info app-header__info_green">Done: {numDoneTasks}</span>
		</header>
	);
};

export default AppHeader;

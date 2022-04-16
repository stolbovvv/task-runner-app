import './app.css';
import { Component } from 'react';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import TaskFilter from '../task-filter/task-filter';
import TaskList from '../task-list/task-list';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ id: 1, name: 'Repeat material', isComplete: true, isImportant: false },
				{ id: 2, name: 'Create app design', isComplete: true, isImportant: false },
				{ id: 3, name: 'Create application', isComplete: false, isImportant: true },
				{ id: 4, name: 'Check application', isComplete: false, isImportant: false },
			],
			filter: {
				type: 'all',
				terms: '',
			},
		};
	}

	completeTask = (id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, isComplete: !item.isComplete };
				}
				return item;
			}),
		}));
	};

	makeTaskImportant = (id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, isImportant: !item.isImportant };
				}
				return item;
			}),
		}));
	};

	deleteTask = (id) => {
		this.setState(({ data }) => ({
			data: data.filter((item) => {
				return item.id !== id;
			}),
		}));
	};

	changeTerms = (e) => {
		this.setState(({ filter }) => ({ filter: { ...filter, terms: e.target.value } }));
	};

	changeFilter = (e) => {
		this.setState(({ filter }) => ({ filter: { ...filter, type: e.target.name } }));
	};

	filterByType(list, type) {
		switch (type) {
			case 'active':
				return list.filter((item) => {
					return !item.isComplete;
				});

			case 'complete':
				return list.filter((item) => {
					return item.isComplete;
				});

			default:
				return list;
		}
	}

	filterByTerms(list, property, terms) {
		return list.filter((item) => {
			return item[property].toLowerCase().incgludes(terms.toLowerCase());
		});
	}

	render() {
		const { data, filter } = this.state;

		const tasks = this.filterByTerms(this.filterByType(data, filter.type), 'name', filter.terms);

		return (
			<div className="app">
				<div className="app-container flow">
					<AppHeader data={data} />
					<div className="app-divider"></div>
					<TaskFilter filter={filter} onChangeTerms={this.changeTerms} onChangeFilter={this.changeFilter} />
					<div className="app-divider"></div>
					<TaskList
						tasks={tasks}
						onDeleteTask={this.deleteTask}
						onCompleteTask={this.completeTask}
						onMakeTaskImportant={this.makeTaskImportant}
					/>
					<div className="app-divider"></div>
					<div className="app-divider"></div>
					<AppFooter />
				</div>
			</div>
		);
	}
}

export default App;

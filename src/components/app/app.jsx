import './app.css';
import { Component } from 'react';
import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import TaskFilter from '../task-filter/task-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-form/task-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last: 5,
      data: [
        { id: 1, name: 'Repeat material', isCompleted: true, isImportant: false },
        { id: 2, name: 'Create app design', isCompleted: true, isImportant: false },
        { id: 3, name: 'Create application', isCompleted: false, isImportant: true },
        { id: 4, name: 'Check application', isCompleted: false, isImportant: false },
      ],
      filter: {
        type: 'all',
        terms: '',
      },
    };
  }

  addTask = (name) => {
    const task = {
      id: this.state.last,
      name: name,
      isCompleted: false,
      isImportant: false,
    };

    this.setState(({ data, last }) => ({
      last: (last += 1),
      data: [...data, task],
    }));
  };

  completedTask = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
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
          return !item.isCompleted;
        });

      case 'completed':
        return list.filter((item) => {
          return item.isCompleted;
        });

      default:
        return list;
    }
  }

  filterByTerms(list, property, terms) {
    return list.filter((item) => {
      return item[property].toLowerCase().includes(terms.toLowerCase());
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
          <TaskFilter filter={filter} onInputTerms={this.changeTerms} onSelectFilter={this.changeFilter} />
          <div className="app-divider"></div>
          <TaskList
            tasks={tasks}
            filter={filter}
            onDeleteTask={this.deleteTask}
            onCompletedTask={this.completedTask}
            onMakeTaskImportant={this.makeTaskImportant}
          />
          <div className="app-divider"></div>
          <TaskAddForm onSubmitTask={this.addTask} />
          <div className="app-divider"></div>
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default App;

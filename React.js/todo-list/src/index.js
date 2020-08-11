import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';

import "./index.css";

const App = () =>
{
    const isLoggedIn = true;
    const welcomeBox = "Welcome Back";
    const loginBox = "Login, please.";
    const todoData =
    [
        { label: 'Drink coffee', important: false, id: 'nb' },
        { label: 'Make Awesome App', important: true, id: 'nm' },
        { label: 'Have a lunch', important: false, id: 'nh' }
    ]

    return(
        <div className="todo-app">
            <p>{ new Date().toString() }</p>
            { isLoggedIn ? welcomeBox : loginBox }
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData } />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
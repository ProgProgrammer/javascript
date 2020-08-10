import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

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
        <div>
            <p>{ new Date().toString() }</p>
            { isLoggedIn ? welcomeBox : loginBox }
            <AppHeader />
            <SearchPanel />
            <TodoList todos={ todoData } />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
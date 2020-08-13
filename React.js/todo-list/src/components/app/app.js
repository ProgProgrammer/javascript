import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

import "./app.css";

export default class App extends Component
{
    isLoggedIn = true;
    welcomeBox = "Welcome Back";
    loginBox = "Login, please.";

    state =
    {
        todoData:
        [
            { label: 'Drink coffee', id: 'nb' },
            { label: 'Make Awesome App', id: 'nm' },
            { label: 'Have a lunch', id: 'nh' }
        ]
    };

    deleteItem = (id) =>
    {
        this.setState(({ todoData }) =>
        {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    }

    render()
    {
        return(
            <div className="todo-app">
                <p>{ new Date().toString() }</p>
                { this.isLoggedIn ? this.welcomeBox : this.loginBox }
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={ this.state.todoData }
                    onDeleted={  this.deleteItem }/>
            </div>
        );
    }
}
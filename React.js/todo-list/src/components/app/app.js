import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

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

    checkItem = (idMath) =>
    {
        this.state.todoData.map((item) =>
        {
            const { id } = item;
            if (idMath === id)
            {
                return false;
            }
        });
        return true;
    }

    addItem = (text) =>
    {
        let idMath = `${Math.random()}n`;
        let result = this.checkItem(idMath);

        if (result === false)
        {
            idMath = `${Math.random()}n`;
            result = this.checkItem(idMath);
            console.log(idMath);
        }
        else
        {
            const newItem = {
                label: text,
                id: idMath
            }
            console.log(idMath);
            this.setState(( { todoData } ) =>
            {
                const newArray = [...todoData, newItem];
                console.log(newArray);
                return {
                    todoData: newArray
                };
            });
        }
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
                <ItemAddForm
                    onAdded={ this.addItem }/>
            </div>
        );
    }
}
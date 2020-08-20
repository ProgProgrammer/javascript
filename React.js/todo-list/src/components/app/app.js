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
            this.createTodoItem('Drink coffee', 'nb'),
            this.createTodoItem('Make Awesome App', 'nm'),
            this.createTodoItem('Have a lunch', 'nh')
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

    createTodoItem(label, idMath, displayProperty=true, activeDoneProperty=true)
    {
        return {
            label: label,
            important: false,
            done: false,
            display: displayProperty,
            activeDone: activeDoneProperty,
            id: idMath
        }
    }

    addItem = (text) =>
    {
        let idMath = `${Math.random()}n`;
        let result = this.checkItem(idMath);

        if (result === false)
        {
            idMath = `${Math.random()}n`;
            result = this.checkItem(idMath);
        }
        else
        {
            const newItem = this.createTodoItem(text, idMath);

            this.setState(( { todoData } ) =>
            {
                const newArray = [...todoData, newItem];

                return {
                    todoData: newArray
                };
            });
        }
    }

    toggleProperty(array, id, propName)
    {
            const idx = array.findIndex((el) => el.id === id);

            const oldItem = array[idx];

            const newItem = { ...oldItem, [propName]: !oldItem[propName] };

            return [
                ...array.slice(0, idx),
                newItem,
                ...array.slice(idx + 1)
            ];
    }

    onToggleDone = (id) =>
    {
        this.setState(( { todoData } ) =>
        {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }

    onToggleImportant = (id) =>
    {
        this.setState(( { todoData } ) =>
        {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    }

    checkArray = (property, array) =>
    {
        for (let a = 0; a < array.length; a++)
        {
            if (array[a] === property)
            {
                return true;
            }
        }
    }

    changeSearch = (array, arrayFalse, propertyName) =>
    {
        let newItem;
        let newArray = [];
        for (let i = 0; i < array.length; i++)
        {
            if (this.checkArray(i, arrayFalse) === true) {
                newItem = {...array[i], [propertyName]: false};
            }
            else
            {
                newItem = {...array[i], [propertyName]: true};
            }

            if (newArray.length > 0)
            {
                newArray = [
                    ...newArray.slice(0, i),
                    newItem,
                    ...newArray.slice(i + 1)
                ];
            }
            else
            {
                newArray = [
                    ...array.slice(0, i),
                    newItem,
                    ...array.slice(i + 1)
                ];
            }
        }

        return newArray;
    }

    onSearchItem = (text) =>
    {
        let counter = 0;
        const newArray = [];
        this.setState(( { todoData } ) =>
        {
            const array = this.state.todoData;
            for (let a = 0; a < array.length; a++)
            {
                const label = array[a].label;
                const regexp = new RegExp(text, 'gi');
                if (regexp.test(label) === false && text !== '')
                {
                    newArray[counter] = a;
                    counter++;
                }
            }
            return {
                todoData: this.changeSearch(todoData, newArray, 'display')
            };
        });
    }

    changeActiveDone = (todoData, value) =>
    {
        const array = todoData;
        const newArray = [];
        for (let i = 0; i < array.length; i++)
        {
            if (value === 'all' && array[i].activeDone !== true)
            {
                newArray[i] = { ...array[i], 'activeDone': true };
            }
            else if (value === 'active' && array[i].done === true)
            {
                newArray[i] = { ...array[i], 'activeDone': false };
            }
            else if (value === 'done' && array[i].done === false)
            {
                newArray[i] = { ...array[i], 'activeDone': false };
            }
            else
            {
                newArray[i] = { ...array[i], 'activeDone': true };
            }
        }
        return newArray;
    }

    onActiveDone = (value) =>
    {
        this.setState(( { todoData } ) =>
        {
            return {
                todoData: this.changeActiveDone(todoData, value)
            }
        });
    }

    render()
    {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="todo-app">
                <p>{ new Date().toString() }</p>
                { this.isLoggedIn ? this.welcomeBox : this.loginBox }
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchItem={ this.onSearchItem } />
                    <ItemStatusFilter
                        onActiveDone={ this.onActiveDone } />
                </div>
                <TodoList
                    todos={ todoData }
                    onDeleted={  this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }/>
                <ItemAddForm
                    onAdded={ this.addItem }/>
            </div>
        );
    }
}
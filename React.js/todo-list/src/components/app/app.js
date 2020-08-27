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
        ],
        term: '',
        filter: 'all'
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

    createTodoItem(label, idMath)
    {
        return {
            label: label,
            important: false,
            done: false,
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

    onSearchChange = (term) =>
    {
        this.setState({ term });
    }

    onFilterChange = (filter) =>
    {
        this.setState({ filter });
    }

    search(items, term)
    {
        if (term.length === 0)
        {
            return items;
        }
        return items.filter((items) =>
        {
            return items.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, value)
    {
        if (value === 'all')
        {
            return items;
        }
        else if (value === 'active')
        {
            return items.filter((item) => !item.done);
        }
        else if (value === 'done')
        {
            return items.filter((item) => item.done);
        }
        else
        {
            return items;
        }
    }

    render()
    {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="todo-app">
                <p>{ new Date().toString() }</p>
                { this.isLoggedIn ? this.welcomeBox : this.loginBox }
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={ this.onSearchChange } />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={ this.onFilterChange } />
                </div>
                <TodoList
                    todos={ visibleItems }
                    onDeleted={  this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }/>
                <ItemAddForm
                    onAdded={ this.addItem }/>
            </div>
        );
    }
}
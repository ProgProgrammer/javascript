import React, { Component } from 'react';

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component
{
    activeClassName = 'btn btn-info';
    defaultClassName = 'btn btn-outline-secondary';

    stateButton =
    {
        all: this.activeClassName,
        active: this.defaultClassName,
        done: this.defaultClassName
    }

    defaultClass()
    {
        for (let variable in this.stateButton)
        {
            if (this.stateButton[variable] === this.activeClassName)
            {
                    this.stateButton[variable] = this.defaultClassName
            }
        }
    }

    onActiveDone(value)
    {
        this.props.onActiveDone(value);
        if (value === 'all')
        {
            this.defaultClass();
            this.stateButton.all = this.activeClassName;
        }
        else if (value === 'active')
        {
            this.defaultClass();
            this.stateButton.active =  this.activeClassName;
        }
        else if (value === 'done')
        {
            this.defaultClass();
            this.stateButton.done =  this.activeClassName;
        }
    }

    render()
    {
        return(
            <div className="btn-group">
                <button className={ this.stateButton.all }
                        onClick={ () => this.onActiveDone('all') }>All</button>
                <button className={ this.stateButton.active }
                        onClick={ () => this.onActiveDone('active') }>Active</button>
                <button className={ this.stateButton.done }
                        onClick={ () => this.onActiveDone('done') }>Done</button>
            </div>
        );
    }
}
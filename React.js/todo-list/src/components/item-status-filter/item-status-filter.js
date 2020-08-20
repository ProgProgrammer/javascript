import React, { Component } from 'react';

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component
{
    onActiveDone(value)
    {
        this.props.onActiveDone(value);
    }

    render()
    {
        return(
            <div className="btn-group">
                <button className="btn btn-info"
                        onClick={ () => this.onActiveDone('all') }>All</button>
                <button className="btn btn-outline-secondary"
                        onClick={ () => this.onActiveDone('active') }>Active</button>
                <button className="btn btn-outline-secondary"
                        onClick={ () => this.onActiveDone('done') }>Done</button>
            </div>
        );
    }
}
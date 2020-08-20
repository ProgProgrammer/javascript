import React, { Component } from 'react';

import "./item-add-form.css";

export default class ItemPropsForm extends Component
{
    state =
    {
        label: ''
    };

    onLabelChange = (event) =>
    {
        this.setState(
        {
            label: event.target.value
        });
    }

    onSubmit = (event) =>
    {
        event.preventDefault();
        if (this.state.label !== '')
        {
            this.props.onAdded(this.state.label);
        }
        this.setState(
        {
            label: ''
        });
    }

    render()
    {
        return(
            <form className="block-button item-add-form d-flex"
                  onSubmit={ this.onSubmit } >
                <input type="text" className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done"
                        value={this.state.label} />
                <button className="add-button">Add item</button>
            </form>
        );
    }
}

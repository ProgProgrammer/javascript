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
        this.props.onAdded(this.state.label);
        const inputText = document.querySelector(".form-control");
        inputText.value = '';
    }

    render()
    {
        return(
            <form className="block-button item-add-form d-flex"
                  onSubmit={ this.onSubmit } >
                <input type="text" className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done"/>
                <button className="add-button">Add item</button>
            </form>
        );
    }
}

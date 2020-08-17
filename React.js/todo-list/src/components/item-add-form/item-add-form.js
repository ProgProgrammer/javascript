import React, { Component } from 'react';

import "./item-add-form.css";

export default class ItemPropsForm extends Component
{
    render()
    {
        return(
            <div className="block-button">
                <button className="add-button"
                        onClick={ () => this.props.onAdded("Hello, world!") }
                >Add item</button>
            </div>
        );
    }
}

import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component
{
    state =
    {
        term: ''
    }

    searchText = 'Type here to search';
    searchStyle = {
        fontSize: '16px'
    };

    onSearchChange = (event) =>
    {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render()
    {
        return(
            <input type="text" className="search-input" style={ this.searchStyle }
                   placeholder={ this.searchText } autoComplete="Hello"
                   value={ this.state.term }
                   onChange={ this.onSearchChange }/>
        );
    }
}
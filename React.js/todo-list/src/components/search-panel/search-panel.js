import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component
{
    searchText = 'Type here to search';
    searchStyle = {
        fontSize: '16px'
    };

    onSearchItem = () =>
    {
        const inputSearch = document.querySelector(".search-input");
        this.props.onSearchItem(inputSearch.value);
    }

    render()
    {
        return(
            <input type="text" className="search-input" style={ this.searchStyle } placeholder={ this.searchText } autoComplete="Hello"
                   onChange={ this.onSearchItem }/>
        );
    }
}
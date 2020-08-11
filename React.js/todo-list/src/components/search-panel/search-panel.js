import React from "react";

import "./search-panel.css";

const SearchPanel = () =>
{
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '16px'
    };

    return(
        <input type="text" className="search-input" style={ searchStyle } placeholder={ searchText } autoComplete="Hello" />
    );
}

export default SearchPanel;
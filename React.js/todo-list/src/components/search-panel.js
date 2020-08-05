import React from "react";

const SearchPanel = () =>
{
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return(
        <input type="text" className="search" style={ searchStyle } disabled placeholder={ searchText } autoComplete="Hello" />
    );
}

export default SearchPanel;
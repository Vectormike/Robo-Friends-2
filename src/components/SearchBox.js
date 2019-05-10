import React from 'react';

const SearchBox = ({searchChange, searchField}) => {
    return (
        <div> 
            <input
            className="br3 pa2 b bg-light-blue" 
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;  
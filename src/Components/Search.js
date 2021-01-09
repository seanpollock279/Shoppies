import React, { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSeachValue] = useState('');
    
    const handleSearchInputChanges =  (e) => {
        setSeachValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();        
    }

    return (
        <form>
            <input value={searchValue} onChange={handleSearchInputChanges} type='text' />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}

export default Search;
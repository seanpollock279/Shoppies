import React, { useState } from 'react';
import '@shopify/polaris/dist/styles.css';
import { AppProvider, Form, TextField, Button, Label, Autocomplete, Icon } from '@shopify/polaris';
import { SearchMinor } from '@shopify/polaris-icons';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');
    
    const handleSearchInputChanges =  (e) => {
        setSearchValue(e.target.value);
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
        <AppProvider>
            <Form>
                <input prefix={<Icon source={SearchMinor} color="inkLighter" />} value={searchValue} onChange={handleSearchInputChanges} type='text' />
                <Button onClick={callSearchFunction} type="submit">
                    <Label>Search</Label>
                </Button>
            </Form>
        </AppProvider>
    );
}

export default Search;
import React, { useState, useCallback } from "react";
import * as MaterialModule from '../../common/Material';
import * as _ from 'lodash'
import AudioSearchComponent from "./AudioSearch";
function SearchComponent(props) {
    const { SearchDataSendToParent } = props
    const [searchKey, setSearchKey] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSendToParent = useCallback(
        _.debounce((value) => {
            SearchDataSendToParent(value);
        }, 300, { 'leading': false, 'trailing': true }),
        []
    );

    const handleSearch = (e) => {
        const currentValue = e.target.value;
        setSearchKey(currentValue);
        debouncedSendToParent(currentValue);
    }


    return (
        <>
            <MaterialModule.Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <MaterialModule.IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <MaterialModule.SearchIcon />
                </MaterialModule.IconButton>
                <MaterialModule.TextField
                    sx={{ ml: 1, flex: 1 }}
                    variant="standard"
                    type="text"
                    label="Search ..."
                    value={searchKey}
                    onChange={handleSearch}
                    style={{ border: 'none' }}
                />
                <AudioSearchComponent />
            </MaterialModule.Paper>
        </>
    )
}
export default SearchComponent
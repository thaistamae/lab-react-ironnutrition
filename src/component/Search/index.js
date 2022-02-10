import React from 'react';
import {useState} from 'react';

export function Search ({search, setSearch}){
   
    function handleChange(event) {
        setSearch(event.target.value);
    }    
    
    return(
        <div>
        <input
            className="input search-bar"
            placeholder="Search" 
            name="search"
            value={search}
            type="text"
            onChange={handleChange}
        />
        </div>

    )

} 


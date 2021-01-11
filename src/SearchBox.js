import React from "react";


const SearchBox = ({searchChange}) => 
{
    return(
        <div className="pa2">
            <input onChange={searchChange} className="pa3 ba b--grenn bg-lightest-blue" type="search" placeholder="search robots"/>
        </div>
        
    );
};

export default SearchBox;
//import { Component } from "react";
import './search-box.styles.css';

// const SearchBox =(props)=>{      //way 01   
//         return (
//             <div>
//                 <input 
//                 className={`search-box ${props.className}`}
//                 type='search' 
//                 placeholder={props.placeholder}
//                 onChange={props.onChangeHandler}
//                 />
//             </div>
//         )};

const SearchBox =({className,placeholder,onChangeHandler})=>(   //way 02    
        <div>
            <input 
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
        </div>
);
export default SearchBox;
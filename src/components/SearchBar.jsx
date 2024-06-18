import React from "react";
import './styles/SearchBar.css';

function SearchBar() 
{
    const options = {hight: 'High skill jobs', demand: 'High demand Jobs', freeland: "Free Lance Jobs"}
    const optionsList = Object.keys(options);
    
    return (
        <article>
            <div className="option">
                {optionsList.map((item, index) => {
                    return <span key={index}>{options[item]}</span>
                })}
            </div>
            <hr/>

            <form>
                <input type="text" placeholder="Search Jobs"/>
                <input type="text" placeholder="Where?"/>
                <button type="submit" className="Search-Btn">Search</button>
            </form>
        </article>
    );
}


export default SearchBar;

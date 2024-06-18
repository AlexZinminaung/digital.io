import React from "react";
import './styles/Job.css';

function Job({imgSrc, name, salary, demand}) {
        return (
        <div className="container-job">
            <img src={imgSrc}
                alt={name}/>
            <span>{name}</span>
            <span>Average Salary - {salary}</span>
            <span>Demand - {demand} </span>
            <button>Read More</button>
        </div>
        

        );
}


export default Job;




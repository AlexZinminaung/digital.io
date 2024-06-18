import React from "react";
import Job from "./Job";
import data from "./list";
import "./styles/JobList.css";

function JobList() {
    return (
        <article className="container-JobList">
            {
            data.map((item, index) => {
                return <Job imgSrc={item.imgSrc} name={item.name} salary={item.salary} demand={item.demand} key={index}/>;
            })
            }
        </article>
    );

        6
}


export default JobList;
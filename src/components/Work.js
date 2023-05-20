import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";
import img5 from "../assets/img5.jpg"

import React from 'react';


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <WorkCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                );

            })}
            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="image"/>
                <h2 className="project-title">To-Do List App</h2>
                <div className="pro-details">
                    <p> Nec tincidunt praesent semper feugiat. Lectus sit amet 
                        est placerat in egestas erat. Ac turpis egestas sed 
                        tempus urna et pharetra pharetra.
                    </p>
                    <div className="pro-btns">
                        <NavLink to="{props.view}" className="view btn">View</NavLink>
                        <NavLink to="url.com" className=" source btn">Source</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src= {img5} alt="image5"/>
                <h2 className="project-title">Movie Search App</h2>
                <div className="pro-details">
                    <p>
                        Congue quisque egestas diam in arcu cursus. Justo donec
                         enim diam vulputate ut. 
                    </p>
                    <div className="pro-btns">
                        <NavLink to="{props.view}" className="view btn">View</NavLink>
                        <NavLink to="url.com" className="source btn">Source</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="image"/>
                <h2 className="project-title">Online Quiz App</h2>
                <div className="pro-details">
                    <p>
                        Ac odio tempor orci dapibus ultrices in iaculis. Aliquet 
                        nibh praesent tristique magna sit amet purus gravida.
                    </p> 
                    <div className="pro-btns">
                        <NavLink to="{props.view}" className="view btn">View</NavLink>
                        <NavLink to="url.com" className="source btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work

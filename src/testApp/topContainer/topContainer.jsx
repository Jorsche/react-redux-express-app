import React from 'react';
import NavBar from "./NavBar/NavBar";
import CenteredDiv from "./CenteredDiv/CenteredDiv";
import "./topContainer.css"
const TopContainer = () => {
    return (
        <div className={"topContainer"}>
        <NavBar/>
        <CenteredDiv/>
        </div>
    );
};

export default TopContainer;
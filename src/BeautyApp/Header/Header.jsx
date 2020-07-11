import React from 'react';
import './Header.css';
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo/Logo";
import FilterUser from "./FilterUser/FilterUser";

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <FilterUser/>
            <NavBar/>
            <div className="solid"></div>
        </div>
    );
}

Header.propTypes = {

};

export default Header;

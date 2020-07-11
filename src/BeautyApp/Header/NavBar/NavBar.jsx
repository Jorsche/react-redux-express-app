import React from 'react';
import './NavBar.css';
import {  Menu } from 'semantic-ui-react'
import {connect} from "react-redux";
import {toggleNavBar} from "../../../redux/actions";

const NavBar = ({setNavBarString}) => {
    return (
        <Menu secondary className="NavBar">
            <Menu.Item
                name='home'
                onClick={()=>{setNavBarString("home")}}
            />
            <Menu.Item
                name='messages'
                onClick={()=>{setNavBarString("messages")}}
            />
            <Menu.Item
                name='friends'
                onClick={()=>{setNavBarString("friends")}}
            />
            <Menu.Item
                name='logout'
                onClick={()=>{setNavBarString("logout")}}
            />
        </Menu>
    )
}

const mapDispatchToProps ={
    setNavBarString: toggleNavBar
};

export default connect(null,mapDispatchToProps)(NavBar);





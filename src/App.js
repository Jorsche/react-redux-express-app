import React from 'react';
import './App.css';
import Header from "./BeautyApp/Header/Header";
import Main from "./BeautyApp/Main/Main";
import {connect} from "react-redux";
import Logout from "./BeautyApp/Logout/Logout";
import Nav from "./Nav";
import StepExampleOrdered from "./testStep";
import FormExampleForm from "./testForm";
import TopContainer from "./testApp/topContainer/topContainer";
import BottomContainer from "./testApp/bottomContainer/bottomContainer";
import FootContainer from "./testApp/footerContainer/footContainer";


function App({page}) {
    return (
    <div className="App">
    <TopContainer/>
    <BottomContainer/>
    <FootContainer/>
    </div>
  );
}
const mapStateToProps =({navBarReducer})=>({
    page: navBarReducer.navBar
})
export default connect(mapStateToProps,null)(App);
;

//
// <div className="App">
//     <Header/>
//     {page=== "home" && <Main/>}
//     {page=== "messages" && <Main/>}
//     {page=== "friends" && <Main/>}
//     {page=== "logout" && <Logout/>}
// </div>
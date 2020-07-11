import React, {useState} from 'react';
import './Main.css';
import AddCardForm from "./AddCardForm/AddCardForm";
import StaticCards from "./StaticCards/StaticCards";
import CardBeauty from "./Card/Card";

const Main = (props) => {
    const pdtList = require('../../beautyProductList');
    const [cardInfor, setCardInfor]= useState(pdtList);
    const [buttonState ,setButtonState]= useState(false);
    console.log("j",cardInfor);
    return (
        <div className="main">
            <h1 className="mainText"> BEAUTY</h1>
            <StaticCards/>
            {buttonState && <CardBeauty cardInfor={cardInfor}/>}
            <AddCardForm setCardInfor={setCardInfor} cardInfor={cardInfor} setButtonState={setButtonState}/>
        </div>
    );
}

Main.propTypes = {

};

export default Main;

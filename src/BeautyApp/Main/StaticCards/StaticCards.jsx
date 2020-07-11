import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './StaticCards.css'

const pdtList = require('../../../beautyProductList');

const StaticCards = () => {
    const pdtListArray = Object.entries(pdtList);
    const pdtListMap = pdtListArray.map(
        (pdt) => {
            return(<Card
                header={pdt[0]}
                meta={pdt[1]["price"]}
                description={pdt[1]["image"]}/>)
        });

    return (<div className="Cards">{pdtListMap}</div>);
}

export default StaticCards

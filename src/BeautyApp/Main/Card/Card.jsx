import React from 'react'
import { Card } from 'semantic-ui-react'
import "./Card.css";

const CardBeauty = ({cardInfor}) => {
    const {header,price, description}= cardInfor;
            return(
                <Card
                header={header}
                meta={price}
                description={description}
                />)
      }


export default CardBeauty

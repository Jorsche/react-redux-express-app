import React from 'react';
import './AddButton.css';
import {Button} from "semantic-ui-react";

const AddButton = (props) => {
    return (
        <div>
            <Button
                className="addButton"
                onClick={()=>{console.log("ADSS")}}
            >ADD
            </Button>
        </div>
    );
}
export default AddButton;

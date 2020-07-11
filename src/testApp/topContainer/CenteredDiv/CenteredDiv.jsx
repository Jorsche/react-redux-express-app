import React from 'react';
import "./CenteredDiv.css"
import {Button, Icon} from "semantic-ui-react";
const CenteredDiv = () => {
    return (
        <div className={"CenteredDiv"}>
        <h1 className={"h1"}>Imagine</h1>
            <h2 className={"h2"}>
                Lorem Ipsum is simply dummy text of the printing and typesetti
                ng industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries\
                , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publ
                ishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
            <Button className={"button1"}  primary >
                Get Started!
                <Icon name={"arrow right"} />
            </Button>
        </div>
    );
};

export default CenteredDiv;
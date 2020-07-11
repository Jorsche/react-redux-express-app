import React from 'react';
import {Grid, List} from "semantic-ui-react";
import './FooterGridBody.css'
const FooterGridBody = () => {
    return (
            <div className="footContainerInnerDiv">
                <Grid columns={3} padded centered divided className={"gridFoot"}>
                    <Grid.Row>
                        <Grid.Column>
                            <div>
                                About
                            </div>
                            <List>
                                <List.Item>Sitemap</List.Item>
                                <List.Item>Contact Us</List.Item>
                                <List.Item>FAQ</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                Service
                            </div>
                            <List>
                                <List.Item>Preorder</List.Item>
                                <List.Item>BLAH</List.Item>
                                <List.Item>TEEEO</List.Item>
                            </List>                    </Grid.Column>
                        <Grid.Column>
                            <div>
                                BlahBlahBlah
                            </div>
                            <List>
                                <List.Item>ZXC</List.Item>
                                <List.Item>VVV </List.Item>
                                <List.Item>FDSSDF SFD</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </div>
    );
};

export default FooterGridBody;
import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";

const Nav = () => {
    return (
        <div>
            <Container>
                <Menu.Item as='a' active>
                    Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                    <Button as='a'>
                        Log in
                    </Button>
                    <Button as='a'  style={{ marginLeft: '0.5em' }}>
                        Sign Up
                    </Button>
                </Menu.Item>
            </Container>
        </div>
    );
};

export default Nav;
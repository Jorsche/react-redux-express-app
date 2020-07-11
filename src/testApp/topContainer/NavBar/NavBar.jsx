import React from 'react'
import {Button, Input, Menu} from 'semantic-ui-react'
import "./NavBar.css"
const NavBar = () => {
    return (
        <div className={"NavBar"}>
            <Menu secondary inverted>
            <Menu.Item
            name='home'
            />
            <Menu.Item
            name='messages'
            />
            <Menu.Item
            name='friends'
            />
            <Menu.Menu position='right'>
            <Menu.Item className={"Login"}>
            <Button inverted> Log In </Button>
            </Menu.Item>
                <Menu.Item className={"Signup"}>
                    <Button inverted> Sign Up </Button>
                </Menu.Item>

            </Menu.Menu>
            </Menu>
            )
        }
        }

        </div>
    );
};

export default NavBar;
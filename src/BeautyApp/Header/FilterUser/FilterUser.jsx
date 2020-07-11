import React from 'react'
import {Input, Menu} from 'semantic-ui-react'
import './FilterUser.css'
const FilterUser = () =>
    <Menu.Menu position='right' className="filterUser">
        <Menu.Item>
            <Input icon='search' placeholder='Search...' />
        </Menu.Item>
    </Menu.Menu>


export default FilterUser

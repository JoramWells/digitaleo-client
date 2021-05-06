import React from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu
export default function Right(props) {
    return (
        <Menu mode={props.mode}>
            <SubMenu title="Our products">
                <Menu.Item style={{margin:"0"}}>
                    Mobile Apps
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Web Apps
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Data Analytics
                </Menu.Item>
            </SubMenu>

            <SubMenu title="Our services">
                <Menu.Item style={{margin:"0"}}>
                    <Link to="/services">
                    Search Engine Optimazation
                    </Link>
                    
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    <Link to="/services">
                    ICT consultation
                    </Link>
                    
                </Menu.Item>
            </SubMenu>
            <Menu.Item>
                Contact us
            </Menu.Item>

        </Menu>
    )
}

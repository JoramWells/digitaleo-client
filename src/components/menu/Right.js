import React from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu
export default function Right(props) {
    return (
        <Menu mode={props.mode} style={{backgroundColor:"#434343"}}>
            <SubMenu title="Our Products" style={{fontSize:"1rem", color:"#bae7ff"}}>
                <Menu.Item style={{margin:"0"}}>
                    Mobile Apps
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Web Apps
                </Menu.Item>
            </SubMenu>

            <SubMenu title="Our Services" style={{fontSize:"1rem", color:"#bae7ff"}}>
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
            <Menu.Item style={{fontSize:"1rem", color:"#bae7ff"}}>
                Contact Us
            </Menu.Item>

        </Menu>
    )
}

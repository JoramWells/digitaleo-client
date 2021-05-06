import { Menu } from 'antd'
import React from 'react'

const {SubMenu} = Menu
export default function Right(props) {
    return (
        <Menu mode={props.mode} style={{backgroundColor:"#1890ff"}}>
            <SubMenu title="Our products" style={{fontWeight:"bold"}}>
                <Menu.Item style={{margin:"0"}}>
                    <b>Mobile Apps</b>
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
                    Search Engine Optimazation
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    ICT consultation
                </Menu.Item>
            </SubMenu>
            <Menu.Item>
                Contact us
            </Menu.Item>

        </Menu>
    )
}

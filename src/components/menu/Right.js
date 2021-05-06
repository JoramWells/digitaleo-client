import { Menu } from 'antd'
import React from 'react'

const {SubMenu} = Menu
export default function Right() {
    return (
        <Menu mode="horizontal">
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

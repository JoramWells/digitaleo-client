import { Menu } from 'antd'
import React from 'react'

export default function Right() {
    return (
        <Menu mode="horizontal" style={{backgroundColor:"blue"}}>
            <Menu.Item>
               Our Products
            </Menu.Item>
            <Menu.Item>
              Our  Services
            </Menu.Item>
            <Menu.Item>
                Contact us

            </Menu.Item>
        </Menu>
    )
}

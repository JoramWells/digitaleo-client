import React, { useState } from 'react'
import Right from './Right'
import {Button, Drawer} from 'antd'
import {AlignRightOutlined} from '@ant-design/icons'

export default function NavBar() {
    const [visible, setVisible] = useState(false)
    function showDrawer(){
        setVisible(true)
    }
    function hideDrawer(){
        setVisible(false)
    }
    return (
        <nav className="menu">
            <div className="menu__logo">
                <a href="/">Logo</a>
            </div>
            <div className="menu__container" >
                <div className="menu_rigth" style={{marginTop:".7rem"}}>
                    <Right mode="horizontal"/>
                </div>
            </div>
            <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
            >
                <AlignRightOutlined/>
            </Button>
            <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={hideDrawer}
          visible={visible}
        >
          <Right mode="inline" />
        </Drawer>
            
        </nav>
    )
}

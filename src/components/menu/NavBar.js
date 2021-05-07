import React, { useState } from "react";
import Right from "./Right";
import {  Drawer } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  function showDrawer() {
    setVisible(true);
  }
  function hideDrawer() {
    setVisible(false);
  }
  return (
    <nav className="menu" style={{backgroundColor:"#434343"}}>
      <div className="menu__logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="menu__container">
        <div className="menu_rigth" style={{ marginTop: ".7rem" }}>
          <Right mode="horizontal" />
        </div>
      </div>

      <AlignRightOutlined
        className="menu__mobile-button"
        style={{ fontSize: "1.4rem" }}
        onClick={showDrawer}
      />
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
  );
}

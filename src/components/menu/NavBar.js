import React, { useState } from "react";
import Right from "./Right";
import {  Drawer } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  function showDrawer() {
    setVisible(true);
  }
  function hideDrawer() {
    setVisible(false);
  }
  return (
    <nav className="menu" style={{backgroundColor:"#1890ff", position:"static", top:"0", width:"100%", zIndex:"1"}}>
      <div className="menu__logo">
        <a href="/" style={{color:"white"}}>LOGO</a>
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

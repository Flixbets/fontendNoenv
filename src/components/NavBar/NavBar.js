import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css";
import logo from "../../image/header_logo_whitetext.png";
const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (

    <nav className="navbar">
      <div className="flex justify-between">
        <Button
          className="menu1 my-auto p-24"
          type="primary"
          icon={<MenuIcon />}
          onClick={() => setVisible(true)}
        />
        <Drawer
          title="เมนู"
          placement="left"
          onClick={() => setVisible(false)}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          {menu}
        </Drawer>
        <div className="my-auto w-1/3"><img src={logo} className="w-full" alt="logo" /></div>
      </div>
    </nav>

  );
};
export default NavBar;
import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import TopicMenu from "./TopicMenu";
import "../App.css";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Alluser from "./user/Alluser";
import Alladmin from "./admin_components/Alladmin";
import Allstatus from "./setstatus_components/Allstatus";
import Editaccount from "./Editaccount";
import { getCurrentUser } from "../services/auth.service";
import { Route, Routes, useLocation } from "react-router-dom";


function Header() {
  const [token] = useState(getCurrentUser());
  var topics=[];
  token!=null&&token.roles[0]==="ROLE_MOD"?
   topics = ["จัดการ User", "จัดการ Admin", "สถานะ","ตั้งค่าบัญชี"]:
   topics = ["จัดการ User", "สถานะ","ตั้งค่าบัญชี"];
  const { pathname } = useLocation();
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu

      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  useEffect(() => {
    pathname_appbar();
  }, [pathname]);
  var pathname_appbar;
  token!=null&&token.roles[0]==="ROLE_MOD"?
   pathname_appbar = () => {
    switch (pathname) {
      case "/admin":
        setSelectedKey("0");
        break;
      case "/admin/all_admin":
        setSelectedKey("1");
        break;
      case "/admin/all_status":

        setSelectedKey("2");
        break;
        case "/admin/edit_account":

        setSelectedKey("3");
        break;
      //   case "/Profile":
      //     setBarname("จัดการโปรไฟล์");
      //     setSelectedIndex(3);
      //     break;

    };
  }: pathname_appbar = () => {
    switch (pathname) {
      case "/admin":
        setSelectedKey("0");
        break;
      case "/admin/all_status":

        setSelectedKey("1");
        break;
        case "/admin/edit_account":

          setSelectedKey("2");
          break;


    };
  }


  return (
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
          <Routes>
            <Route path="/" element={<Alluser />} />
          {token!=null&&token.roles[0]==="ROLE_MOD"&& <Route path="/all_admin" element={<Alladmin />} />} 
            <Route path="/all_status" element={<Allstatus />} />
            <Route path="/edit_account" element={<Editaccount />} />
            {/* {contentIndex === 0 ?
            <Route path="/" element={<Alluser />}/>
            :contentIndex === 1 ? <Route path="/all_admin" element={<Alladmin />}/>: "test555555555"} */}
          </Routes>
        </Layout.Content>
      </Layout>
    </div>


  );
}
export default Header;
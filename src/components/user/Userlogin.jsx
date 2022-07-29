import React, { useState } from "react";
import logo_dlt from "../../image/logo_dlt.png";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import API_URL from "../../config/api";
import ErrorMessage from "../ErrorMessage";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const [idcard, setIdcard] = useState("");
  const [phone, setPhone] = useState("");
  const [msgErr1, setMsgErr1] = useState("");
  // const [userdata,setUserdata] = useState({});

  let navigate = useNavigate();

  const RedirectPage = () => {
    window.open("https://lin.ee/ywio3Hy", "_blank");
  };

  const get_user = async () => {
    await API_URL.post(`api/people/onePeople`, {
      idcard: idcard,
      phone: phone,
    })
      .then((res) => {

        navigate("/user_information", { state: { userdata: res.data } });
        
      })
      .catch((err) => {
        setMsgErr1("เลขบัตรประชาชนหรือเบอร์โทรศัพท์ไม่ถูกต้อง");
     
      });
  };

  return (
    <div className="w-full mx-auto text-center bgloginuser">
      <img src={logo_dlt} alt="entersite" className="w-5/6 md:w-1/4 mx-auto" />
      <form className="w-full ">
        <div className="w-5/6 md:w-2/6 mx-auto my-3">
          <Input
            maxLength={13}
            value={idcard}
            onChange={(e) => setIdcard(e.target.value)}
            size="large"
            className="ant-input-affix-wrapper form-input h-10 rounded-md"
            autoComplete="off"
            placeholder="เลขบัตรประชาชน"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </div>

        <div className="w-5/6 md:w-2/6 mx-auto my-5">
          <Input.Password
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            size="large"
            autoComplete="off"
            className="rounded-md h-10"
            placeholder="รหัสผ่าน"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
          <div className="flex justify-between my-7">
            <div>
            {msgErr1 ? <ErrorMessage message={msgErr1} /> : <></>}
            </div>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://lin.ee/ywio3Hy">
              <p className="text-red-500 font-extrabold">
                ลืมรหัสผ่าน/forget password
              </p>
            </a>
          </div>
          <div className="flex mx-auto text-center justify-between">
           
            <button className="btnlogin font-bold text-lg" type="button" onClick={RedirectPage}>
              ลงทะเบียน
              <br />
              Register
            </button>
         
            <button
              className="btnlogin font-bold text-lg"
              type="button"
              onClick={get_user}
            >
              เข้าสู่ระบบ
              <br />
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Userlogin;

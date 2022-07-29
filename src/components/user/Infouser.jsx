import React, { useState, useEffect } from "react";
import imgaeprofilepng from "../../image/blank_profile.png";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { Modal } from "antd";
import ImageIcon from "@mui/icons-material/Image";
import header_logo from "../../image/header_logo_tran.png";
import { IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import configapi from '../../config/configapi'

function Infouser() {
  const URL_HOST = `${configapi.API_SERVER}`;
  // const URL_HOST = `${process.env.REACT_APP_NODE_HOST_URL}`;
  const [datePicker, setDatePicker] = useState("");
  const [statusIndex, setStatusIndex] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [idcard, setIdcard] = useState("");
  const [phone, setPhone] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [imagePreviewUrlDriving, setImagePreviewUrlDriving] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const location = useLocation();
  let navigate = useNavigate();
  function handleClickBack() {
    navigate(-1);
  }

  useEffect(() => {
    if (location.state !== null) {
      const data = location.state.userdata;
      console.log(data);
      setFirstname(data.user.firstname !== "" ? data.user.firstname : " - ");
      setLastname(data.user.lastname !== "" ? data.user.lastname : " - ");
      setIdcard(data.user.idcard);
      setPhone(data.user.phone);
      setDatePicker(
        dayjs(data.user.birth).isValid()
          ? dayjs(data.user.birth).format("YYYY-MM-DD")
          : " - "
      );
      setStatusIndex(data.user.setstatuses.status);
      setImagePreviewUrl(
        data.user.imageprofile !== null
          ? `${URL_HOST}${data.user.imageprofile}`
          : null
      );
      setImagePreviewUrlDriving(
        data.user.imagedriving !== null
          ? `${URL_HOST}${data.user.imagedriving}`
          : null
      );
    }
  }, []);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="bgloginuser w-full pb-5">
      <nav className="md:flex items-center justify-between  bg-white px-6 py-2 hidden ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={header_logo} alt="headerlogo" className="w-3/6 md:w-2/6" />
        </div>

        <div className="w-full  flex justify-end lg:w-auto">
          <div className="text-sm flex items-center">
            <a
              href="/th"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
            >
              หน้าแรก
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lin.ee/ywio3Hy"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
            >
              ติดต่อ
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lin.ee/ywio3Hy"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
            >
              รับเรื่อง
            </a>
            <IconButton onClick={handleClickBack}>
                    <ExitToAppIcon color="secondary"/>
                  </IconButton>
          </div>
        </div>
      </nav>
     
      <nav className="md:hidden">
        <section class="top-nav ">
          <div className="flex">
            <div className="flex items-center  text-white mr-6">
              <img src={header_logo} alt="headerlogo" className="w-3/6" />
            </div>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul class="menu">
            <li>
              <a
                href="/th"
                className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
              >
                หน้าแรก
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lin.ee/ywio3Hy"
                className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
              >
                ติดต่อ
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lin.ee/ywio3Hy"
                className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
              >
                รับเรื่อง
              </a>
            </li>
            <li>
              <IconButton onClick={handleClickBack} >
                <ExitToAppIcon color="secondary" className="mr-3" /><p className="text-purple-900 font-mono text-xl my-auto">ออกจากระบบ</p> 
              </IconButton>
            </li>
          </ul>
        </section>
      </nav>

      <div className="w-full md:w-3/6 p-2 md:p-8  text-center mx-auto bg-white rounded-md shadow-md mt-5 ">
        <p className="text-2xl font-extrabold text-center md:text-left ">
          ข้อมูลส่วนตัว
        </p>
        <div className="md:flex md:justify-start">
          <div className="w-full lg:w-2/6 text-center mx-auto">
            <div className="flex justify-center">
              <img
                src={imagePreviewUrl ? imagePreviewUrl : imgaeprofilepng}
                style={{ width: "200px" }}
                className="rounded-lg"
                alt="nice"
              />
            </div>
          </div>
          <div className="hidden lg:flex w-1/6"></div>
          <div className="lg:hidden h-10"></div>
          <div className="w-full lg:w-4/6 mx-auto px-3 lg:px-0">
            <div className="p-5 bg-white rounded-lg shadow-lg">
              <div className="flex mb-4">
                <p className="text-md font-bold mr-5 my-auto w-1/6 flex justify-start">
                  ชื่อ
                </p>
                <p className="text-md my-auto">{firstname}</p>
              </div>
              <Divider className="my-1 " sx={{ borderBottomWidth: 2 }} />
              <div className="flex my-4">
                <p className="text-md font-bold mr-5 my-auto w-1/6 flex justify-start">
                  นามสกุล
                </p>
                <p className="text-md my-auto">{lastname}</p>
              </div>
              <Divider className="my-1 " sx={{ borderBottomWidth: 2 }} />
              <div className="flex my-4">
                <p className="text-sm font-bold mr-5 my-auto  flex justify-start">
                  เลขบัตรประชาชน
                </p>
                <p className="text-md my-auto">{idcard}</p>
              </div>
              <Divider className="my-1 " sx={{ borderBottomWidth: 2 }} />
              <div className="flex my-4">
                <p className="text-md font-bold mr-5 my-auto w-1/6 flex justify-start">
                  เบอร์โทร
                </p>
                <p className="text-md my-auto">{phone}</p>
              </div>
              <Divider className="my-1 " sx={{ borderBottomWidth: 2 }} />
              <div className="flex my-4">
                <p className="text-md font-bold mr-5 my-auto w-1/6 flex justify-start">
                  วันเกิด
                </p>
                <p className="text-md my-auto">{datePicker}</p>
              </div>
              <Divider className="my-1 " sx={{ borderBottomWidth: 2 }} />
              <div className="flex my-4">
                <p className="text-md font-bold mr-5 my-auto w-1/6 flex justify-start">
                  สถานะ
                </p>
                <div className="items-start text-left">
                  <p className="text-md my-auto text-purple-900">
                    {statusIndex}{" "}
                  </p>
                  <p className="text-xs my-auto text-red-600">
                    {statusIndex === "None" && "หมายเหตุ : โปรดแจ้งเจ้าหน้าที่"}
                  </p>
                </div>
              </div>
            </div>
            <Divider sx={{ borderBottomWidth: 2, marginY: 2 }} />
            <div className="flex justify-between">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lin.ee/ywio3Hy"
              >
                <button className="px-7 py-3 bg-purple-600 hover:bg-purple-900 rounded-lg text-white ">
                  <MarkUnreadChatAltIcon
                    className="my-auto mr-3"
                    fontSize="small"
                  />{" "}
                  ติดต่อเจ้าหน้าที่
                </button>
              </a>
              <button
                onClick={showModal}
                className="px-7 py-3 bg-purple-600 hover:bg-purple-900 rounded-lg text-white"
              >
                <ImageIcon className="my-auto mr-3" fontSize="small" />{" "}
                ดูใบขับขี่
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        style={{
          top: 5,
        }}
        title="ใบขับขี่"
        visible={isModalVisible}
        onCancel={showModal}
        footer={null}
      >
        <div className="flex justify-center">
          {imagePreviewUrlDriving ? (
            <img
              src={imagePreviewUrlDriving && imagePreviewUrlDriving}
              style={{ width: "355px", height: "500px" }}
              alt="nice2"
              className="rounded-md"
            />
          ) : (
            <p className="text-md font-semibold text-center">
              ไม่มีข้อมูลสำเนาใบขับขี่ของคุณ
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default Infouser;

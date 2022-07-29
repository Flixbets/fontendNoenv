import React, { useState, useEffect } from "react";

import {
  TextField,
  FormControl,
  MenuItem,
  IconButton,
  Select,
  InputLabel,
  Divider,
  Switch,
} from "@mui/material";
import dayjs from "dayjs";
import API_URL from "../../config/api";
import API_URL_form from "../../config/apiForm";
import imgaeprofilepng from "../../image/blank_profile.png";

import { Modal } from "antd";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import OpenNotification from "../notification/OpenNotification";
import ErrorMessage from "../ErrorMessage";

import FaceIcon from "@mui/icons-material/Face";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import configapi from '../../config/configapi'

function Adduser({ isModalVisible, showModal, get_Alluser, allUser, getId }) {
  const URL_HOST = `${configapi.API_SERVER}`;
  // const URL_HOST = `${process.env.REACT_APP_NODE_HOST_URL}`;
  const [datePicker, setDatePicker] = useState("");
  const [statusIndex, setStatusIndex] = useState(-1);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [idcard, setIdcard] = useState("");
  const [phone, setPhone] = useState(0);
  const [imageprofile, setImageprofile] = useState({});
  const [imagedriving, setImagedriving] = useState({});

  const [imageprofileBackup, setImageprofileBackup] = useState({});
  const [imagedrivingBackup, setImagedrivingBackup] = useState({});

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [imagePreviewUrlDriving, setImagePreviewUrlDriving] = useState(null);

  const [switchChecked, setSwitchChecked] = useState(true);

  const [getStatus, setGetStatus] = useState([]);
  const [msgErr1, setMsgErr1] = useState("");
  const [msgErr2, setMsgErr2] = useState("");

  useEffect(() => {
    clearForm();
    get_Status();
    if (getId != null) {
      const findone = allUser.find((obj) => {
        return obj.id === getId;
      });
      setForm(findone);
    }
  }, []);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageprofile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDelImage = (e) => {
    setImageprofile({});
    setImagePreviewUrl(null);
  };

  const handleUploadImageDriving = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagedriving(file);
      setImagePreviewUrlDriving(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDelImageDriving = (e) => {
    setImagedriving({});
    setImagePreviewUrlDriving(null);
  };

  const setForm = (findone) => {
    setDatePicker(
      dayjs(findone.birth).isValid
        ? dayjs(findone.birth).format("YYYY-MM-DD")
        : ""
    );
    setStatusIndex(findone.setstatusId);
    setFirstname(findone.firstname);
    setLastname(findone.lastname);
    setIdcard(findone.idcard);
    setPhone(findone.phone);
    setSwitchChecked(findone.use === 1 ? true : false);
    setImagePreviewUrl(
      findone.imageprofile !== null
        ? `${URL_HOST}${findone.imageprofile}`
        : null
    );
    setImageprofileBackup(findone.imageprofile);
    setImagedrivingBackup(findone.imagedriving);
    setImagePreviewUrlDriving(
      findone.imagedriving !== null
        ? `${URL_HOST}${findone.imagedriving}`
        : null
    );
  };

  const clearForm = () => {
    setDatePicker("");
    setStatusIndex("");
    setFirstname("");
    setLastname("");
    setIdcard("");
    setPhone("");
    setSwitchChecked(true);
  };

  const handleChangeStatus = (event) => {
    setStatusIndex(event.target.value);
  };

  const CreateUser = async (e) => {
    if (idcard === "" || idcard.length !== 13) {
      setMsgErr1("กรุณากรอกเลขบัตรประจำตัวประชาชนให้ถูกต้องและมี 13 ตัวอักษร");
      return;
    }
    setMsgErr1("");

    if (phone === "" || phone.length !== 10) {
      setMsgErr2("กรุณากรอกเบอร์โทรให้ถูกต้องและมี 10 ตัวอักษร");
      return;
    }
    const formData = new FormData();
    formData.append("imageprofile", imageprofile);
    formData.append("imagedriving", imagedriving);
    formData.append("firstname", firstname === "" ? "" : firstname);
    formData.append("lastname", lastname === "" ? "" : lastname);
    formData.append("idcard", idcard);
    formData.append("phone", phone);
    formData.append("birth", datePicker === "" ? "" : datePicker);
    formData.append("setstatusId", statusIndex === "" ? "1" : statusIndex);
    formData.append("use", switchChecked ? 1 : 0);

    setMsgErr2("");

    e.preventDefault();

    await API_URL_form.post(`api/people/newPeople`, formData)
      .then((res) => {
        OpenNotification({ message: "เพิ่ม user เรียบร้อย", type: 1 });
        showModal();
        get_Alluser();
        clearForm();
        return res.data;
      })
      .catch((err) => {
        err.response.data.status === 400
          ? OpenNotification({ message: "มี user นี้อยู่แล้ว", type: 3 })
          : OpenNotification({ message: "เกิดข้อผิดพลาด", type: 4 });
      });
  };

  const UpdateUser = async (e) => {
    try {
      if (imageprofile !== imageprofileBackup && imageprofileBackup !== null) {
        let string = "";
        const array = imageprofileBackup.split("\\");
        string = "./" + array.join("/");

        await API_URL.post(`api/people/deleteimageprofile`, {
          id: getId,
          imageprofileBackup: string,
        });
      }
    } catch (e) {}
    try {
      if (imagedriving !== imagedrivingBackup && imagedrivingBackup !== null) {
        let string = "";
        const array = imagedrivingBackup.split("\\");
        string = "./" + array.join("/");

        await API_URL.post(`api/people/deleteimagedriving`, {
          id: getId,
          imagedrivingBackup: string,
        });
      }
    } catch (e) {}

    e.preventDefault();
    if (idcard === "") {
      setMsgErr1("กรุณากรอกเลขบัตรประจำตัวประชาชนด้วย");
      return;
    }
    setMsgErr1("");
    if (phone === "") {
      setMsgErr2("กรุณากรอกเบอร์โทรด้วย");
      return;
    }

    setMsgErr2("");

    const formData = new FormData();
    formData.append("imageprofile", imageprofile);
    formData.append("imagedriving", imagedriving);
    formData.append("firstname", firstname.length === 0 ? "" : firstname);
    formData.append("lastname", lastname.length === 0 ? "" : lastname);
    formData.append("idcard", idcard);
    formData.append("phone", phone);
    formData.append("birth", datePicker === "" ? "" : datePicker);
    formData.append("setstatusId", statusIndex === "" ? "1" : statusIndex);
    formData.append("use", switchChecked ? 1 : 0);

    await API_URL_form.put(`api/people/updatePeople/${getId}`, formData)
      .then((res) => {
        OpenNotification({ message: "แก้ไข user เรียบร้อย", type: 1 });
        showModal();
        get_Alluser();
        clearForm();
        // API_URL_form.put(`api/people/updatePeople/${getId}`, formData);
        return res.data;
      })
      .catch((err) => {
        OpenNotification({ message: "มี user นี้อยู่แล้ว", type: 3 });
      });
  };

  const get_Status = async () => {
    await API_URL.get(`api/setstatus/allStatus`)
      .then((res) => {
        setGetStatus(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Modal
        style={{
          top: 10,
        }}
        title={getId === null ? "เพิ่ม user" : "แก้ไข user"}
        visible={isModalVisible}
        onOk={showModal}
        onCancel={showModal}
        width={900}
        footer={[
          <div className=" text-center flex justify-center">
            {getId === null ? (
              <button
                onClick={CreateUser}
                className="text-center text-white font-semibold  px-10 py-2 rounded-md bg-purple-500 hover:bg-purple-800 shadow-md"
              >
                บันทึก
              </button>
            ) : (
              <button
                onClick={UpdateUser}
                className="text-center text-white font-semibold  px-10 py-2 rounded-md bg-orange-500 hover:bg-orange-800 shadow-md"
              >
                แก้ไข
              </button>
            )}

            <div className="mx-5 md:mx-16 "></div>
            <button
              onClick={showModal}
              className="bg-transparent hover:bg-gray-100 text-black font-semibold  py-2 px-10 border border-purple-500 hover:border-transparent rounded"
            >
              ยกเลิก
            </button>
          </div>,
        ]}
      >
        <form
          className="w-6/6 md:w-4/6 mx-auto mt-5"
          encType="multipart/form-data"
          method="post"
        >
          <div className="flex items-end">
            <div>
              <img
                src={imagePreviewUrl ? imagePreviewUrl : imgaeprofilepng}
                style={{ width: "150px", height: "150px" }}
                alt="nice"
                className="rounded-md"
              />
            </div>
            <div>
              <IconButton onClick={handleDelImage}>
                <DeleteForeverIcon color="error" />
              </IconButton>
            </div>
          </div>

          <div className="md:flex w-full justify-between mb-3">
            <div>
              <input
                name="imageprofile"
                onChange={handleUploadImage}
                className="inputfile1 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="flex px-5 py-1 bg-slate-100 rounded-md w-2/4 md:w-2/6 my-4 md:my-0">
              <p className="text-md mr-1 my-auto">การใช้งาน</p>
              <Switch
                name="use"
                color="secondary"
                checked={switchChecked}
                onChange={() => {
                  setSwitchChecked(!switchChecked);
                }}
              />
            </div>
          </div>
          <div className="flex w-full md:w-6/6 mx-auto">
            <TextField
              name="firstname"
              autoComplete="off"
              size="small"
              id="outlined-textarea"
              label="ชื่อ"
              placeholder="ชื่อ"
              className="w-6/6"
              InputProps={{
                startAdornment: (
                  <FaceIcon position="start" className="mr-5"></FaceIcon>
                ),
              }}
              fullWidth
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <div className="w-8"></div>
            <TextField
              name="lastname"
              size="small"
              id="outlined-textarea"
              label="นามสกุล"
              autoComplete="off"
              placeholder="นามสกุล"
              className="w-6/6"
              fullWidth
              InputProps={{
                startAdornment: (
                  <FaceIcon position="start" className="mr-5"></FaceIcon>
                ),
              }}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <Divider className="my-3 h-4" sx={{ borderBottomWidth: 4 }} />
          <div className="flex w-full md:w-6/6 mx-auto my-5">
            <TextField
              name="idcard"
              value={idcard}
              onChange={(e) => setIdcard(e.target.value)}
              id="outlined-textarea"
              type={"tel"}
              size="small"
              label="เลขบัตรประจำตัวประชาชน"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              autoComplete="off"
              placeholder="เลขบัตรประจำตัวประชาชน"
              className="w-6/6"
              inputProps={{ maxLength: 13 }}
              InputProps={{
                startAdornment: (
                  <BadgeIcon position="start" className="mr-5"></BadgeIcon>
                ),
              }}
              required
              fullWidth
            />
          </div>
          {msgErr1 ? <ErrorMessage message={msgErr1} /> : <></>}
          <div className="flex w-full md:w-6/6 mx-auto my-5">
            <TextField
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="small"
              type={"tel"}
              id="outlined-textarea"
              label="เบอร์โทร"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              autoComplete="off"
              placeholder="เบอร์โทร"
              className="w-6/6"
              inputProps={{ maxLength: 10 }}
              InputProps={{
                startAdornment: (
                  <PhoneAndroidIcon
                    position="start"
                    className="mr-5"
                  ></PhoneAndroidIcon>
                ),
              }}
              required
              fullWidth
            />
          </div>
          {msgErr2 ? <ErrorMessage message={msgErr2} /> : <></>}
          <div className="flex w-full md:w-6/6 mx-auto my-5">
            <TextField
              name="birth"
              size="small"
              label="วันที่"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={datePicker}
              onChange={(e) => setDatePicker(e.target.value)}
              fullWidth
            />
            <div className="w-8"></div>

            <FormControl className="w-full">
              <InputLabel className="my-auto">สถานะ</InputLabel>
              <Select
                // defaultValue="null"
                name="setstatusId"
                defaultValue={statusIndex === -1 ? "" : statusIndex}
                size="small"
                label="สถานะ"
                value={getStatus.length === 0 ? "" : statusIndex}
                onChange={handleChangeStatus}
                fullWidth
              >
                {getStatus === null && (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
                {getStatus.length !== 0 &&
                  getStatus.map((value, index) => (
                    <MenuItem key={index} value={value.id}>
                      {value.status}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-full rounded-lg shadow-xl bg-gray-50">
              <div className="m-4">
                <div>
                  <label className="inline-block mb-2 text-gray-500">
                    อัพโหลดรูปใบขับขี่
                  </label>
                  <IconButton onClick={handleDelImageDriving}>
                    <DeleteForeverIcon color="error" />
                  </IconButton>
                </div>

                <div className="flex items-center justify-center w-full">
                  {imagePreviewUrlDriving ? (
                    <img
                      className="rounded-sm"
                      src={imagePreviewUrlDriving && imagePreviewUrlDriving}
                      style={{ height: "400px" }}
                      alt="nice2"
                    />
                  ) : (
                    <label className="flex flex-col w-full h-56 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7 mt-16">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          เลือกไฟล์รูปภาพ
                        </p>
                      </div>
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        className="opacity-0"
                        name="imagedriving"
                        onChange={handleUploadImageDriving}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Adduser;

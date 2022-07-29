import React from "react";
import header_logo from "../../image/header_logo_tran.png";
import facebook_link from "../../image/facebook_link.png"
import { Carousel } from "react-carousel-minimal";
import img1 from "../../image/banner/1.png";
import img2 from "../../image/banner/2.png";
import img3 from "../../image/banner/3.png";
import img4 from "../../image/banner/4.png";
import img5 from "../../image/banner/5.png";
import img6 from "../../image/banner/6.png";
import img7 from "../../image/banner/7.png";
import img8 from "../../image/banner/8.png";
import img9 from "../../image/banner/9.png";

import news1 from "../../image/news/1.jpg";
import news2 from "../../image/news/2.jpg";
import news3 from "../../image/news/3.jpg";
import news4 from "../../image/news/4.jpg";
import news5 from "../../image/news/5.jpg";
import news6 from "../../image/news/6.jpg";

import bg_footer from "../../icon/footer/bg-contact.png";
import ic_fb from "../../icon/footer/facebook_icon.png";
import ic_line from "../../icon/footer/line_icon.png";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import HelpIcon from "@mui/icons-material/Help";
import LaptopIcon from "@mui/icons-material/Laptop";
import GavelIcon from "@mui/icons-material/Gavel";
import LoginIcon from "@mui/icons-material/Login";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";

import { useNavigate } from "react-router-dom";

function Header_user() {
  const navigate = useNavigate();
  const data = [
    {
      image: img1,
      caption: "",
    },
    {
      image: img2,
      caption: "",
    },
    {
      image: img3,
      caption: "",
    },
    {
      image: img4,
      caption: "",
    },
    {
      image: img5,
      caption: "",
    },
    {
      image: img6,
      caption: "",
    },
    {
      image: img7,
      caption: "",
    },
    {
      image: img8,
      caption: "",
    },
    {
      image: img9,
      caption: "",
    },
  ];

  const content_news = [
    {
      imageNews: news1,
      header:
        "กรมการขนส่งทางบก ปรับทันที่ ผู้ขับรถแท็กซี่ กรณีมีพฤติกรรมใช้กิริยาไม่สุภาพต่อผู้โดยสารซึ่งเป็นนักท่องเที่ยวชาวต่างชาติ และไม่ใช้มาตรค่าโดยสาร",
      content:
        "ในการนี้ กรมการขนส่งทางบก โดยกองตรวจการขนส่งทางบก พิจารณาแล้ว เห็นว่าการกระทำดังกล่าวของผู้ขับรถแท็กซี่ มีความผิดตามพรบ.การขนส่งทางบก.... ",
    },
    {
      imageNews: news2,
      header:
        "[ข่าวปลอม] รับทำใบขับขี่แบบเร่งด่วน ไม่ต้องสอบ บัตรออกโดยกรมขนส่งทางบก มีในระบบถูกต้องตามกฎหมาย",
      content:
        "จากกรณีข้างต้น ทางกรมการขนส่งทางบก กระทรวงคมนาคม ชี้แจงว่า ปัจจุบันมีกลุ่มมิจฉาชีพแอบอ้างการขอรับใบอนุญาตขับรถทุกชนิดมีมาตรฐานเดียวกันทั่วประเทศ คือ....",
    },
    {
      imageNews: news3,
      header: "[ข่าวจริง] เปิดวิ่งฟรีมอเตอร์เวย์ M6 ช่วงวันหยุดยาวเดือนก.ค. 65",
      content:
        "กรมทางหลวงจะเปิดให้บริการทางหลวงระหว่างเมืองหมายเลข 6 (M6) โดยให้บริการฟรี ในช่วงวันอาสาฬหบูชาและวันเข้าพรรษา ขาออก วันที่ 13 - 14 ก.ค. 65 และขาเข้าวันที่ 15 - 17 ก.ค. 65.... ",
    },
    {
      imageNews: news4,
      header:
        "กรมการขนส่งทางบก แนะ!!! วิธีเลือกรถโดยสารเช่าเหมาเพื่อการเดินทางทำบุญในวันหยุดยาว วันอาสาฬหบูชาและวันเข้าพรรษา (13-17 ก.ค. 2565)",
      content:
        "นายจิรุตม์ วิศาลจิตร อธิบดีกรมการขนส่งทางบก เปิดเผยว่า เพื่อการเดินทางทำบุญในวันหยุดยาว วันอาสาฬหบูชา และ   วันเข้าพรรษา (ตั้งแต่วันที่ 13-17 กรกฎาคม 2565) อย่างปลอดภัย กรมการขนส่งทางบก.... ",
    },
    {
      imageNews: news5,
      header:
        "กรมการขนส่งทางบก กำชับ!!! ผู้ประกอบการรถโดยสารสาธารณะทุกประเภท อำนวยความสะดวก ความปลอดภัย ดำเนินการตามมาตรการสาธารณสุข",
      content:
        "นายจิรุตม์ วิศาลจิตร อธิบดีกรมการขนส่งทางบก เปิดเผยว่า นายศักดิ์สยาม ชิดชอบ รัฐมนตรีว่าการกระทรวงคมนาคม ห่วงใยประชาชนเดินทางช่วงวันหยุดอาสาฬหบูชาและวันเข้าพรรษา ระหว่างวันที่ 13 - 17 กรกฎาคม 2565....",
    },
    {
      imageNews: news6,
      header:
        "กรมการขนส่งทางบก เตรียมพร้อม!!! มาตรการความปลอดภัยรองรับการเดินทางช่วงวันหยุดอาสาฬหบูชาและวันเข้าพรรษา วันที่ 13-17 กรกฎาคม 2565",
      content:
        "จากการคาดการณ์ปริมาณการเดินทางของประชาชนด้วยรถโดยสารประจำทางและการเช่าเหมารถโดยสารไม่ประจำทางที่คาดว่าจะสูงขึ้น จึงได้สั่งการไปยังสำนักงานขนส่งทั่วประเทศให้เตรียมความพร้อมดำเนินการทุกมา....",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const RedirectPage = () => {
    window.open("https://lin.ee/ywio3Hy", "_blank");
  };

  return (
    <div>
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
            <a
              rel="noopener noreferrer"
              href="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
            >
              เข้าสู่ระบบ
            </a>
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
            <a
              rel="noopener noreferrer"
              href="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
            >
              เข้าสู่ระบบ
            </a>
            </li>
          </ul>
        </section>
      </nav>
      {/* <nav className="md:flex items-center justify-between  bg-white px-6 py-2">
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
            <a
              rel="noopener noreferrer"
              href="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-purple-900 font-mono text-xl hover:text-purple-400 mr-4"
            >
              เข้าสู่ระบบ
            </a>
          </div>
        </div>
      </nav> */}
      <div className="bg-purple-700 h-3 w-full"></div>
      <div className=" rounded-none">
        <div className="d-block text-center">
          <Carousel
            data={data}
            time={6000}
            width="w-full"
            height="500px"
            captionStyle={captionStyle}
            // radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",

              maxHeight: "500px",
            }}
          />
        </div>
      </div>
      <div className="text-center divide-x">
        <button
          onClick={() => navigate("/login")}
          className="w-3/6 h-20 bg-purple-800 hover:bg-amber-300 text-white text-lg md:text-2xl"
        >
          เข้าสู่ระบบ <LoginIcon fontSize="large" className="ml-2" />
        </button>

        <button
          onClick={RedirectPage}
          className="w-3/6 h-20 bg-purple-800 hover:bg-amber-300 text-white text-lg md:text-2xl"
        >
          ติดต่อเจ้าหน้าที่{" "}
          <MarkUnreadChatAltIcon fontSize="large" className="ml-2" />
        </button>
      </div>
      <div className="mx-3 md:mx-10 mt-8">
        <p className="text-4xl text-purple-800"> ข่าวใหม่</p>
        <div className="flex">
          <div className="h-2 w-1/6 bg-purple-800"></div>
          <div className="h-2 w-5/6 bg-purple-300"></div>
        </div>

        <div className="flex flex-wrap w-full">
          {content_news.map((val, index) => (
            <div
              className="px-1 py-5 lg:px-5 lg:py-8 w-1/2 md:w-1/3"
              key={index}
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <img
                  className="w-full h-32 md:h-56"
                  src={val.imageNews}
                  alt="Mountain"
                />
                <div className="px-6 py-3">
                  <div className="font-bold text-xl mb-2 text-ellipsis truncate ">
                    {val.header}
                  </div>
                  <p className="text-gray-700 text-xs md:text-base text_contant ">
                    {val.content}
                  </p>
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ข่าวล่าสุด
                  </span>
                 
                  <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #แนะนำ
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${bg_footer})`,
          backgroundSize: "cover",
        }}
        className="p-10 text-white  md:divide-x md:flex"
      >
        <div className="w-full md:w-1/3 mr-0 md:mr-5">
          <p className="text-2xl">กรมการขนส่งทางบก</p>
          <hr className="my-5"></hr>
          <div className="flex">
            <LocationOnIcon fontSize="large" />
            <p className="text-md ml-4">
              กรมการขนส่งทางบก 1032 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร
              กรุงเทพมหานคร 10900.
            </p>
          </div>
          <hr className="my-5"></hr>
          <div className="flex">
            <PhoneIphoneIcon fontSize="large" />
            <p className="text-md ml-4">
              โทรศัพท์ (หมายเลขกลาง) : 0-2271-8888 โทรสาร : 0-2271-8805
              (เฉพาะวันเละเวลาราชการเท่านั้น)
            </p>
          </div>
          <hr className="my-5"></hr>
          <div className="flex">
            <EmailIcon fontSize="large" />
            <p className="text-md ml-4">
              แจ้งปัญหาการใช้งานเว็บไซต์ <br />
              https://lin.ee/ywio3Hy
            </p>
          </div>
        </div>

        <div className=" px-5 py-10 mx-auto w-full md:w-1/3">
          <div className="flex flex-wrap w-full justify-center">
            <div className="border-purple-100 border-2 rounded-sm bg-purple-800 p-0 md:p-2 w-full md:w-1/3 m-2">
              <div className="w-full text-center mx-auto mt-2">
                <RssFeedIcon fontSize="large" className="text-center" />
              </div>
              <p className="text-lg text-center">RSS</p>
            </div>
            <div className="border-purple-100 border-2 rounded-sm bg-purple-800 p-0 md:p-2 w-full md:w-1/3 m-2">
              <div className="w-full text-center mx-auto mt-2">
                <HelpIcon fontSize="large" className="text-center" />
              </div>
              <p className="text-lg text-center">ข้อเสนอแนะ</p>
            </div>
            <div className="border-purple-100 border-2 rounded-sm bg-purple-800 p-0 md:p-2 w-full md:w-1/3 m-2">
              <div className="w-full text-center mx-auto mt-2">
                <LaptopIcon fontSize="large" className="text-center" />
              </div>
              <p className="text-md text-center mt-6">ระบบอินทราเน็ต</p>
            </div>
            <div className="border-purple-100 border-2 rounded-sm bg-purple-800 p-0 md:p-2 w-full md:w-1/3 m-2">
              <div className="w-full text-center mx-auto mt-2">
                <GavelIcon fontSize="large" className="text-center" />
              </div>
              <p className="text-md text-center mt-6">กฎหมายที่เกี่ยวข้อง</p>
            </div>
          </div>
        </div>
        <div className=" px-5 py-10 mx-auto w-full md:w-1/3">
          <div className="flex justify-start items-center">
            <p className="text-lg my-auto mr-4">
              Social Network กรมการขนส่งทางบก
            </p>
            <img
              onClick={RedirectPage}
              src={ic_fb}
              alt="fb"
              style={{ width: "10%" }}
              className="my-auto mr-4"
            />
            <img
              onClick={RedirectPage}
              src={ic_line}
              alt="fb"
              style={{ width: "10%" }}
              className="my-auto"
            />
          </div>
          <div>
          <img
              onClick={RedirectPage}
              src={facebook_link}
              alt="fb4"
              // style={{ width: "50%" }}
              className="mt-5 md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_user;

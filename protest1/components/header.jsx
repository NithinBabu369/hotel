'use client'

import { useRouter } from "next/navigation";
import Menu from "./menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FacebookFilled, FacebookOutlined, InstagramFilled, InstagramOutlined, LoginOutlined, MediumOutlined, TwitterCircleFilled, TwitterOutlined, UserOutlined, YoutubeFilled, YoutubeOutlined } from "@ant-design/icons";


export function Header({ route }) {
    const router = useRouter();
    const [isToggle, setIstoggle] = useState(false);
  
    const menus = [
      { name: "Home", href: "/Home" },
      { name: "About", href: "/About" },
      { name: "Services", href: "/Services" },
      { name: "Packages", href: "/Packages" },
      { name: "Blog", href: "/Blog" },
      { name: "Pages", href: "/Pages" },
      { name: "Contact", href: "/Contact" },
    ];
  
    const open = () => {
      setIstoggle(!isToggle);
    };
  
    return (
      <>
        <div className="w-full landing-nav fixed z-50 shadow-md l">
        <div className="hidden lg:flex w-full bg-[#13357b] items-center h-12 shadow-md lg:px-3">
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-4 items-center text-white text-md ">
                    <TwitterCircleFilled />
                    <InstagramFilled/>
                    <FacebookFilled/>
                    <MediumOutlined/>
                    <YoutubeFilled/>
                </div>
                <div className="gap-4 flex">
                    <div onClick={()=>router.push("/register")} className="flex gap-2 items-center cursor-pointer">
                        <UserOutlined className="text-white"/>
                        <p className="font-poppins text-white text-md">Register</p>
                    </div>
                    <div onClick={()=>router.push("/login")} className="flex gap-2 items-center cursor-pointer">
                        <LoginOutlined className="text-white"/>
                        <p className="font-poppins text-white text-md">Login</p>
                    </div>
                </div>
            </div>
        </div>
          <div className="flex justify-between items-center py-2 md:py-4 px-4 lg:px-3">
            <div className="justify-between">
            <div className="flex justify-center gap-4">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer"
                onClick={() => router.push("/")}
              />
            </div>
            <p className="text-white font-bold">Easy Bookings</p>
            </div>
            <div className="hidden lg:flex justify-center gap-8">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  className={
                    route === menu.name
                      ? "text-white font-poppins text-lg font-medium py-2"
                      : `text-white opacity-100 font-poppins text-lg font-medium py-2`
                  }
                  href={menu.href}
                >
                  {menu.name}
                </Link>
              ))}
              <button
                onClick={() => navigate("/launch")}
                className="px-4 py-2 rounded-lg text-[#FFFFFF] bg-blue-600 launch-button hover:opacity-80 z-10 shadow-lg"
              >
                Book now
              </button>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={open}
                id="menu-btn"
                className={
                  isToggle
                    ? "block ml-auto mt-3 text-white lg:hidden bg-[#FFFFFF1A] opacity-90 px-4 py-2 rounded-lg"
                    : "block mt-3 text-white ml-auto lg:hidden bg-[#FFFFFF1A] opacity-90 px-4 py-2 rounded-lg"
                }
              >
                menu
              </button>
            </div>
          </div>
        </div>
        {isToggle && <Menu />}
      </>
    );
  }



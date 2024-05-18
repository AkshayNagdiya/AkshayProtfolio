import React, { useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useClickAway } from "react-use";
import profile from "../assets/profile.png"

const Mininavbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
<div className="sticky top-0 z-10 w-full backdrop-blur">
<div className="mininavbar xl:px-0 xl:py-0 lg:px-16 lg:py-2 md:py-6 md:px-4 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <a
        href="#home"
        className="text-white font-bold text-[40px] flex items-center space-x-3 rtl:space-x-reverse"
      >
        <h1 className="text-[20px] p-6  md:text-4xl ">Akshay Nagdiya</h1>
      </a>
      <div className="p-4 text-2xl visible md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-3 border-2 border-none rounded-xl"
          aria-label="toggle sidebar"
        >
          <GiHamburgerMenu />
        </button>
        {open && (
          <>
            <div
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40  backdrop-blur-sm"
            ></div>
            <div
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-fit border-r-2 border-zinc-800 bg-zinc-900"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800">
                <span>
                  {/* <img style={{borderRadius : "50%"}} className="w-10 h-10" src={profile} alt="img" />  */}
                  <h1 className="text-[20px] p-6  md:text-4xl ">Akshay Nagdiya</h1>
                </span>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-none rounded-xl text-red-700"
                  aria-label="close sidebar"
                >
                  <IoMdClose />{" "}
                </button>
              </div>
              <ul className="backdrop-blur-sm">
                {items.map((item, idx) => {
                  const { title, href } = item;
                  return (
                    <li key={title}>
                      <a
                        onClick={toggleSidebar}
                        href={href}
                        className="flex items-center pl-16 justify-between gap-5 p-4 transition-all text-[15px] border-zinc-800"
                      >
                        <span>{title}</span>
                        <div>
                          <p className="text-xl" />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-[20px] border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <a
              href="#Overview"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
</div>
  );
};

const items = [
  { title: "Home", href: "#home" },
  { title: "About" , href:"#Overview" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#project" },
  { title: "Contact", href: "#contact" },
];

export default Mininavbar;
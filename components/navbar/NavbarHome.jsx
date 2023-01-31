import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import style from "../../components/style/CheckToggleBtn.module.css";
import { CSSTransition } from "react-transition-group";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white fixed z-50 w-full px-4 py-2 shadow-lg top-0">
        <div className=" lg:container mx-auto flex items-center justify-between">
          {/* BRAND */}
          <Link href="/">
            <img
              src="/assets/hnp.png"
              alt=""
              className="w-32 lg:ml-20 xl:ml-0 md:ml-5"
            />
          </Link>
          <div className="hidden sm:flex items-center">
            <Link href="/" className="mx-2 text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="#about" className="mx-2 text-gray-600 hover:text-black">
              About
            </Link>
            <div className="relative">
              <button
                className="mx-2 text-gray-600 hover:text-black focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services
              </button>
              {isOpen && (
                <ul className="absolute right-0 z-10 bg-white py-2 mt-2 rounded-md shadow-lg">
                  <li className="py-1">
                    <Link
                      href="#service1"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Service 1
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Service 2
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Service 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              href="#priccing"
              className="mx-2 text-gray-600 hover:text-black"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="mx-2 text-gray-600 hover:text-black"
            >
              Contact
            </Link>
            <div className="flex items-center xl:ml-10">
              <Link
                href="/auth/login"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full ml-2"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-transparent border  border-blue-700 hover:bg-blue-400 text-gray-800 font-bold py-[7px] px-4 rounded-full ml-2"
              >
                Register
              </Link>
            </div>
          </div>
          {/* buttonnavbar mobile */}
          <div className="block sm:hidden">
            <label htmlFor="check" className={style.menuButton}>
              <input
                id="check"
                type="checkbox"
                className={style.input}
                onClick={() => setOpen(!open)}
              />
              <span className={style.top}></span>
              <span className={style.mid}></span>
              <span className={style.bot}></span>
            </label>
          </div>
        </div>
      </nav>
      {/* Navbar Mobile */}
      <CSSTransition in={open} timeout={300} classNames="alert" unmountOnExit>
        <aside
          className="w-64 fixed z-40 right-0 top-14"
          aria-label="Sidebar sm:hidden"
        >
          <div className="overflow-y-auto py-4 px-3 bg-white h-screen sm:hidden">
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-300"
                >
                  <AiFillHome className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-400" />
                  <span className="ml-3 text-gray-700">Home</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-800 rounded-lg transition duration-75 group hover:bg-gray-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span
                    className="flex-1 ml-3 text-left whitespace-nowrap text-gray-700"
                    sidebar-toggle-item
                  >
                    Layanan
                  </span>
                  <svg
                    sidebar-toggle-item
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <CSSTransition
                  in={isOpen}
                  timeout={300}
                  classNames="nav"
                  unmountOnExit
                >
                  <ul className=" py-2 space-y-2">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-800 rounded-lg transition duration-75 group hover:bg-gray-300"
                      >
                        Sosmed
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-800 rounded-lg transition duration-75 group hover:bg-gray-300"
                      >
                        Game
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-800 rounded-lg transition duration-75 group hover:bg-gray-300"
                      >
                        Voucher Premium
                      </Link>
                    </li>
                  </ul>
                </CSSTransition>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-300"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-700">
                    Cara Order
                  </span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    !
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-300"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-700">
                    Inbox
                  </span>
                  <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-300"
                >
                  <SiAboutdotme className="flex-shrink-0 w-6 h-6 text-gray-600 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-700">
                    Tentang Kami
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/login"
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-300"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-700">
                    Login
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register"
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-300"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-gray-700">
                    Register
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </CSSTransition>
    </>
  );
};

export default NavbarHome;

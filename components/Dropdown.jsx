import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import {
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import Router from "next/router";

import { Loading, PopupDialog } from "../components";
import { useStateContext } from "../context/StateContext";
import { useAuthContext } from "../context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown() {
  const { loading, setLoading, modal, setModal } = useStateContext();
  const { currentUser } = useAuthContext();

  const logout = async () => {
    await axios.post("/api/auth/logout");
    Router.push("/");
    localStorage.setItem("user", null);
  };
  function handleOke() {
    setModal(false);
    logout();
    setLoading(true);
  }
  function handlerOut() {
    setModal(true);
  }
  return (
    <>
      <Loading trigger={loading} />
      <PopupDialog
        trigger={modal}
        setTrigger={setModal}
        setTriggerOke={handleOke}
        text="Are you sure you want to exit? after this you have to log back in."
      />
      <Menu as="div">
        <Menu.Button className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
          <img
            className="rounded-full w-8 h-8"
            src="../../assets/hnp.png"
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-base transition-all ease-in-out hover:text-gray-300">
              Hi,
            </span>{" "}
            <span className="text-gray-400 font-bold ml-1 hover:text-gray-300 transition-all ease-in-out">
              {currentUser}
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </Menu.Button>
        <Menu.Items
          className="dropdown_menu nav-item rounded-lg  bg-[#42464D] before:bg-[#42464D] "
          data-aos="fade-down"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl tracking-wide font-medium text-gray-200">
              {currentUser}
            </h3>
            <span className="text-lg text-gray-300">Silver</span>
          </div>
          <div className="py-1  mt-10">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard/profile"
                  className={classNames(
                    active
                      ? "bg-gray-400 rounded-lg text-gray-900"
                      : "text-gray-100 border-t",
                    " px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <AiOutlineUser className="text-lg" />
                  My Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard/settings"
                  className={classNames(
                    active
                      ? "bg-gray-400 rounded-lg text-gray-900"
                      : "text-gray-100 border-t",
                    " px-4 py-2 text-sm flex gap-3"
                  )}
                >
                  <AiOutlineSetting className="text-lg" />
                  Settings
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "bg-gray-400 rounded-lg text-gray-900"
                      : "text-gray-100",
                    "flex border-t border-b w-full px-4 py-2 text-left text-sm gap-3"
                  )}
                  onClick={handlerOut}
                >
                  <AiOutlineLogout className="text-lg" />
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
        {/* </Transition> */}
      </Menu>
    </>
  );
}

export default Dropdown;

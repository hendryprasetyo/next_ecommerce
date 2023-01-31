import React from "react";
import axios from "axios";
import Router from "next/router";
import { MdOutlineCancel } from "react-icons/md";

import { Button, Loading, PopupDialog } from "../components";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../context/StateContext";

const UserProfile = () => {
  const { loading, setLoading, modal, setModal } = useStateContext();

  const logout = async () => {
    setLoading(true);
    await axios.post("/api/auth/logout");
    Router.push("/");
  };
  function handleOke() {
    setModal(false);                    
    logout();
    setLoading(false);
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
      <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">
            User Profile
          </p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {" "}
                  {item.desc}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button
            className="w-full bg-[#03C9D7] rounded-lg h-10 text-white font-medium tracking-wide"
            onClick={handlerOut}
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Cart, Dropdown } from "../../components";

import { useStateContext } from "../../context/StateContext";
import Link from "next/link";

const NavButton = ({ title, customFunc, icon, color, dotColor, className }) => {
  const addClassName = className ? `${className}` : "";
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className={` text-2xl space-x-1 rounded-full p-2 hover:bg-light-gray ${addClassName}`}
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-1 top-1"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    setScreenSize,
    screenSize,
    showCart,
    setShowCart,
    totalQuantities,
    setShowToast,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <>
      <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative ">
        <Link
          href={"/dashboard"}
          className="items-center hidden md:flex font-extrabold tracking-normal text-2xl ml-5 text-[#f7f7f7] cursor-pointer"
        >
          <span className="">HNPSTORE</span>
        </Link>
        <NavButton
          title="Menu"
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineMenu />}
          className="md:left-56 top- md:fixed"
        />
        <div className="flex">
          <div className="relative">
            <NavButton
              title="Cart"
              customFunc={() => setShowCart(true)}
              color={currentColor}
              icon={<FiShoppingCart />}
            />
            {totalQuantities >= 1 && (
              <span
                className={`w-5 h-5 bg-red-500  text-white absolute top-[-2px] text-center flex items-center justify-center rounded-full right-[-5px]`}
              >
                {totalQuantities}
              </span>
            )}
          </div>
          <NavButton
            title="Chat"
            dotColor="#03C9D7"
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<BsChatLeft />}
            className="relative"
          />
          <NavButton
            title="Notification"
            dotColor="rgb(254, 201, 15)"
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<RiNotification3Line />}
            className="relative"
          />
          <TooltipComponent content="Profile" position="BottomCenter">
            <div>
              <Dropdown />
            </div>
          </TooltipComponent>
          {showCart && <Cart />}
        </div>
      </div>
    </>
  );
};

export default Navbar;

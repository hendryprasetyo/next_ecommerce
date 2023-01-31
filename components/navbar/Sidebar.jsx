import React from "react";
import { SiShopware } from "react-icons/si";
import Router from "next/router";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../data/dummy";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { hover } from "@syncfusion/ej2/schedule";

const SideBUtton = ({ title, icon, color, dotColor, className, children }) => {
  const addClassName = className ? `${className}` : "";
  return (
    <button type="button" style={{ color: color }} className={addClassName}>
      {icon}
      <span style={{ color: dotColor }}>{children}</span>
    </button>
  );
};

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 hover:bg-gray-200  w-10/12";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-[#F7F7F7] m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto  md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href={"/dashboard"}
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-14 mt-4 flex text-xl font-extrabold tracking-NORMAL dark:text-white text-slate-900 "
            >
              <span>HNPSTORE</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-2xl rounded-full p-2 hover:bg-[#F7F7F7] mt-3 mr-3 block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <Link key={link.name} href={`/dashboard${link.path}`}>
                    <SideBUtton
                      className={activeLink}
                      color={currentColor}
                      icon={link.icon}
                      dotColor={currentColor}
                    >
                      {link.name}
                    </SideBUtton>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

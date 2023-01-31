import React, { useEffect } from "react";
import Head from "next/head";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Sidebar, Navbar, ThemeSettings, Footer } from "../components";
import { useStateContext } from "../context/StateContext";

const Layout = ({ children }) => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <>
      <Head>
        <title>HNP STORE</title>
      </Head>

      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="flex relative dark:bg-[#20232A]">
          <div className="fixed right-4 bottom-4 z-[100]">
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-200 text-black animate-spin"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-[#33373E] bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-[#33373E]">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-[#20232A] bg-[#FAFBFB] min-h-screen md:ml-72 w-full  "
                : "bg-[#FAFBFB] dark:bg-[#20232A]  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed z-50 left-0 bg-[#FAFBFB] dark:bg-[#33373E] w-full">
              <Navbar />
            </div>
            <div className="p-4 sm:p-10">
              {themeSettings && <ThemeSettings />}
              <main>{children}</main>
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

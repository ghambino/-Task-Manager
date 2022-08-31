import React, { useState } from "react";
import { Switch, useColorMode } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import darkKanbanLogo from "/assets/logo-dark.svg";
import lightKanbanLogo from "/assets/logo-light.svg";
import boardIcons from "/assets/icon-board.svg";
import darkModeIcon from "/assets/icon-dark-theme.svg";
import lightModeIcon from "/assets/icon-light-theme.svg";
import hideSidebarIcon from "/assets/icon-hide-sidebar.svg";
import showSidebarIcon from "/assets/icon-show-sidebar.svg";
import CreateBoard from "./CreateBoard";

function Sidebar() {
  const boards = useSelector((state) => state.boards);
  const [hideSidebar, setHideSidebar] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  console.log(boards);

  return (
    <div className="relative">
      <div
        className={`h-[100vh] w-[300px] border-r border-[#F2F2F2] py-[32px] ${
          hideSidebar ? "hidden" : "static"
        }`}
      >
        <div className="mb-[25px] pl-[32px]">
          <img
            src={colorMode === "light" ? darkKanbanLogo : lightKanbanLogo}
            alt="kanbanlogo"
          />
        </div>
        <div className="h-[80vh] flex flex-col justify-between">
          <div className="pl-[32px]">
            <h2 className="mb-[19px] uppercase font-[700]">
              all boards {"("}
              {boards.length}
              {")"}
            </h2>
            {boards.map((unit, index) => (
              <div key={index} className="flex items-center gap-3 mb-2">
                <img src={boardIcons} alt="" />
                <Link to={`/${unit.name}`} className="font-[700] capitalize">
                  {unit.name}
                </Link>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <img src={boardIcons} alt="" />
              <button className="opacity-70" onClick={() => setIsOpen(true)}>
                + create new board
              </button>
            </div>
            <CreateBoard isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <div>
            <div className={`flex items-center gap-4 ml-[32px] mb-[16px]`}>
              <img src={lightModeIcon} alt="darkmode" />
              <Switch size="sm" onChange={toggleColorMode} />
              {/* <button onClick={toggleColorMode}>
            toggle colormode
          </button> */}
              <img src={darkModeIcon} alt="lightmode" />
            </div>
            <div className="flex items-center gap-2">
              <img src={hideSidebarIcon} alt="" />
              <span
                className="hover:cursor-pointer font-[700]"
                onClick={() => setHideSidebar(true)}
              >
                Hide Sidebar
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setHideSidebar(false)}
        className={`w-[30px] h-[30px] rounded-r-lg ${
          colorMode === "light" ? "bg-black" : "bg-violet-600"
        } flex items-center justify-center ${
          !hideSidebar ? "hidden" : "absolute"
        } top-[90vh]`}
      >
        <img src={showSidebarIcon} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;

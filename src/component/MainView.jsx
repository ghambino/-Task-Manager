import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

import darkKanbanLogo from "/assets/logo-dark.svg";
import lightKanbanLogo from "/assets/logo-light.svg";

function MainView() {
  const { name } = useParams();
  const boards = useSelector((state) => state.boards);
  const { colorMode } = useColorMode();

  const displayedTask = boards.find((unit) => unit.name === name);

  if (displayedTask.columns.length < 1) {
    return (
      <>
        <div className="w-[100vw] h-[100vh] overflow-y-scroll">
          <div className="h-[10vh] border-2 flex items-center">
            <img
              src={colorMode === "light" ? darkKanbanLogo : lightKanbanLogo}
              alt="kanbanlogo"
              className="h-[26px]"
            />
            <div className="border-l-2 h-[100%] flex items-center pl-[24px]">
              <h2 className="font-[24px] font-[700] capitalize">{displayedTask.name}</h2>
            </div>
          </div>
          <div className="h-[90vh] flex justify-center items-center">
            <div className="text-center">
              <p className="text-[18px] font-[700] mb-4">This board is empty. Create a new colum to get started!!</p>
              <button className="py-2 px-2 bg-violet-400 font-[700] rounded-lg">+ Add New Colum</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-y-scroll">
        <div className="h-[10vh] border-2 flex items-center">
          <img
            src={colorMode === "light" ? darkKanbanLogo : lightKanbanLogo}
            alt="kanbanlogo"
            className="h-[26px]"
          />
          <div className="border-l-2 h-[100%] flex items-center pl-[24px]">
            <h2 className="font-[24px] font-[700] capitalize">{displayedTask.name}</h2>
          </div>
        </div>

        <div className="flex gap-4 p-[24px]">
          {displayedTask.columns.map((unit, index) =>
            unit.tasks.length < 1 ? (
              ""
            ) : (
              <div key={index}>
                <div className="text-[12px] font-[700] flex items-center gap-[5px] mb-[24px]">
                  <span
                    style={{
                      backgroundColor:
                        index === 0 ? "blue" : index === 1 ? "purple" : "green",
                    }}
                    className="h-[10px] w-[10px] rounded-lg inline-block"
                  ></span>
                  <span>{unit.name}</span>
                  <span>
                    {"("} {unit.tasks.length} {")"}
                  </span>
                </div>
                <div className="">
                  {unit.tasks.map((unit, index) => (
                    <div
                      key={index}
                      className={`${
                        colorMode === "dark" ? "bg-[#2B2C37]" : "bg-[white]"
                      } w-[280px] px-[16px] py-[12px] mb-[20px] rounded`}
                    >
                      <h4 className="text-[15px] font-[700] mb-[8px]">
                        {unit.title}
                      </h4>
                      <span className="text-[12px] font-[700] opacity-50">
                        {" "}
                        {
                          unit.subtasks.filter((unit) => unit.isCompleted)
                            .length
                        }{" "}
                        of {unit.subtasks.length} subtasks{" "}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
          <div className="h-[100vh] bg-[#2B2C37] px-[10px] flex items-center justify-between mt-[40px]">
            <button className="text-[12px] font-[700] opacity-50 ">
              new column ++
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainView;

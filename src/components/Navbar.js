import React from "react";
// import IoNotificationsSharp from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { BsGiftFill } from "react-icons/bs";
import { TbLetterP } from "react-icons/tb";
import { FcDocument, FcDiploma2, FcRules } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="mx-3">
      <div className="header flex items-center h-20 justify-end space-x-2 sm:space-x-4 md:space-x-8 text-lg md:text-2xl">
        <div className="cursor-pointer p-2 md:p-4 rounded-full bg-slate-800 hover:bg-slate-500">
          <MdNotifications />
        </div>
        <div className="cursor-pointer p-2 md:p-4 rounded-full bg-slate-800 hover:bg-slate-500">
          <BsGiftFill />
        </div>
        <div className="cursor-pointer p-2 md:p-4 rounded-full bg-slate-800 hover:bg-slate-500">
          <TbLetterP />
        </div>
      </div>

      <div>
        <p className="text-sm md:text-lg">
          HOME {`>>`} <span className="text-red-800">DASHBOARD</span>
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-2 sm:space-x-4 md:space-x-8 items-start text-center my-8">
          <div>
            <div className="p-2 md:p-4 bg-slate-800 hover:bg-slate-500 text-3xl  md:text-6xl rounded-md cursor-pointer">
              <FcDocument />
            </div>
            <p className="py-2 text-xs md:text-md">
              Study
              <br />
              Notes
            </p>
          </div>
          <div>
            <div className="p-2 md:p-4 bg-slate-800 hover:bg-slate-500 text-3xl  md:text-6xl rounded-md cursor-pointer">
              <FcDiploma2 />
            </div>
            <p className="py-2 text-xs md:text-md">
              Online
              <br />
              Quiz
            </p>
          </div>
          <div>
            <div className="p-2 md:p-4 bg-slate-800 hover:bg-slate-500 text-3xl  md:text-6xl rounded-md cursor-pointer">
              <FcRules />
            </div>
            <p className="py-2 text-xs md:text-md">Tests</p>
          </div>
        </div>

        <div className="flex items-center my-8">
          <div className="py-1 px-2 bg-slate-800 h-full rounded-md">
            <div className="flex justify-between mb-1 text-[10px] md:text-lg">
              <p>Your Monthly statistics</p>
              <div className=" px-2 bg-red-600 rounded-xl">Live °</div>
            </div>
            <div className="flex justify-between text-center">
              <div className="m-1 md:m-2">
                <p className="text-[8px] md:text-xs text-slate-400">Present</p>
                <div className="py-2 px-2 md:px-4 text-sm md:text-2xl bg-green-500  rounded-md ">
                  <p className="leading-3 md:leading-6">15</p>
                  <p className="text-[8px] md:text-xs leading-3">Days</p>
                </div>
              </div>
              <div className="m-1 md:m-2">
                <p className="text-[8px] md:text-xs text-slate-400">Absent</p>
                <div className="py-2 px-2 md:px-4 text-sm md:text-2xl bg-red-500  rounded-md">
                  <p className="leading-3 md:leading-6">01</p>
                  <p className="text-[8px] md:text-xs leading-3">Days</p>
                </div>
              </div>
              <div className="m-1 md:m-2">
                <p className="text-[8px] md:text-xs text-slate-400">Holidays</p>
                <div className="py-2 px-2 md:px-4 text-sm md:text-2xl bg-yellow-600  rounded-md">
                  <p className="leading-3 md:leading-6">04</p>
                  <p className="text-[8px] md:text-xs leading-3">Days</p>
                </div>
              </div>
              <div className="m-1 md:m-2">
                <p className="text-[8px] md:text-xs text-slate-400">Remains</p>
                <div className="py-2 px-2 md:px-4 text-sm md:text-2xl bg-green-400  rounded-md">
                  <p className="leading-3 md:leading-6">10</p>
                  <p className="text-[8px] md:text-xs leading-3">Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

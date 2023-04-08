import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const LectCard = ({ sz, data, bar }) => {
  return (
    <Link href={data.link} target="_blank">
      <div className={`w-full h-full ${sz === "md" ? "p-2 md:p-4" : "p-1"} `}>
        <div className="relative h-full rounded-sm overflow-hidden">
          {data && (
            <Image
              className="object-cover"
              src={data.imgsrc}
              alt={data.title}
              fill={true}
            />
          )}
          {data && (
            <div
              className={`absolute bg-gray-600 ${
                sz == "sm"
                  ? "text-[6px] md:text-xs px-1 py-[2px] rounded-sm bottom-1 right-1"
                  : "text-xs md:text-sm  px-2 py-1 rounded-md bottom-2 right-2"
              }  `}
            >
              {data.time}
            </div>
          )}
        </div>
        {bar && (
          <div className="bg-slate-600 h-1 mt-1 md:mt-2 w-full ">
            <div className={`bg-red-600 w-${bar} h-full`}></div>
          </div>
        )}
        <div className="flex justify-between">
          <p
            className={`${
              sz === "md"
                ? "text-[10px] md:text-lg pt-2"
                : "text-[8px] md:text-base pt-1"
            } font-semibold `}
          >
            {data && `${data.title} | Lect ${data.lect_no} `}
          </p>
          <AiOutlineDownload
            className={`${
              sz == "md"
                ? "text-base md:text-xl mt-2"
                : "text-sm md:text-lg md:mt-1"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};

export default LectCard;

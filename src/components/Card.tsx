import React from "react";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import checker from "../public/Image/checker.png";

export const Card = () => {
  let mock = [
    {
      id: 1,
      title: "강아지 의료 플랫 기획",
      location: "서울",
      time: "1분전",
      like: 0,
      attend: 1,
      people: 1,
    },
    {
      id: 2,
      title: "고양이 의료 플랫 기획",
      location: "서울",
      time: "1분전",
      like: 0,
      attend: 1,
      people: 1,
    },
    {
      id: 3,
      title: "코끼리 의료 플랫 기획",
      location: "서울",
      time: "1분전",
      like: 0,
      attend: 1,
      people: 1,
    },
  ];

  return (
    <div className=" w-[282px] h-[318px] relative rounded-lg shadow-md ">
      <div className="w-full h-200 ">
        <div className="  w-full h-[200px] rounded-t-lg relative brightness-100 hover:brightness-75 z-10">
          <Image
            src={checker}
            alt="dog"
            layout="fill"
            objectFit="cover"
          ></Image>

          <div className="absolute top-0 bg-transparent space-x-1  p-4 z-20 opacity-0 hover:opacity-100 w-full h-[200px]">
            <span className=" rounded-2xl py-0.5 px-2  gap-2.5 bg-red-300 text-xs">
              진행중
            </span>
            <span className="rounded-2xl py-0.5 px-2  gap-2.5 bg-red-300 text-xs">
              3년차
            </span>
            <span className="rounded-2xl py-0.5 px-2 gap-2.5 bg-red-300 text-xs">
              it
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[74px] py-4 px-5 gap-2 leading-5">
        <h4 className="flex flex-row font-bold text-sm">{mock[0].title}</h4>
        <p className="flex flex-row font-normal text-xs">
          <IoLocationSharp size={16} color="#9E9E9E" />
          {mock[0].location} | {mock[0].time}
        </p>
      </div>
      <div className="flex flex-row w-full h-[44px]">
        <button className="flex flex-row justify-center items-center w-1/2 h-full leading-5 border border-#EEEEEE gap-2.5  ">
          <MdPeopleAlt size={24} color="#00AEE4" />
          <div className="text-sky-400 text-xs">
            {mock[0].attend} / {mock[0].people}
          </div>
        </button>
        <button className="flex flex-row justify-center items-center w-1/2 h-full border border-#EEEEEE gap-2.5">
          <IoHeart size={24} color="#D62246" />
          <div className="text-rose-500 text-xs">{mock[0].like}</div>
        </button>
        <div></div>
      </div>
    </div>
  );
};

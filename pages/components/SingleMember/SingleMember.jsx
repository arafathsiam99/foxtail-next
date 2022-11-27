import Image from "next/image";
import React from "react";
import MemberRibbon from "../Ribbon/MemberRibbon";

const SingleMember = ({data}) => {
  return (
    <>   
      <div className="relative z-30  shadow-xl">
        <Image
          src={data?.img}
          alt=""
          className="w-full"
          width={500}
          height={500}
        />
        <MemberRibbon />
        <div className="text-white backdrop-blur-lg absolute inset-x-0 bottom-0 left-0">
          <div className="flex items-center">
            <h1 className="font-medium text-xl my-1  px-1  ml-2 leading-6 tracking-wide md:pt-4 ">
              {data?.name}
            </h1>
            <div className="rounded-full w-2 h-2 border-4 border-lime-400 mb-1 ml-1 md:mt-4"></div>
          </div>
          <p className="font-normal text-sm leading-5 tracking-wide px-1  ml-2 md:my-2">
            {data?.title}
          </p>
          <div className="flex px-1 my-2 ml-2 text-xs font-medium leading-4 tracking-wide md:mb-4">
            <button className="bg-fuchsia-800 px-1 md:mr-2 mr-1">Toys</button>
            <button className="bg-fuchsia-800 px-1 md:mr-2 mr-1">Kiss</button>
            <button className="bg-fuchsia-800	px-1 md:mr-2 mr-1">Bdsm</button>
            <button className="bg-fuchsia-800	px-1 md:mr-2 mr-1">12+</button>
            <button className="bg-fuchsia-800	px-1 md:mr-2 mr-1">Toys</button>
            <button className="bg-fuchsia-800	px-1 md:mr-2 mr-1">Kiss</button>
            <button className="bg-fuchsia-800	px-1 md:mr-2 mr-1">Bdsm</button>
            <button className="bg-fuchsia-800	px-1 md:mr-2 mr-1">12+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMember;

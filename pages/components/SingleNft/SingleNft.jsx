import React from "react";
import BuyNow from "../BuyNow/BuyNow";
import NFTRibbon from "../Ribbon/NFTRibbon";
import { FiEye, FiThumbsUp, FiBookmark, FiShare2 } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import Image from "next/image";

const SingleNft = ({ data }) => {
  return (
    <>
      <div className="mt-5  bg-white rounded-sm shadow-xl md:mx-3  dark:bg-slate-800">
        <div className="relative  z-30">
          <Image
            className=" w-full object-fill"
            src={data?.img}
            alt=""
            width={500}
            height={500}
          ></Image>
          <NFTRibbon />
          <div className="flex justify-between px-4 py-1 backdrop-blur-md  absolute inset-x-0 bottom-0 left-0">
            <div className="flex items-center mr-5">
              <FiEye className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <h2 className="text-white font-semibold text-xs leading-4	ml-1 md:text-base md:leading-5">
                9.67k
              </h2>
            </div>
            <div className="flex items-center mr-5">
              <FiThumbsUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <h2 className="text-white font-semibold text-xs leading-4	ml-1 md:text-base md:leading-5">
                44
              </h2>
            </div>
            <div className="flex items-center mr-5">
              <RiMessage2Line className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <h2 className="text-white font-semibold text-xs leading-4	ml-1 md:text-base md:leading-5">
                04
              </h2>
            </div>
            <div className="flex items-center mr-5">
              <FiBookmark className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <h2 className="text-white font-semibold text-xs leading-4	ml-1 md:text-base md:leading-5">
                22
              </h2>
            </div>
            <div className="flex items-center mr-5">
              <FiShare2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              <h2 className="text-white font-semibold text-xs leading-4	ml-1 md:text-base md:leading-5">
                04
              </h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black font-medium text-base leading-5 tracking-wide	 my-2	 md:leading-10md:text-2xl  ml-4 md:my-1.5 md:leading-7  md:text-xl dark:text-white">
            {data?.title}
          </h1>
          <h4 className="font-normal text-xs md:text-sm ml-4 tracking-wide mt-1 gray-text md:leading-5 dark:text-white">
            Created: {data?.date} by
            <span className="underline	ml-1 decoration-solid	decoration-from-font font-normal text-xs md:text-sm  tracking-wide mt-1 gray-text md:leading-5 dark:text-white">
              {data?.name}
            </span>
          </h4>
          <h4 className="font-normal text-xs ml-4  gray-text tracking-wide mt-1 md:text-sm dark:text-white">
            Owner:
            <span className="underline ml-1 decoration-solid	decoration-from-font	dark:text-white">
              {data?.owner}
            </span>
          </h4>
        </div>
        <div className="bg-fuchsia-200 h-0.5  mx-4 md:mt-2 dark:bg-fuchsia-800"></div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/SNZ0Y59/image-4.png"
              alt=""
              className="ml-3"
              width={24}
              height={20}
            />
            <h1 className="text-black font-medium text-3xl mx-1 dark:text-white">
              {data?.price}
            </h1>
            <h2 className=" font-normal text-sm gray-text dark:text-white mt-2">
              (${data?.dollar})
            </h2>
          </div>
          <div>
            <BuyNow />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNft;

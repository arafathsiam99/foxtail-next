import React from "react";
import EventRibbon from "../Ribbon/EventRibbon";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  return (
    <div>
      <div key={data?.id}>
        <div className="mt-4 bg-white shadow-xl md:mx-5">
          <div className="relative  z-30">
            <Image
              src={data?.img}
              alt="Event-img"
              className="w-full"
              width={500}
              height={10}
            />
            <EventRibbon />
          </div>
          <div className="pt-1 dark:bg-slate-800 ">
            <div className="flex gray-text flex-col md:flex-row">
              <div>
                <h3 className="text-black text-sm md:text-xl px-4 leading-5 md:leading-6	font-medium tracking-wide dark:text-white">
                  {data?.title}
                </h3>
                <div className="mt-3 px-2 md:mt-2">
                  <div className="flex md:py-2 py-1 items-center">
                    <FiMapPin className="w-3 h-3 md:w-4 md:h-4 dark:text-white" />
                    <p className="text-xs ml-1 md:text-base md:leading-5 leading-3 tracking-wide dark:text-white">
                      {data?.address}
                    </p>
                  </div>
                  <div className="flex md:py-2 py-1 items-center ">
                    <FiCalendar className="w-3 h-3 md:w-4 md:h-4 dark:text-white" />
                    <p className="text-xs ml-1 md:text-base md:leading-5 leading-3 tracking-wide dark:text-white">
                      {data?.date}
                    </p>
                    <p className="text-xs ml-5 md:text-base md:leading-5 leading-3 tracking-wide dark:text-white">
                      {data?.time}
                    </p>
                  </div>
                  <div className="flex items-center md:py-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    <p className="text-xs ml-1 md:text-base md:leading-5 leading-3 tracking-wide dark:text-white">
                      Ticket Price: ${data?.ticketPrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end mr-5">
                <div className="flex md:pt-28 md:ml-0  my-2 md:mt-0  -space-x-4">
                  <img
                    className="w-10 h-10 md:h-12 md:w-12 rounded-full border-2  md:border-4 dark:border-slate-600"
                    src="https://i.ibb.co/z4gB1Np/2a11d7dbd8f19d0fda66fb08908bd2ec-Expires-1668384000-Signature-P0-RD1-eygjg-FSEf30-P-l-Vgstv-Im-Eaz-E.png"
                    alt=""
                  />
                  <img
                    className="w-10 h-10 md:h-12 md:w-12  rounded-full border-2   md:border-4 dark:border-slate-600"
                    src="https://i.ibb.co/z4gB1Np/2a11d7dbd8f19d0fda66fb08908bd2ec-Expires-1668384000-Signature-P0-RD1-eygjg-FSEf30-P-l-Vgstv-Im-Eaz-E.png"
                    alt=""
                  />
                  <img
                    className="w-10 h-10 md:h-12 md:w-12 rounded-full border-2   md:border-4 dark:border-slate-600"
                    src="https://i.ibb.co/BCvByzK/ff7296334f7d23c8d90b72606f23624d-Expires-1668384000-Signature-EIizidt-Hm-Qo8zmv-MCZM3dd-Bhr-9-Whc-Ww.jpg"
                    alt=""
                  />
                </div>
                <h1 className="font-medium text-xs ml-1 md:text-base md:leading-5 leading-3 tracking-wide md:mt-24 md:ml-2 dark:text-white">
                  +30
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;

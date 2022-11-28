import React from "react";
import SingleEvent from "./components/SingleEvent/SingleEvent";
import { FiArrowLeft, FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { BiCaretDown, BiMenuAltLeft } from "react-icons/bi";
import { FaLessThanEqual } from "react-icons/fa";

// EventData
const EventDatas = [
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 1,
  },
];
// EventData1
const EventDatas1 = [
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 1,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 2,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 3,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 4,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 5,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 6,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
    ticketPrice: "99.00",
    id: 7,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
   ticketPrice: "99.00",
    id: 8,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
   ticketPrice: "99.00",
    id: 9,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
   ticketPrice: "99.00",
    id: 10,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
   ticketPrice: "99.00",
    id: 11,
  },
  {
    title: "Curabitur suscipit vestibulum urna id tincidunt.",
    img: "https://i.ibb.co/r3tbMmR/image-2.png",
    address: "18 Dynahost Street, 02 No Appartment, Texas, USA",
    date: "21.12.2022",
    time: "04.30pm",
   ticketPrice: "99.00",
    id: 12,
  },
];

const Events = () => {
  return (
    <>
      <div className="flex items-center justify-between md:mx-8 ">
        <div className="flex py-6 px-4 md:py-8 md:px-8 items-center">
          <h3 className="text-fuchsia-800 font-base text-xs md:text-lg	tracking-wide leading-5 md:leading-6 dark:text-white">
            Filter:
          </h3>
          <BiMenuAltLeft className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="flex items-center pr-2">
          <h3 className="font-base text-xs md:text-lg	tracking-wide leading-5 md:leading-6">
            Short by
          </h3>
          <div className="flex justify-center md:mr-5">
            <div>
              <div className="dropdown relative ml-4">
                <a
                  className="
          py-1
          md:py-2
          px-3
          md:px-6
          border-2
         md:w-full
          text-black
          rounded-sm
          flex
          items-center
        "
                >
                  <h3 className="font-base text-xs md:text-lg	tracking-wide leading-5 md:leading-6 dark:text-white">
                    Recent
                  </h3>
                  <BiCaretDown className="w-4 h-4 md:w-5 md:h-5 dark:text-white " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form action="">
        <div className="border-2 py-3 my-3 mx-3 md:mx-16">
          <div className="md:flex items-center justify-between">
            <div className="flex mx-3 items-center absolute">
              <h1 className="text-xs md:text-lg font-normal leading-4 md:leading-6 tracking-wide">
                Loaction:
              </h1>
              <input
                type="text"
                className="placeholder:text-fuchsia-600 placeholder:font-normal form-control w-full ml-1 pr-16 px-2 md:px-3 md:pr-36 py-1.5 text-base font-normal  bg-white border border-gray-300  outline-none dark:bg-black dark:placeholder:text-white"
                placeholder="San Diago, California, US"
              />
            </div>
            <FiMapPin className="relative top-2 left-[290px]  md:top-[-1px] md:left-[410px] text-fuchsia-600" />
            <div className="flex items-center mx-4 mt-10 md:mt-0 md:ml-[430px]">
              <h2 className="text-xs md:text-lg font-normal leading-4 md:leading-6 tracking-wide">
                Date:
              </h2>
              <input
                type="text"
                className="placeholder:text-fuchsia-600 placeholder:font-normal form-control w-full ml-1 pr-16 px-2 md:px-3 md:pr-36 py-1.5 text-base font-normal  bg-white border border-gray-300  outline-none dark:bg-black dark:placeholder:text-white"
                placeholder="04.30.2022 - 05.06.2022"
              />
            </div>
            <FiCalendar className="relative top-[-30px] left-[290px]  md:top-[-1px] md:left-[-80px] text-fuchsia-600" />
            <div className="flex items-center mx-4">
              <h1 className="text-xs md:text-lg font-normal leading-4 md:leading-6 tracking-wide">
                Distance:
              </h1>
              <div className="wrapper">
                <p className="text-fuchsia-600 text-xs md:text-lg font-normal leading-4 md:leading-6 tracking-wide ml-28 dark:text-white">
                  15-170(km)
                </p>
                <div className="container flex">
                  <div className="slider-track"></div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="30"
                    id="slider-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="70"
                    id="slider-2"
                  />
                </div>
                <div className="flex items-center justify-between gray-text ">
                  <div className="flex items-center">
                    <FaLessThanEqual className="dark:text-white" />
                    <p className="text-sm font-normal leading-4 tracking-wider dark:text-white">
                      1km
                    </p>
                  </div>
                  <p className="text-sm font-normal leading-4 tracking-wider ml-48 dark:text-white">
                    200km
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="custom-color">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium text-base	md:text-xl tracking-wide	leading-6	md:leading-6 md:ml-16 ml-3 mt-5 ">
            My Events
          </h3>
          <div className="flex mr-5 mt-3 md:hidden">
            <FiArrowLeft className="text-white w-6 h-6" />
            <FiArrowRight className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 mx-3 md:mx-2 md:pt-3 pb-10">
          <div className="flex justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 hidden md:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div>
              {EventDatas.map((data) => (
                <div key={data.id}>
                  <SingleEvent data={data} />
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex justify-center items-center hidden ">
            <div>
              {EventDatas.map((data) => (
                <div key={data.id}>
                  <SingleEvent data={data} />
                </div>
              ))}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 hidden md:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-fuchsia-700 font-medium text-xl tracking-wide text-custom mt-5 ml-3 md:ml-16 dark:text-white">
        Upcoming Events
      </h2>
      <div className="grid md:grid-cols-2 mx-3 md:mx-12 md:pt-3 pb-10">
        {EventDatas1.map((data) => (
          <div key={data.id}>
            <SingleEvent data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;

import React from "react";
import SingleMember1 from "./components/SingleMember/SingleMember1";
import { BiMenuAltLeft, BiCaretDown } from "react-icons/bi";

// MembersData1
const MembersData1 = [
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 1,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 2,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 3,
  },
];
// MembersData2
const MembersData2 = [
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 1,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 2,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 3,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 4,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 5,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 6,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 7,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 8,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 9,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 10,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 11,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 12,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 13,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 14,
  },
  {
    name: "Sreeti Mon",
    img: "https://i.ibb.co/DgJxP0p/Rectangle-170-3.png",
    title: "Bisexual, 27y, 19Mi Away",
    id: 15,
  },
];

const Member = () => {
  return (
    <>
      <div className="flex items-center justify-between md:mx-8 ">
        <div className="flex py-6 px-4 md:py-8 md:px-8 items-center">
          <h3 className="font-base text-xs md:text-lg	tracking-wide leading-5 md:leading-6">
            Filter:
          </h3>
          <BiMenuAltLeft className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="flex items-center pr-2">
          <h3 className="font-base text-xs md:text-lg	tracking-wide leading-5 md:leading-6">
            Short by
          </h3>
          <div className="flex justify-center">
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
                  <BiCaretDown className="w-4 h-4 md:w-5 md:h-5 dark:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-color">
        <h3 className="text-white font-medium text-xl md:block  md:ml-10 hidden pt-5">
          Just for you
        </h3>
        <div className="grid md:grid-cols-3 gap-4  md:gap-8  md:mx-10 mx-3 pt-7 md:pt-5 pb-5 md:pb-14">
          {MembersData1.map((data) => (
            <div key={data.id}>
              <SingleMember1 data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8  md:mx-10 mx-3 py-10 ">
        {MembersData2.map((data) => (
          <div key={data.id}>
            <SingleMember1 data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Member;

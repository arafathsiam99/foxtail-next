import React from "react";
import SingleNft1 from "./components/SingleNft/SingleNft1";
import { BiCaretDown } from "react-icons/bi";

// SingleNFTData
const SingleNFTData = [
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 1,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 2,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 3,
  },
];
// SingleNFTData1
const SingleNFTData1 = [
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 1,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 2,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 3,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 4,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 5,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 6,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 7,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 8,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 9,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 10,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 11,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 12,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 13,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 14,
  },
  {
    title: "Curabitur suscipit",
    img: "https://i.ibb.co/892vbyg/Rectangle-77.png",
    date: "28.08.2022",
    name: "NancyDyna",
    owner: "Sadiya",
    price: "1052 ",
    dollar: "654",
    id: 15,
  },
];

const NFT = () => {
  return (
    <>
      <div className="flex items-center justify-between md:mx-6 mx-2">
        <div className="flex items-center py-6 px-2 md:px-7">
          <h3 className="font-normal leading-4 md:leading-7 text-xs tracking-wide md:text-lg">
            Filter by Tag:
          </h3>
          <input
            type="text"
            id=""
            className="bg-white border-2 border-gray-300 text-sm rounded-sm  block w-2/5   px-1 md:px-6 py-1 ml-1 md:ml-3 md:p-2.5   dark:placeholder-gray-400 outline-none  dark:bg-black"
            placeholder="bdsm,"
            required
          />
        </div>
        <div className="flex items-center md:mr-7 mr-2">
          <h3 className="font-normal leading-4  text-xs tracking-wide md:text-lg">
            Short by
          </h3>
          <div className="flex items-center">
            <div>
              <div className="dropdown relative ml-2">
                <a
                  className="
          py-1.5
          px-1.5
          md:p-1
          md:px-4 
          border-2
          border-gray-300
         md:w-full
          text-black
          rounded-sm
          flex
          items-center
        "
                >
                  <h3 className="text-xs tracking-wide md:text-lg mr-5 md:mr-0 dark:text-white">
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
        <h3 className="text-white text-xl font-medium leading-6 ml-12 pt-4 hidden md:block">
          Popular NFTs
        </h3>
        <div className="grid md:grid-cols-3  md:mx-10  pt-2 pb-5 mx-3">
          {SingleNFTData.map((data) => (
            <div key={data.id}>
              <SingleNft1 data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 md:mx-10 pb-16 mx-3">
        {SingleNFTData1.map((data) => (
          <div key={data.id}>
            <SingleNft1 data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default NFT;

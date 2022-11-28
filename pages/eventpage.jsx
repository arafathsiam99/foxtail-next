import React from "react";
import { FiChevronRight, FiShare2 } from "react-icons/fi";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { BiMessageDots } from "react-icons/bi";
import BuyNow from "./components/BuyNow/BuyNow";
import SingleEvent from "./components/SingleEvent/SingleEvent";
import Image from "next/image";

const EventPage = () => {
  return (
    <>
      <h3 className="flex items-center font-medium text-gray-400 py-4 ml-4 md:ml-14 text-base	 md:text-lg leading-6	 tracking-wide	">
        Events
        <span>
          <FiChevronRight />
        </span>
        Curabitur suscipit vestibulum urna id tincidunt
      </h3>
      <div className="grid md:grid-cols-3">
        <div className="relative col-span-2 md:ml-14 md:mr-28 mx-4">
          <Image
            src="https://i.ibb.co/r3tbMmR/image-2.png"
            alt=""
            className="w-full h-full "
          />
          <div className="backdrop-blur-md justify-end absolute inset-x-0  flex bottom-0 h-[56px] w-full  text-white items-center ">
            <h3 className="font-medium	">Share</h3>
            <FiShare2 className="mx-4" />
            <h3 className="border-2 border-white rounded-3xl mx-4 px-4 py-0.5 font-medium	">
              Invite Friends
            </h3>
          </div>
        </div>
        <div>
          <h1 className="m-3 md:m-0 font-medium text-2xl	 md:text-3xl md:leading-10	tracking-wide">
            Curabitur suscipit vestibulum urna id tincidunt
            <button className="bg-fuchsia-700 text-white font-medium text-lg rounded-3xl px-3 py-0.5 ml-5">
              Public
            </button>
          </h1>
          <p className="text-gray-400 my-2">
            Hosted by:
            <span className="text-fuchsia-600 underline decoration-solid">
              NancyDyna
            </span>
          </p>
          <div className="flex items-center text-lg	font-medium my-2">
            <CiLocationOn />
            <p>18 Dynahost Street, 02 No Appartment, Texas, USA</p>
          </div>
          <div className="flex items-center text-lg	font-medium my-2">
            <CiCalendar />
            <p>Date: 21.12.2022</p>
            <p className="ml-6">Time: 04.30pm</p>
          </div>
          <div className="flex items-center mt-5">
            <button className="bg-fuchsia-700 text-white rounded-3xl px-3 py-1 text-xl font-medium">
              Going(33)
            </button>
            <button className="border-2 border-fuchsia-700 rounded-3xl px-3 py-1 ml-5 text-xl font-medium text-custom">
              Interested(41)
            </button>
          </div>
          <div className="border-2 mt-7 mr-5">
            <h2 className="border-b-2 px-4 py-4 font-normal text-xl">
              Seat Left: <span className="text-red-500"> Only 17</span>
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="px-4 py-4 font-medium text-xl">
                  Ticket Price: <span className="text-fuchsia-700">$64</span>
                </h2>
              </div>
              <div className="pr-3">
                <BuyNow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3 py-5 ml-14 mr-12 ">
        <div className="border-2 px-3 col-span-2">
          <h1 className="text-lg font-medium py-2">Descriptions</h1>
          <p className="text-gray-400 text-lg">
            Nunc ultrices, eros ac auctor accumsan, felis sapien volutpat est, a
            hendrerit nisi risus quis sem. Vivamus porttitor purus non mauris
            venenatis, quis gravida risus consequat. Curabitur suscipit
            vestibulum urna id tincidunt. Aliquam ac risus quis nibh pretium
            pulvinar. Nunc ultrices, eros ac auctor accumsan, felis sapien
            volutpat est, a hendrerit nisi risus quis sem. Vivamus porttitor
            purus non mauris venenatis, quis gravida risus consequat. Curabitur
            suscipit vestibulum urna id tincidunt. Aliquam ac risus quis nibh
            pretium pulvinar. felis sapien volutpat est, a hendrerit nisi risus
            quis sem.
            <div className="pt-5 pb-10">
              Vivamus porttitor purus non mauris venenatis, quis gravida risus
              consequat. Curabitur suscipit vestibulum urna id tincidunt.
              Aliquam ac risus quis nibh pretium pulvinar. Nunc ultrices, eros
              ac auctor accumsan, felis sapien volutpat est, a hendrerit nisi
              risus quis sem.
            </div>
          </p>
        </div>
        <div className="border-2 px-3">
          <h1 className="text-lg font-medium py-2">Map View</h1>
          <Image
            src="https://i.ibb.co/wYxpqP9/Rectangle-116.png"
            alt=""
            className="w-full mb-4"
            height={400}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 py-5 gap-5 mx-12">
        <div className="border-2 px-3 col-span-2">
          <h1 className="text-xl font-medium py-2">Gallery</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 py-3">
            <Image src="https://i.ibb.co/mDVBzpL/Rectangle-140.png" alt="" />
            <Image src="https://i.ibb.co/Wxg1c5Q/Rectangle-141.png" alt="" />
            <Image src="https://i.ibb.co/9bKT4z2/Rectangle-142.png" alt="" />
            <Image src="https://i.ibb.co/PczpTbR/Rectangle-143.png" alt="" />
            <Image src="https://i.ibb.co/VBYPLYL/Rectangle-144.png" alt="" />
            <Image src="https://i.ibb.co/SPXcF5k/Rectangle-145.png" alt="" />
          </div>
        </div>
        <div className="border-2 px-3">
          <h1 className="text-xl font-medium py-2">Going(33)</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/FY8QdCM/Ellipse-43-1.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Courtney Henry</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/6mPZvxb/Ellipse-43-2.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Arlene McCoy</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/vVpBJZW/Ellipse-43-3.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Leslie Alexander</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/L5T9dVh/Ellipse-43-4.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Darrell Steward</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/V9Y5VPz/Ellipse-43-5.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Kristin Watson</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/chhWFXk/Ellipse-43-6.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Jenny Wilson</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <Image
                  className="p-1 w-12 h-12 rounded-full relative"
                  src="https://i.ibb.co/k66ZZzg/Ellipse-43-7.png"
                  alt="Bordered avatar"
                />
                <div className="bg-green-600 rounded-full w-3 h-3 absolute top-1 right-1"></div>
              </div>
              <h1 className="text-lg font-normal ml-2">Dianne Russell</h1>
            </div>
            <div className="border-2 border-fuchsia-600 px-4 py-2 rounded-md">
              <BiMessageDots className="text-fuchsia-600 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 my-4 p-3 mx-14">
        <h1 className="font-medium text-lg ">Comments</h1>
        <div className="flex py-2 items-center">
          <div>
            <Image
              src="https://i.ibb.co/NSzs8Hw/Ellipse-43.png"
              alt=""
              className="w-8 h-8"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-lg	">JustinBruno</h1>
            <p className="text-gray-400">12.06.2021</p>
          </div>
        </div>
        <p className="text-gray-400  text-lg pr-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          pellentesque nunc, diam convallis. At netus libero etiam tincidunt
          lectus orci maecenas pharetra netus. Adipiscing velit justo, amet est
          volutpat. Id vulputate vel quis dictum integer eget facilisis. Rhoncus
          mauris lobortis quam nisi, nisl risus, mi amet, turpis.
        </p>
        <div className="flex py-2 items-center">
          <div>
            <Image
              src="https://i.ibb.co/NSzs8Hw/Ellipse-43.png"
              alt=""
              className="w-8 h-8"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-lg	">JustinBruno</h1>
            <p className="text-gray-400">12.06.2021</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg pr-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          pellentesque nunc, diam convallis. At netus libero etiam tincidunt
          lectus orci maecenas pharetra netus. Adipiscing velit justo, amet est
          volutpat. Id vulputate vel quis dictum integer eget facilisis. Rhoncus
          mauris lobortis quam nisi, nisl risus, mi amet, turpis.
        </p>
        <div className="my-4">
          <h1 className="text-fuchsia-600 underline	 decoration-solid font-medium text-lg">
            Read More Comments
          </h1>
        </div>
        <p className="font-medium text-lg mb-2">Share your thought.</p>

        <form>
          <div className="md:flex">
            <input
              type="input"
              id="comment"
              className="block py-3 pl-2 md:w-1/2 w-full text-sm outline-none bg-gray-50  border-2 md:border-r-0 "
              placeholder="Write your experiences"
              required=""
            />
            <button
              type="submit"
              className="text-white px-7  rounded-sm my-btn font-medium text-xl pt-2  "
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      <h1 className="font-medium text-lg ml-12 pt-4">Other Events</h1>
      <div className="grid md:grid-cols-2 px-8">
        <SingleEvent />
        <SingleEvent />
      </div>
    </>
  );
};

export default EventPage;

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-color">
        <div className=" bg-gray-200 h-[2px] md:mx-16"></div>
        <div className="items-center md:ml-16 md:flex md:pb-14 mt-5">
          <div className="md:flex md:items-center">
            <Image
              src="https://i.ibb.co/Cvj6VX3/Group-62.png"
              alt=""
              className="mt-7 md:mt-0 ml-32 md:ml-0"
              width={80}
              height={80}
            />
            <div className="md:ml-16 md:my-0 my-5 footer-text flex justify-center">
              <ul className="md:flex md:space-x-2">
                <div className="flex items-center">
                  <li className="font-normal text-sm  tracking-wide my-2 md:my-0 dark:text-white">
                    Contact Us
                  </li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-3"></div>
                </div>
                <div className="flex items-center">
                  <li className="font-base text-sm  tracking-wide my-2 md:my-0 dark:text-white">
                    Terms
                  </li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-3 "></div>
                </div>
                <div className="flex items-center">
                  <li className="font-normal text-sm  tracking-wide my-2 md:my-0 dark:text-white">
                    Privacy
                  </li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-3"></div>
                </div>
                <div className="flex items-center">
                  <li className="font-normal text-sm  tracking-wide my-2 md:my-0 dark:text-white">
                    2257 Compliance
                  </li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-3"></div>
                </div>
                <div className="flex items-center">
                  <li className="font-normal text-sm  tracking-wide my-2 md:my-0 dark:text-white">
                    AntiSpam
                  </li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-3"></div>
                </div>
                <div className="flex items-center">
                  <li className="font-normal text-sm  tracking-wide my-2 md:my-0 dark:text-white">
                    Law Enforcement
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className=" text-center  border-t-2 md:border-t-0 md:ml-[430px]">
            <p className=" font-normal text-sm leading-5 tracking-wide my-2 md:my-0 mt-5 md:mt-0 footer-text dark:text-white">
              2022 Foxtail LLC. All reights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

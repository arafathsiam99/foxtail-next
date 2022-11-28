import Image from "next/image";
import React from "react";


const Curburit = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl">Curabitur suscipit</h1>
        </div>
        <div className="flex">
          <Image
            src="https://i.ibb.co/JFFDtN2/Frame-413.png"
            alt=""
           height={32}
            width={32}
          />
          <Image
            src="https://i.ibb.co/2qJDWrX/Frame-412.png"
            alt=""
            height={32}
            width={32}
          />
          <Image
            src="https://i.ibb.co/JFc5zv8/Frame-411.png"
            alt=""
            height={32}
            width={32}
          />
          <Image
            src="https://i.ibb.co/Tg2K5kn/Frame-410.png"
            alt=""
            height={32}
            width={32}
          />
        </div>
      </div>
      <p className="mt-2">by: NancyDyna</p>
      <p className="mt-2">Owned by: Arifa</p>
      <div className="flex mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="ml-1">9.67k View</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <p className="ml-1">02 Save</p>
      </div>
      <div className="bg-gray-200 my-5 p-3">
        <h3>Perks:</h3>
        <p>
          Message from creator:- Get etcVivamus porttitor purus non mauris
          venenatis, quis gravida risus consequat. Curabitur suscipit vestibulum
          urna id tincidunt.
        </p>
        <p>
          *Perks are only good for first purchase unless specified by creator
        </p>
      </div>

      
    </div>
  );
};

export default Curburit;

import React from "react";

const EventRibbon = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-16 w-16">
        <div className="absolute transform  bg-fuchsia-900 text-center text-white  left-[-10px] top-[20px] w-[90px]">
          Event
        </div>
        <div className="absolute transform -z-10  bg-fuchsia-900 text-center text-white  left-[-16px] top-[59px] rotate-45 w-[100px]">Event</div>
      </div>
    </>
  );
};

export default EventRibbon;

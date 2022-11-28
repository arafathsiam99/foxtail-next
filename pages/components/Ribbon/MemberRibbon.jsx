import React from "react";

const MemberRibbon = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-16 w-16">
        <div className="absolute transform  bg-fuchsia-900 text-center text-white shadow-lg  left-[-10px] top-[20px] w-[90px]">
          Member
        </div>
        <div className="absolute transform -z-10  bg-fuchsia-900 text-center text-white  left-[-16px] top-[59px] rotate-45 w-[100px]">
          Member
        </div>
      </div>
    </>
  );
};

export default MemberRibbon;

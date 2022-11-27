import React from "react";
import SingleEvent from "../SingleEvent/SingleEvent";
import SingleMember from "../SingleMember/SingleMember";
import SingleMember1 from "../SingleMember/SingleMember1";
import SingleNft from "../SingleNft/SingleNft";
import TopCreator from "../TopCreator/TopCreator";

const Banner = () => {
 
  return (
    <>
      <div className="custom-color ">
        <h1 className="text-white text-3xl leading-2 tracking-wide md:leading-8  md:text-5xl md:ml-14 ">
          Trending
        </h1>
        <div className="grid md:grid-cols-3 ">
          <SingleNft />
        </div>
        <div className="grid md:grid-cols-2">
          <SingleEvent />
          <SingleEvent />
        </div>
        <div className="grid md:grid-cols-3">
          <SingleMember />
        </div>
      </div>
      <h1 className=" font-medium	tracking-wide	 text-3xl md:text-5xl leading-10  ml-1 md:ml-14 py-3 text-red-500">
        Top Creators
      </h1>
      <div className="grid md:grid-cols-3 gap-3 md:px-16 px-2 py-10">
        <TopCreator />
      </div>
      <h1 className=" font-medium	tracking-wide	 text-5xl flex items-start py-3 text-custom">
        Latest
      </h1>
      <div className="grid md:grid-cols-3">
        <SingleNft />
      </div>
      <div className="grid md:grid-cols-2 md:mx-10">
        <SingleEvent />
        <SingleEvent />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:mx-16 mx-5 pt-5 pb-8  ">
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
      </div>
    </>
  );
};

export default Banner;

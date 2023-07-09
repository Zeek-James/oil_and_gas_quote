import React from "react";
import { BidDetails, Comments, Parameters, Summary } from "../components";
import { IoMdClose } from "react-icons/io";

type Props = {
  onClick: () => void;
};

export const UnitPriceDuties = ({ onClick }: Props) => {
  return (
    <div className="p-4">
      <div className="flex justify-between border-b border-b-blue-500 pb-2 mb-2">
        <h1 className="text-2xl font-bold">Update Quote</h1>
        <button onClick={onClick}>
          <IoMdClose />
        </button>
      </div>
      <Parameters />
      <BidDetails quote="unitPriceDuties" />
      <div className="border-b border-gray-300  mb-2" />
      <Summary />
      <div className="border-b border-gray-300  mb-2" />
      <Comments />
      <div className="border-b border-b-blue-500  my-2 " />
      <div className="flex justify-end">
        <button
          onClick={() => alert("Saved")}
          className=" rounded-md py-2 px-4 mt-2 ml-auto text-gray-500 font-semibold text-sm  bg-gray-200 hover:bg-gray-100 active:scale-95 transition-all duration-300"
        >
          Save
        </button>
        <button
          onClick={() => alert("Submitted")}
          className=" rounded-md p-2 mt-2 ml-3 text-gray-500 font-semibold  text-sm bg-gray-200 hover:bg-gray-100 active:scale-95 transition-all duration-300"
        >
          Submit/Approve
        </button>
      </div>
    </div>
  );
};

import React from "react";

type Props = {};

export const Comments = (props: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-base font-semibold mb-3">Comments</h1>
      <textarea
        name=""
        id=""
        className="w-full min-h-[100px] border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md"
      ></textarea>
      <button
        onClick={() => alert("New Post")}
        className=" rounded-md p-2 mt-2 ml-auto text-gray-500 font-semibold text-sm  bg-gray-200 hover:bg-gray-100 active:scale-95 transition-all duration-300"
      >
        Post Comment
      </button>
    </div>
  );
};

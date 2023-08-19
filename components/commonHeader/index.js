import React from "react";

const CommonHeader = ({ heading }) => {
  return (
    <button className="py-1.5 px-2.5 bg-[hsla(0,0%,100%,.08)] text-sm	text-[#999] cursor-text	uppercase	">
      {heading}
    </button>
  );
};

export default CommonHeader;

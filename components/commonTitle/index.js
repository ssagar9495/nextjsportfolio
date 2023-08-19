import React from "react";

const CommonTitle = ({ title }) => {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "29px",
        fontWeight: "700",
        marginTop: "20px",
        color: "white",
      }}
    >
      {title}
    </button>
  );
};

export default CommonTitle;

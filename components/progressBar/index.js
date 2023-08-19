import React from "react";

const ProgressBar = ({ progress, height, title }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "gray",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className="my-8">
      <div className="flex justify-between	items-center mb-2.5	">
        <div className="text-white italic">{title}</div>
        <div className="text-white italic">{`${progress}%`}</div>
      </div>
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
      </div>
    </div>
  );
};

export default ProgressBar;

// style={{ color: "white", fontStyle: "italic" }}
// style={{ color: "white", fontStyle: "italic" }}

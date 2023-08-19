import React from "react";
import CommonHeader from "@/components/commonHeader";
import CommonTitle from "@/components/commonTitle";
import styles from "./styles.module.scss";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { SKILLS, SERVICE } from "@/components/constant";

const Service = () => {
  return (
    <main className={styles.mainContainer}>
      <div data-aos="fade-right">
        <CommonHeader heading="Skills" />
        <CommonTitle title="What I Do" />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10  grayscale mb-20">
          {SERVICE.map((obj, i) => {
            return (
              <div className="bg-[#323232] py-10 px-4 shadow-md cursor-pointer ">
                <div className={styles.numberContainer}>{`0${i + 1}`}</div>
                <h3 class={styles.title}>{obj.name}</h3>
                <p>{obj.des}</p>
              </div>
            );
          })}
        </div>
        <CommonTitle title="Skills" />
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mx-2">
            {SKILLS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex bg-[#323232] cursor-pointer	flex-col justify-center items-center py-8 px-12 border-solid	border-[#111] border-2	w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-2 hover:bg-[#6F6F6F]  ${styles.readContainer} `}
                onClick={() => window.open(row?.link, "_blank")}
              >
                <img src={row.img} style={{ height: "55px" }} />
                <h3 className="mt-5 text-white text-normal text-xl">
                  {row.techName}
                </h3>
                <div className={styles.readDocs}>
                  READ DOCS
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;

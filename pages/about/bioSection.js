import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { CustomDivider } from "@/components/customDivider";
import { BIO_DATA } from "@/components/constant";

const BioSection = () => {
  return (
    <>
      <Image
        className="mt-10"
        src={"/1.jpeg"}
        width={300}
        height={200}
        alt="Picture of the Sagar Rana"
      />
      <div className="mt-9">
        <Typography variant="h5" className="font-bold text-white my-1">
          {BIO_DATA.name}
        </Typography>
        <Typography className="my-1">{BIO_DATA.designation}</Typography>
      </div>
      <CustomDivider />
      <p className="mb-5">{BIO_DATA.bio1}</p>
      <p>{BIO_DATA.bio2}</p>
    </>
  );
};
export default BioSection;

import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { EDUCATION } from "@/components/constant";

const EducationExSection = () => {
  return (
    <div className="py-14 px-5 bg-black my-16">
      <Grid container spacing={2}>
        {EDUCATION.map((obj, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" fontWeight="700" color="white">
                {obj.heading}
              </Typography>
              <div className={styles.educationInfo}>
                {obj.INFO.map((obj, i) => {
                  return (
                    <ul className="py-5">
                      <li>
                        <div className="flex relative w-full items-center">
                          <div className="pl-5  w-7/12">
                            <span className="text-white py-2.5 px-4 rounded-3xl bg-[hsla(0,0%,100%,.065)]	">
                              {obj.year}
                            </span>
                          </div>
                          <div className="w-5/12">
                            <h3 className="text-white font-medium	">
                              {obj.title1}
                            </h3>
                            <span className="text-sm">{obj.title2}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default EducationExSection;

import React from "react";
import { Grid, Typography } from "@mui/material";
import ProgressBar from "@/components/progressBar";
import { SKILLS_kNOWN } from "@/components/constant";

const SkillsSection = () => {
  return (
    <div className="py-14 px-5 bg-black my-16">
      <Grid container spacing={2}>
        {SKILLS_kNOWN.map((obj, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" fontWeight="700" color="white">
                {obj.heading}
              </Typography>
              <div className="pt-8 pr-10">
                {obj.INFO.map((obj, i) => {
                  return (
                    <ProgressBar
                      title={obj.title}
                      progress={obj.percentage}
                      height={2}
                    />
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

export default SkillsSection;

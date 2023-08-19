import React from "react";
import { Grid } from "@mui/material";
import { PERSOAL_INFO } from "@/components/constant";

const PersonalInfoSection = () => {
  return (
    <Grid container spacing={2}>
      {PERSOAL_INFO.map((arrayobj, index) => {
        return (
          <Grid item xs={12} sm={6}>
            {arrayobj?.INFO?.map((obj, i) => {
              return (
                <div className="flex my-1.5 w-full">
                  <div className="font-medium text-white	w-4/12">
                    {obj.label}
                  </div>
                  <div className="w-8/12">{obj.value}</div>
                </div>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};
export default PersonalInfoSection;

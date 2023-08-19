import React from "react";
import { Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { KNOWLEDGE } from "@/components/constant";

const KnowledgeSection = () => {
  return (
    <div className="py-16 px-2.5 my-16">
      <Grid container spacing={2}>
        {KNOWLEDGE.map((obj, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" fontWeight="700" color="white">
                {obj.heading}
              </Typography>
              <div className="py-8 pt-10">
                {obj?.INFO?.map((str, i) => {
                  return (
                    <div className="mb-2.5 text-sm">
                      <PlayArrowIcon
                        fontSize="10px"
                        className="mr-2.3 text-white"
                      />
                      {str}
                    </div>
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

export default KnowledgeSection;

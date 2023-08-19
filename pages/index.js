import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const SOCIAL_HANDLER = [
  {
    icon: <LinkedInIcon style={{ marginRight: "15px", cursor: "pointer" }} />,
    link: "https://www.linkedin.com/in/sagar-rana-abab22228/",
  },
  {
    icon: <TwitterIcon style={{ marginRight: "15px", cursor: "pointer" }} />,
    link: "https://twitter.com/ssagar9495",
  },
  {
    icon: <InstagramIcon style={{ marginRight: "15px", cursor: "pointer" }} />,
    link: "https://www.instagram.com/portfoliosagar9495/",
  },
  {
    icon: <GitHubIcon style={{ marginRight: "15px", cursor: "pointer" }} />,
    link: "https://github.com/ssagar9495",
  },
];

export default function Home() {
  const [onHover, setOnHover] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });
  return (
    <>
      <main className="flex justify-between	h-screen pt-[140px] pb-[200px]">
        <Grid data-aos="fade-right" container spacing={2}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "end" },
            }}
          >
            <div
              className="relative"
              style={{
                minWidth: "300px",
                minHeight: "300px",
                borderRadius: "100%",
              }}
            >
              <div className={styles.imageCss}></div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              paddingLeft: "50px!important",
              display: "flex",
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <div>
              <div className="text-5xl font-extrabold	uppercase mb-4 text-white pt-6">
                SAGAR RANA
              </div>
              <div className="font-medium text-2xl text-white py-2">
                <Typewriter
                  options={{ autoStart: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Programmer")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Web App Developer")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Mobile App Developer")
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>

              <div
                className="font-medium my-5 text-lg	"
                style={{ maxWidth: "450px" }}
              >
                Creative Software Development Engineer based in Chandigarh
                (India) and happy to face for new challenges to grow and develop
                my skills.
              </div>
              <div style={{ display: "flex" }}>
                {SOCIAL_HANDLER.map((socialObj, i) => {
                  return (
                    <div
                      onClick={() => window.open(socialObj?.link, "_blank")}
                      onMouseEnter={() => setOnHover(i)}
                      onMouseLeave={() => setOnHover("")}
                      style={{
                        marginTop: onHover === i ? "-5px" : "0px",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {socialObj.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

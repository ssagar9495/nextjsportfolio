import React from "react";
import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles.module.scss";
import { TESTOMONIALS } from "@/components/constant";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Testimonials = () => {
  return (
    <div className="py-14 px-5 my-16">
      <Typography variant="h5" fontWeight="700" color="white">
        Testimonials
      </Typography>
      <div style={{ marginTop: "50px", cursor: "e-resize" }}>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={1000}
          swipeable={false}
          draggable={true}
          customTransition="all .5 ease"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {TESTOMONIALS.map((item, i) => {
            return (
              <div>
                <li className="w-full inline-block px-8">
                  <div className="w-full clear-both float-left relative">
                    <div className={styles.text}>
                      <p style={{ minHeight: "200px" }}>{item.title}</p>
                    </div>
                  </div>
                </li>
                <div className={styles.details}>
                  <div className={styles.image}>
                    <div
                      className={styles.main}
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                  </div>
                  <div className={styles.info}>
                    <h3 className="text-white font-medium	">{item.name}</h3>
                    <span className="text-sm">{item.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

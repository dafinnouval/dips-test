import React from "react";
import { Button, Stack } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { TfiArrowTopRight } from "react-icons/tfi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

const CarouselRow = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="d-block w-100 banner1" src={require("../assets/images/banner1.png")} alt="First slide" />

          <div className="bg-black pb-5">
            <div className="container" style={{ marginTop: "-169px" }}>
              <Stack direction="horizontal" gap={3}>
                <div className="text-banner">
                  we assist you in <br /> solving tomorrow’s <br /> <span className="text-white">problems today</span>
                </div>
                <Button className="btn-view ms-auto text-black" variant="">
                  ABOUT US
                  <TfiArrowTopRight className="ms-4 " style={{ fontSize: "65px" }} />
                </Button>
              </Stack>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="d-inline w-100 banner1" src={require("../assets/images/banner2.png")} alt="Second slide" />

          <div className="bg-black pb-5">
            <div className="container" style={{ marginTop: "-169px" }}>
              <Stack direction="horizontal" gap={3}>
                <div className="text-banner">
                  Creating High <br /> performance <br /> <span className="text-white">Digital Asset</span>
                </div>
                <Button className="btn-view ms-auto text-black" variant="">
                  ABOUT US
                  <TfiArrowTopRight className="ms-4 " style={{ fontSize: "65px" }} />
                </Button>
              </Stack>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselRow;

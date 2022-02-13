import React from "react";
import { Block, Flex, useTheme } from "vcc-ui";
import { CarouselFooter } from "./CarouselFooter";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination]);
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselProps } from "../../../model/CarouselProps";

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const { breakpoints } = useTheme();
  return (
    <Block>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          // when window width is >= 320px
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: `.arrow-next`,
          prevEl: `.arrow-prev`,
        }}
        pagination={{
          type: "bullets",
          el: ".pagination",
          clickable: true,
        }}
      >
        {children?.map((child, index: number) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        <Flex
          extend={{
            textAlign: "center",
            [breakpoints.fromM]: {
              display: "none",
            },
          }}
        >
          <Block className={"pagination"}></Block>
        </Flex>
        <CarouselFooter clickNext={() => {}} clickPrev={() => {}} />
      </Swiper>
    </Block>
  );
};

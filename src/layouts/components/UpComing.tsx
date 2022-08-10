import Heading from "components/heading/Heading";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useUpComing from "./UpComing.hook";
import "swiper/css";
import MovieCard from "./MovieCard";

export default function UpComing() {
  const { items } = useUpComing();
  return (
    <div>
      <Heading>😭 Up coming</Heading>
      <Swiper className="p-2" spaceBetween={50} slidesPerView={1}>
        {items.map((it, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={it} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

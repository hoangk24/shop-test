import Heading from "components/heading/Heading";
import MovieCard from "components/movie-card/MovieCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useTopRate from "./TopRate.hook";

export default function TopRate() {
  const { items, handleNext } = useTopRate();

  if (!items.length) {
    return null;
  }

  return (
    <div>
      <Heading isHaveNav={false} large>
        🙄 Top Rate
      </Heading>
      <Swiper
        className="p-2"
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            handleNext();
          }
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        {items.map((it, index) => (
          <SwiperSlide key={index}>
            <MovieCard item={it} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

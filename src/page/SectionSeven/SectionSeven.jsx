import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Profile from "./Profile";

export default function SectionSeven() {
  return (
    <div className="sectionSeven">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <Swiper
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile (default)
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Laptops
          1200: { slidesPerView: 3 }, // Large Screens
          1400: { slidesPerView: 4 }, // Extra Large Screens
        }}
        observer={true}
        observeParents={true}
        resizeObserver={true}
      >
        <SwiperSlide>
          <div className="slide-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Profile />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Profile />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Profile />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Profile />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Profile />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <Profile />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

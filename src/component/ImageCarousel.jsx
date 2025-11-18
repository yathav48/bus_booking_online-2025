// ImageCarousel.js
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import newcard1 from '../assets/newcardone.webp'
import newcard2 from '../assets/newcardtwo.webp'
import newcard3 from '../assets/newcardthree.webp'
import newcard4 from '../assets/newcardfour.webp'
import newcard5 from '../assets/newcardfive.webp'
import newcard7 from '../assets/newcardseven.webp'

const carouselData = [
  { id: 1, bgImage: newcard1, style: { backgroundSize: "cover" } },
  { id: 2, bgImage: newcard2 },
  { id: 3, bgImage: newcard3 },
  { id: 4, bgImage: newcard4 },
  { id: 5, bgImage: newcard5 },
  { id: 6, bgImage: newcard7 },
];

export default function ImageCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [hovered, sethovered] = useState(false);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <>
      
        <div className="mb-4">
          <div className="text-2xl font-bold">What's New</div>
      </div>
      <div
        onMouseEnter={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
        className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView="auto"
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          allowTouchMove={true}
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id} className="max-w-[320px] rounded-full">
              <div
                className="rounded-2xl overflow-hidden shadow-md h-43 md:h-43 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-white !rounded-full transition-opacity z-10 w-10 h-10 flex items-center justify-center duration-300 ${hovered ? "opacity-100 z-1" : "opacity-0"}`}
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextRef}
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-white !rounded-full transition-opacity z-10 w-10 h-10 flex items-center justify-center duration-300 ${hovered ? "opacity-100 z-1" : "opacity-0"}`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}

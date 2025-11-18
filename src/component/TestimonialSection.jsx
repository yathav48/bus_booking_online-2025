import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { id } from "date-fns/locale";

const carouselData = [
    { id: 1, title: "Clean Buses. Courteous Staff", name: "Sriharan", year: "redbus customer since 2017" },
    { id: 2, title: "Perfect Ride. Best bus ever..", name: "Bensha Bennet", year: "redbus customer since 2019" },
    { id: 3, title: "Clean Buses. Great Experience.", name: "Karthik Moorty", year: "redbus customer since 2017" }
]
export default function Testimonialsection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

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
        <article>
            <div className='flex flex-col my-2'>
                <div className='text-2xl font-bold text-black'>Testimonials</div>
                <span className='text-gray-600'>Hear from our satisfied customers in their own words
                </span>
            </div>
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
                    <SwiperSlide key={item.id} className="max-w-[240px]">
                        <div className='flex flex-col gap-4 bg-gray-100 p-4 border rounded-2xl'>
                            <div>
                                {item.title}
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold text-black'>{item.name}</span>
                                <span className='text-gray-600'>{item.year}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </article>
    )
}
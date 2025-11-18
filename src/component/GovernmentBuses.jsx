import localbus1 from '../assets/localbusone.png';
import localbus2 from '../assets/localbustwo.png';
import localbus4 from '../assets/localbusfour.png';
import redbus from '../assets/bus-icon.svg';
import { useEffect, useRef, useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";


const busdata = [
    { id: 1, icon: localbus1, name: "APSRTC", rating: "3.85", content: "1539 services including Garuda, Garuda plus and more", bustype: "official booking partner for APSRTC" },
    { id: 2, icon: localbus2, name: "KERALA RTC", rating: "3.85", content: "940 services including Swift, AC Multiaxle and more", bustype: "offeicial booking partner for KSRTC" },
    { id: 3, icon: localbus4, name: "KTLC", rating: "3.85", content: "60 services including Volvo Bus, AC & Non AC Bus and more", bustype: "official booking partner for KTLC" },
    { id: 4, icon: localbus1, name: "MTC", rating: "3.65", content: "1200 services including Deluxe, AC Bus and more", bustype: "official booking partner for MTC" },
    { id: 5, icon: localbus2, name: "TNSTC", rating: "3.75", content: "1000 services including Super Deluxe, AC Bus and more", bustype: "official booking partner for TNSTC" },
];
export default function GovernmentBuses() {
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
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div>
            <div className='mb-4 font-bold text-2xl'>
                <div>Government Buses</div>
            </div>
            <div
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
             className='relative'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView="auto"
                    breakpoints={{
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 }
                    }}
                    onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                    >
                    {busdata.map((bus) => (
                        <SwiperSlide key={bus.id} className='max-w-[310px] shadow-gray-400 shadow-md border border-gray-200 rounded-2xl'>
                            <div className='rounded-2xl p-3 flex flex-col gap-2 '>
                                <div className='flex flex-row gap-2 border-b-1 border-gray-300 p-2'>
                                    <img src={bus.icon} />
                                    <div className='flex flex-row gap-2'>
                                        <span className='text-black font-semibold text-md'>
                                            {bus.name}
                                        </span>
                                        <div className='text-white'>
                                            <div className='flex flex-row items-center gap-1 px-2 text-sm bg-green-900 rounded-lg'>
                                                <FaStar /><div>
                                                    {bus.rating}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm text-gray-500 flex flex-col gap-4 p-2'>
                                    <div className='text-center'>
                                        {bus.content}
                                    </div>
                                    <div className='text-sm text-black bg-gray-300 py-1 rounded-lg flex flex-row gap-1 justify-center items-center'>
                                        <img src={redbus} alt="" className='h-4 w-4' />
                                        <div>
                                            {bus.bustype}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    ref={prevRef}
                    className={`absolute top-1/2 left-0 -translate-y-1/2 bg-white text-black p-2 !rounded-full shadow-lg ${hovered ? 'opacity-100 z-1' : 'opacity-0'}`}>
                    <IoIosArrowBack />
                </button>
                <button
                    ref={nextRef}
                    className={`absolute top-1/2 right-0 -translate-y-1/2 bg-white text-black p-2 !rounded-full shadow-lg ${hovered ? 'opacity-100 z-1' : 'opacity-0'}`}>
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}
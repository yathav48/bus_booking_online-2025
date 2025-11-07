import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "./OffersCard.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import offerbg1 from '../assets/busgirl.png'
import offerbg2 from '../assets/buscard.png'
import offerbg4 from '../assets/girlwithmobile.png'
import offerbg5 from '../assets/moneycard.png'



const offersData = [
    { id: 1, type: "Bus", title: "Save up to 500 on bus tickets", valid: "Valid till 31 Nov", code: "BUS500", bgImage: offerbg1 },
    { id: 2, type: "Bus", title: "Save up to 250 on bus tickets", valid: "Valid till 30 Nov", code: "BUS250", bgImage: offerbg2 },
    { id: 3, type: "Bus", title: "Save up to 300 in AP, Telangana", valid: "Valid till 30 Nov", code: "BUS300", bgImage: offerbg2 },
    { id: 4, type: "Bus", title: "Save up to 500 in Karnataka,TN", valid: "Valid till 30 Nov", code: "BUS500KT", bgImage: offerbg4 },
    { id: 5, type: "Train", title: "Get 60 off on train tickets", valid: "valid till 30 Nov", code: "TRAIN60", bgImage: offerbg5 },
    { id: 6, type: "Train", title: "ZERO convenience FEE on train", valid: "valid till 30 Nov", code: "TRAINZERO", bgImage: offerbg5 },
];

export default function OffersCard() {
    const [activeTab, setActiveTab] = useState("All");
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const filteredOffers =
        activeTab === "All"
            ? offersData
            : offersData.filter((offer) => offer.type === activeTab);

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
        <div className="py-6">
            <div className="flex flex-row justify-between items-center mb-4 px-2">
                <div className="text-2xl font-bold">Offers for you</div>
                <Link to="/offerpage">View more</Link>
            </div>

            <div className="flex flex-row gap-3 mb-2">
                {["All", "Bus", "Train"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`p-2 px-4 py-1.5 !rounded-2xl border text-sm font-medium transition-all ${activeTab === tab
                            ? "bg-pink-300 !border-pink-300 text-black"
                            : "bg-white border-gray-400 text-black hover:!bg-gray-200"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={15}
                    slidesPerView={1.2}
                    allowTouchMove={true}
                    // pagination={{ clickable: true, type: "fraction" }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    className="pb-10"
                >
                    {filteredOffers.map((offer) => (
                        <SwiperSlide key={offer.id} className="!w-70">
                            <div className="rounded-2xl p-4 min-h-[160px] flex flex-col justify-between shadow-sm bg-cover bg-center"
                                style={{ backgroundImage: `url(${offer.bgImage})` }}>
                                <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-md w-fit">
                                    {offer.type}
                                </span>
                                <div>
                                    <h3 className="!text-xl !font-bold mt-2 text-gray-800">
                                        {offer.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">{offer.valid}</p>
                                </div>
                                <div className="flex">
                                    <div className="mt-3 flex flex-row items-center bg-white gap-1 rounded-full text-sm font-bold p-2 text-lg">
                                        <i className=""><TbTag />
                                        </i>
                                        <div>{offer.code}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    ref={prevRef}
                    className="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-black p-2 !rounded-full shadow-lg z-10"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    ref={nextRef}
                    className="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-black p-2 !rounded-full shadow-lg z-10"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

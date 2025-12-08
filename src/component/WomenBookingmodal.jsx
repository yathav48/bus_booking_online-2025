import { IoMdClose } from "react-icons/io";
import womensicon1 from '../assets/womensonly.svg';
import womensicon2 from '../assets/womenbooking.svg';
import womensicon3 from '../assets/womenbookingwhy.svg';
import womensicon4 from '../assets/womenpickuptodrop.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { motion } from 'framer-motion';

const carouselImages = [
    { id: 1, image: womensicon1 },
    { id: 2, image: womensicon2 },
    { id: 3, image: womensicon3 },
    { id: 4, image: womensicon4 },
];
export default function WomenBookingmodal({ onClose }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
             initial={{ y: 300 }}
             animate={{ y: 0 }}
             transition={{ duration: 1, ease: 'easeOut'}}
             className="bg-white rounded-2xl shadow-lg w-full md:max-w-[450px] flex flex-col py-4 h-fit">
                <div className="flex justify-end p-3">
                    <button
                        onClick={onClose}
                    >
                        <i className="text-2xl">
                            <IoMdClose />
                        </i>
                    </button>
                </div>
                <div>
                    <div className="flex flex-col gap-2">
                        <div className="px-2">
                            <h2 className="text-2xl font-extrabold text-black text-center">
                                Booking for women
                            </h2>
                            <p className="text-gray-600 text-center">
                                Providing helpful details to smartly choose bus travel for women
                            </p>
                        </div>

                        <div className="px-4 mb-4 items-center">
                            <Slider {...settings} className="">
                                {carouselImages.map((item) => (
                                    <div key={item.id} className="!flex items-center justify-center">
                                        <img src={item.image} alt={`Image ${item.id}`} className="object-cover" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="flex py-2 items-center px-4">
                            <button
                                className="mt-6 w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-2 !rounded-full font-semibold"
                                onClick={onClose}
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

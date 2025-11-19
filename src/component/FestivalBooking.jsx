import { MdHeight } from 'react-icons/md';
import festivaltrain from '../assets/newtrain.svg';
import calender from '../assets/calender-hook.svg';
import '../component/FestivalBooking.css';
import { IoMdTrain } from "react-icons/io";
import { Link } from 'react-router-dom';
import traditionguys from '../assets/traditionalguys.jpg';
import OffersCard from './OffersCard';
import ImageCarousel from './ImageCarousel';
import GovernmentBuses from './Governmentbuses';
import RedbusApplink from './RedbusApplink';
import Testimonialsection from './TestimonialSection';
import { easeIn, easeInOut, motion, stagger } from 'framer-motion';

export default function FestivalBooking() { 
    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.25
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className='flex flex-col gap-4 max-w-7xl mx-auto mb-50px px-4'>
            {/* {Festival Booking} */}
            <motion.article variants={item}
                className='my-4'>
                <div className='flex gap-3 flex-row my-3 text-center align-content-normal'>
                    <img src={festivaltrain} alt="#" />
                    <div className='flex flex-col flex-start'>
                        <div className='text-xl font-bold text-black'>Book trains for festival</div>
                        <div className='text-sm text-gray-500'>Book now to get confirmed ticket</div>
                    </div>
                </div>
                <div className='bg-gray-100 dark:bg-black/20 rounded-xl shadow-lg p-4 relative items-center justify-center'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                        <div className='flex flex-col lg:flex-row gap-2 m-1 align-content-normal p-1 items-center md:items-start lg:items-center w-full md:w-auto'>
                            <div className='whitespace-normal md:whitespace-nowrap'>Get $100 off using code
                                <strong className='text-green-600'>FESTIVAL</strong>
                            </div>
                            <div className='flex flex-row gap-2 justify-center w-full'>

                                <div className="relative border-1 border-pink-400 rounded-2xl pt-2 flex flex-col items-center w-full md:w-[200px]">
                                    <img src={calender} alt="calendar pin" className="absolute -top-4 left-1/2 -translate-x-1/2 w-15" />
                                    <div className="text-base font-semibold">Dec</div>
                                    <div className="overflow-hidden h-6 w-full relative">
                                        <span className="whitespace-nowrap overflow-hidden text-ellipsis scroll-text text-pink-400 text-xs absolute bottom-4 left-1/2 -translate-x-1/2">
                                            Christmas Day
                                        </span>
                                    </div>
                                </div>

                                <div className='flex flex-col text-center items-center border-1 border-blue-700 rounded-2xl relative pt-2 w-full md:w-[200px]'>
                                    <img src={calender} alt="calendar pin" className='absolute -top-4 left-1/2 -translate-x-1/2 w-15' />
                                    <div className='text-base font-semibold'>Jan</div>
                                    <div className='overflow-hidden h-6 w-full relative'>
                                        <span className='whitespace-nowrap overflow-hidden text-ellipsis scroll-text text-blue-600 text-xs absolute bottom-4 left-1/2 -translate-x-1/2'>
                                            New Year</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 textAlign-center align-content-normal min-w-[230px] justify-center'>
                            <Link to='/trainpage' className='bg-pink-300 p-2 rounded-full hover:bg-pink-200 text-decoration-none'>
                                <div className='flex flex-row items-center text-black justify-center gap-2'>
                                    <div className='align-items-center text-2xl'>
                                        <IoMdTrain />
                                    </div>
                                    <div className='font-bold text-md font'>
                                        Book trains now
                                    </div>
                                </div>
                            </Link>
                            <div className='text-center text-gray-500'>Authorised IRCTC partner</div>
                        </div>
                    </div>
                </div>
            </motion.article>
            <motion.section variants={item} initial="hidden"
                whileInView="show">
                <div className='bg-green-300 p-4 lg:!p-2 min-h-[130px] items-center justify-center rounded-xl'>
                    <div className='relative p-2'>
                        <div className='flex lg:flex-row lg:justify-center gap-4 items-center'>
                            <div className='flex flex-col text-start gap-2'>
                                <div className='font-bold text-2xl text-black'>
                                    25000+ people booked from coimbatore
                                </div>
                                <div>on redbus last month</div>
                            </div>
                            <div className='absolute lg:relative right-0 -top-auto'>
                                <img src={traditionguys} alt="#" className="h-[120px] w-auto object-contain flex-shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            <motion.section variants={item} initial="hidden"
                whileInView="show" className='mt-4'>
                <OffersCard />
            </motion.section>
            <motion.section variants={item} initial="hidden"
                whileInView="show" >
                <ImageCarousel />
            </motion.section>
            <motion.section variants={item} initial="hidden"
                whileInView="show" >
                <GovernmentBuses />
            </motion.section>
            <motion.section variants={item} initial="hidden"
                whileInView="show" >
                <Testimonialsection />
            </motion.section>
            <motion.section variants={item} initial="hidden"
                whileInView="show" className='mb-4'>
                <RedbusApplink />
            </motion.section>
        </motion.div>
    )
}
import { useState } from "react";
import femaleicon from '../assets/female.svg';
import { Link } from "react-router-dom";
import { IoMdSwap } from "react-icons/io";
import './BusSearchBar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineSwapVert } from "react-icons/md";
import { MdOutlineDirectionsBus } from "react-icons/md";
import WomenBookingModal from "./WomenBookingmodal";
import { motion } from "framer-motion";



export default function BusSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isrotating, setIsrotating] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isWomenBooking, setIsWomenBooking] = useState(false);
  const [showWomenModal, setShowWomenModal] = useState(false);
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(' ', ' ').replace(' ', ', ');
  };

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="relative md:!px-6 -mt-16 max-w-7xl mx-auto bottom-14 bussearch-container">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="md:!bg-white md:dark:bg-black/20 rounded-2xl md:shadow-lg pt-3 !pr-4 !pl-4 !pb-12 min-h-[120px] relative overflow-visible">
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          {/* Inputs Grid */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 flex-1 border border-gray-400 rounded-2xl overflow-hidden divide-x-1 divide-gray-300">

            {/* From Input */}
            <div className="relative w-full !pl-5 p-2 border-b-1 border-gray-300 md:border-b-0 flex flex-row items-center gap-2 ">
              <div>
                <i className="text-2xl text-gray-500"><MdOutlineDirectionsBus />
                </i>
              </div>
              <div>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="From"
                  className="w-full h-12 p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Swap Button large and medium screen*/}
            <div className="absolute left-[50%] top-8 lg:left-[33.33%] transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/70 rounded-full shadow-lg p-2 md:block hidden"
              onClick={() => { swapCities(); }}>
              <span className={`text-white ${isrotating ? 'rotate' : ''}`} onAnimationEnd={() => setIsrotating(false)}> <IoMdSwap /> </span>
            </div>

            {/* Swap Button small screen*/}
            <div className='absolute right-4 top-16 transform -translate-y-1/2 z-10 cursor-pointer bg-black/70 rounded-full shadow-lg p-2 md:!hidden'
              onClick={() => { swapCities(); }}>
              <span className={`text-white ${isrotating ? 'rotate' : ''}`} onAnimationEnd={() => setIsrotating(false)}> <MdOutlineSwapVert /> </span>
            </div>

            {/* To Input */}
            <div className="relative w-full !pl-5 p-2 flex flex-row items-center gap-2">
              <div>
                <i className="text-2xl text-gray-500"><MdOutlineDirectionsBus />
                </i>
              </div>
              <div>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="To"
                  className="w-full h-12 p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="relative w-full sm:col-span-2 lg:col-span-1 p-2 border-t-1 border-gray-300 lg:border-t-0">
              <div
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="flex items-center justify-between h-12 px-3 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-gray-500 text-sm">Date of Journey</span>
                    <span className="text-black text-md font-bold">{formatDate(date)}</span>
                  </div>
                </div>
              </div>

              {/* Inline date picker */}
              {showDatePicker && (
                <div className="absolute z-50 mt-2 bg-white shadow-lg">
                  <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    inline
                    minDate={new Date()}
                  />
                </div>
              )}
            </div>
          </div>


          {/* Women Booking Toggle */}
          <div className="flex flex-row md:flex-row items-center justify-between w-full lg:w-[320px] h-auto gap-2 lg:gap-4 women-toggle rounded-2xl p-2 border border-gray-300">
            <div className="flex items-center gap-3">
              <img src={femaleicon} alt="" width={20} height={20} className="w-7 h-7 mt-1" />
              <div className="flex flex-col leading-tight">
                <div className="text-base font-medium">Booking for Women</div>
                <Link className="text-sm text-blue-500">know more</Link>
              </div>
            </div>

            <div className="flex items-center">
              <button
                type="button"
                onClick={() => {
                  setIsWomenBooking(!isWomenBooking);
                  if (!isWomenBooking) {
                    setShowWomenModal(true);
                  }
                }}
                className={`relative w-14 h-8 flex items-center transition-colors duration-300 !rounded-full border-3 border-gray-600
              ${isWomenBooking ? 'bg-red-600 border-none' : 'bg-gray-300'}`}
              >
                <span
                  className={`w-4 h-4 bg-gray-600 rounded-full shadow-md transform transition-transform duration-300
              ${isWomenBooking ? 'translate-x-7 bg-white w-6 h-6' : 'translate-x-1'}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="absolute left-1/2 -translate-x-1/2 translate-y-1/2
                     w-full sm:w-80 h-12 bg-red-700 text-white
                     !rounded-full
                     hover:bg-primary-dark transition-colors 
                     flex items-center justify-center gap-2 shadow-lg">
          <span className="material-symbols-outlined">search</span>
          <span className="sm:inline font-semibold">Search Buses</span>
        </button>
      </motion.div>
      {showWomenModal && (
        <WomenBookingModal onClose={() => setShowWomenModal(false)} />
      )}
    </div >
  );
}

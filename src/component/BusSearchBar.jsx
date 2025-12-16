import { useState } from "react";
import femaleicon from '../assets/female.svg';
import { Link } from "react-router-dom";
import { IoMdSwap } from "react-icons/io";
import './BusSearchBar.css';
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineSwapVert } from "react-icons/md";
import { MdOutlineDirectionsBus } from "react-icons/md";
import WomenBookingmodal from "./WomenBookingmodal";
import { motion } from "framer-motion";
import CustomDatePicker from "./CustomDatePicker";


export default function BusSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isrotating, setIsrotating] = useState(false);
  const [selected, setSelected] = useState(new Date());
  const [isWomenBooking, setIsWomenBooking] = useState(false);
  const [showWomenModal, setShowWomenModal] = useState(false);


  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="relative md:px-4! -mt-16 max-w-7xl mx-auto bottom-14 bussearch-container">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-white md:dark:bg-black/20 rounded-2xl md:shadow-lg px-4 pt-2 md:pt-4! pb-12! min-h-[120px] relative overflow-visible">
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          {/* Inputs Grid */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 flex-1 border border-gray-500 rounded-2xl divide-x divide-gray-300">

            {/* From Input */}
            <div className="relative w-full px-4 py-2 border-b border-gray-300 md:border-b-0 flex flex-row items-center gap-2 ">
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
            <div className="absolute left-[50%] top-8 lg:left-[33.33%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black/70 rounded-full shadow-lg p-2 md:block hidden"
              onClick={() => { swapCities(); }}>
              <span className={`text-white`}> <IoMdSwap className={`text-md transition-transform duration-300 ${
                isrotating ? 'rotate-180' : 'rotate-0'}`}/> </span>
            </div>

            {/* Swap Button small screen*/}
            <div className='absolute right-4 top-16 transform -translate-y-1/2 z-10 cursor-pointer bg-black/70 rounded-full shadow-lg p-2 md:hidden'
              onClick={() => { swapCities(); }}>
              <span className={`text-white ${isrotating ? 'rotate' : ''}`} onAnimationEnd={() => setIsrotating(false)}> <MdOutlineSwapVert /> </span>
            </div>

            {/* To Input */}
            <div className="relative w-full px-4 py-2 flex flex-row items-center gap-2">
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

            <div className="relative w-full sm:col-span-2 lg:col-span-1 p-2 border-t border-gray-300 lg:border-t-0">
              {/* Calendar popup */}
              {/* {showCalendar && (
                <div className="absolute left-0 top-16 bg-white shadow-lg rounded-xl border p-4 z-1">
                  <DayPicker
                    mode="single"
                    selected={selected}
                    locale={enIN}
                    onSelect={(day) => {
                      setSelected(day);
                      setShowCalendar(false);
                    }}
                    components={{
                      Weekday: CustomWeekday,
                      Caption: CustomCaption,
                      Navigation: CustomNavbar,
                    }}
                    fromDate={new Date()}
                    modifiersClassNames={{
                      selected: "bg-black text-white rounded-full",
                      today: "bg-gray-200 rounded-full",
                    }}
                    
                  />
                  {footer}
                </div>
              )} */}
              <CustomDatePicker
                selected={selected}
                onSelect={(date) => setSelected(date)}
              />
            </div>


            {/* Women Booking Toggle */}
          </div>
          <div className="flex flex-row items-center justify-between w-full lg:w-[320px] gap-2 lg:gap-4 women-toggle rounded-2xl p-2 border border-gray-300">
            <div className="flex items-center gap-3">
              <img src={femaleicon} alt="" width={20} height={20} className="w-7 h-7" />
              <div className="flex flex-col leading-tight">
                <div className="text-base font-medium">Booking for Women</div>
                <Link
                  onClick={() => setShowWomenModal(true)}
                  className="text-sm text-blue-500">know more</Link>
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
                className={`relative w-14 h-8 flex items-center transition-colors duration-300 rounded-full! border-3 border-gray-600
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
                     w-full sm:w-80 h-12 text-white px-4 md:px-0!">
          <div className="flex items-center justify-center gap-2 bg-red-700 w-full h-12 hover:bg-primary-dark transition-colors shadow-lg rounded-full">
            <span className="material-symbols-outlined">search</span>
            <span className="sm:inline font-semibold">Search Buses</span>
          </div>
        </button>
      </motion.div>
      {showWomenModal && (
        <WomenBookingmodal onClose={() => setShowWomenModal(false)} />
      )}
    </div >
  );
}

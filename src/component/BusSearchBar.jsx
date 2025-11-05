// BusSearchBar.jsx
// import React, { useState } from 'react';
// import './BusSearchBar.css'
// import { CgSearch } from "react-icons/cg";
// import { LuCalendarDays } from "react-icons/lu";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";

// const BusSearchBar = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('2025-09-17');
//   const [isWomenBooking, setIsWomenBooking] = useState(false);

//   const swapCities = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   return (
//     <div className='bus-search-main-container'>
//       <div className="bus-search-container">
//         <div className='bus-search-content'>
//           <div className='bus-to-date'>
//             <div className='from'>
//               <div className="location">
//                 <span role="img" aria-label="bus"></span>
//                 <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder='From' />
//               </div>
//             </div>
//             <div className='swap'>
//               <button className="swap-btn" onClick={swapCities}><FaArrowRightArrowLeft /></button>
//             </div>
//             <div className='to'>
//               <div className="location">
//                 <span role="img" aria-label="bus"></span>
//                 <input value={to} onChange={(e) => setTo(e.target.value)} placeholder='To' />
//               </div>
//             </div>

//             <div className="date-picker">
//               <label><LuCalendarDays />Date of Journey</label>
//               <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//               <button onClick={() => setDate(new Date().toISOString().split('T')[0])}>Today</button>
//               <button onClick={() => {
//                 const tomorrow = new Date();
//                 tomorrow.setDate(tomorrow.getDate() + 1);
//                 setDate(tomorrow.toISOString().split('T')[0]);
//               }}>Tomorrow</button>
//             </div>
//           </div>

//           <div className="toggle-container">
//             <label>
//               <span role="img" aria-label="woman"></span> Booking for women
//             </label>
//             <label className="switch">
//               <input type="checkbox" checked={isWomenBooking} onChange={() => setIsWomenBooking(!isWomenBooking)} />
//               <span className="slider round"></span>
//             </label>
//           </div>
//         </div>
//         <button className="search-btn"><CgSearch /> Search buses</button>
//       </div>
//     </div>
//   );
// };

// export default BusSearchBar;


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



export default function BusSearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isrotating, setIsrotating] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isWomenBooking, setIsWomenBooking] = useState(false);

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="relative px-0 sm:px-6 lg:px-8 -mt-16 max-w-7xl mx-auto bottom-14 bussearch-container">
      <div className="bg-white dark:bg-black/20 rounded-xl shadow-lg pt-4 !pr-4 !pl-4 !pb-14 min-h-[140px] relative overflow-visible bussearch-inner md:bg-none md:shadow-none">
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
                className="flex items-center justify-between h-12 px-4 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar />
                  <div className="flex flex-col leading-tight">
                    <span>Date of Journey</span>
                    <span className="text-sm text-gray-500">{date.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Inline date picker */}
              {showDatePicker && (
                <div className="absolute z-50 mt-2">
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
          <div className="flex flex-row md:flex-row items-center justify-between w-full lg:w-[320px] h-auto gap-2 lg:gap-4 women-toggle rounded-lg p-2 border border-gray-300">
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
                onClick={() => setIsWomenBooking(!isWomenBooking)}
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
                     w-70 sm:w-80 h-12 sm:h-14 bg-red-700 text-white
                     !rounded-full
                     hover:bg-primary-dark transition-colors 
                     flex items-center justify-center gap-2 shadow-lg">
          <span className="material-symbols-outlined">search</span>
          <span className="sm:inline font-semibold">Search Buses</span>
        </button>
      </div>
    </div >
  );
}

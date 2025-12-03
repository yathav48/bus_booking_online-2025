// import { useState } from "react";
// import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";

// export default function CustomDatePicker({ selected, onSelect }) {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false);

//   const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
//   const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

//   const renderHeader = () => {
//     return (
//       <div className="flex justify-between items-center mb-2 px-2">
//         <button onClick={handlePrevMonth}>&lt;</button>
//         <div className="font-semibold">{format(currentMonth, "MMMM yyyy")}</div>
//         <button onClick={handleNextMonth}>&gt;</button>
//       </div>
//     );
//   };

//   const renderDays = () => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     return (
//       <div className="grid grid-cols-7 mb-2 text-center text-sm font-medium">
//         {days.map((day) => (
//           <div key={day}>{day}</div>
//         ))}
//       </div>
//     );
//   };

//   const renderCells = () => {
//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const startDate = startOfWeek(monthStart);
//     const endDate = endOfWeek(monthEnd);

//     const rows = [];
//     let days = [];
//     let day = startDate;

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         const formattedDate = format(day, "d");
//         const cloneDay = day;
//         days.push(
//           <div
//             key={day}
//             className={`p-2 text-center cursor-pointer rounded-full ${
//               !isSameMonth(day, monthStart) ? "text-gray-300" : ""
//             } ${isSameDay(day, selected) ? "bg-red-600 text-white" : ""} ${
//               isSameDay(day, new Date()) ? "border border-gray-400" : ""
//             }`}
//             onClick={() => {
//               onSelect(cloneDay);
//               setShowCalendar(false);
//             }}
//           >
//             {formattedDate}
//           </div>
//         );
//         day = addDays(day, 1);
//       }
//       rows.push(
//         <div className="grid grid-cols-7" key={day}>
//           {days}
//         </div>
//       );
//       days = [];
//     }

//     return <div>{rows}</div>;
//   };

//   return (
//     <div className="relative inline-block">
//       <div
//                 onClick={() => setShowCalendar(!showCalendar)}
//                 className="flex items-center justify-between h-12 px-3 cursor-pointer"
//               >
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
//                   <div className="flex flex-col leading-tight">
//                     <span className="text-gray-500 text-sm">Date of Journey</span>
//                     <span className="font-semibold text-lg">
//                       {format(selected, "dd MMM yyyy")}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//       {showCalendar && (
//         <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-3 w-64">
//           {renderHeader()}
//           {renderDays()}
//           {renderCells()}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import {
  format, addMonths, subMonths, startOfMonth, endOfMonth,
  startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isBefore
} from "date-fns";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";



export default function CustomDatePicker({ selected, onSelect }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(selected || today);
  const [showCalendar, setShowCalendar] = useState(false);

  // Update currentMonth whenever calendar opens
  useEffect(() => {
    if (showCalendar) {
      setCurrentMonth(selected || today);
    }
  }, [showCalendar, selected]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".custom-datepicker")) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handlePrevMonth = () => {
    const prevMonth = subMonths(currentMonth, 1);
    if (!isBefore(endOfMonth(prevMonth), today)) {
      setCurrentMonth(prevMonth);
    }
  };

  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-2 px-2">
      <button
        onClick={handlePrevMonth}
        disabled={isBefore(endOfMonth(subMonths(currentMonth, 1)), today)}
        className={`p-2 !rounded-full ${isBefore(endOfMonth(subMonths(currentMonth, 1)), today) ? 'text-gray-300 cursor-not-allowed' : ' hover:bg-gray-300'}`}
      >
        <IoIosArrowRoundBack className="text-2xl" />
      </button>
      <div className="font-bold text-black text-lg">{format(currentMonth, "MMMM yyyy")}</div>
      <button
        onClick={handleNextMonth}
        className="p-2 !rounded-full hover:bg-gray-300"
      >
        <IoIosArrowRoundForward className="text-2xl" />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 mb-4 text-center text-sm font-medium border-b border-gray-400 py-2">
        {days.map((day) => <div key={day}>{day}</div>)}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const disabled = isBefore(day, today.setHours(0, 0, 0, 0));
        days.push(
          <div
            key={day}
            className={`p-4 text-center w-8 h-8 flex items-center justify-center mx-auto cursor-pointer rounded-full ${!isSameMonth(day, monthStart) ? "text-gray-300" : ""
              } ${isSameDay(day, selected) ? "bg-black text-white" : ""} ${isSameDay(day, today) ? "border border-gray-400" : ""
              } ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-200"}`}
            onClick={() => !disabled && (onSelect(cloneDay), setShowCalendar(false))}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7 my-2" key={day}>{days}</div>);
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="custom-datepicker">
      <div
        onClick={() => setShowCalendar(!showCalendar)}
        className="flex items-center h-12 px-2 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
          <div className="flex flex-col leading-tight">
            <span className="text-gray-500 text-sm">Date of Journey</span>
            <span className="font-semibold text-lg">
              {format(selected, "dd MMM, yyyy")}
            </span>
          </div>
        </div>
        {/* <div className="mx-2 flex flex-row gap-2 lg:hidden overflow-hidden">
          <div className="bg-pink-200 px-3 py-2 rounded-full">Today</div>
          <div className="bg-pink-200 px-3 py-2 rounded-full">Tomorow</div>
        </div> */}
      </div>

      {showCalendar && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute z-10 mt-2 bg-white border rounded-xl shadow-lg p-3 w-full md:w-100">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </motion.div>
      )}
    </div>
  );
}

// // function Seat({ seat, selectedSeats, onClick, bus }) {
// //   if (!seat) return null;

// //   const isSelected = selectedSeats.some(s => s.id === seat.id);

// //   const price =
// //     seat.deck === "UPPER"
// //       ? bus.pricing.upper
// //       : bus.pricing.lower;

// //   return (
// //     <div
// //       onClick={() => onClick(seat)}
// //       className={`
// //         border rounded cursor-pointer flex items-center justify-center
// //         ${bus.busType === "SLEEPER" ? "w-10 h-24" : "w-10 h-10"}
// //         ${seat.isBooked ? "bg-gray-400" : ""}
// //         ${isSelected ? "bg-green-500 text-white" : "bg-white"}
// //       `}
// //     >
// //       ₹{price}
// //     </div>
// //   );
// // }

// // export default Seat;

// function Seat({ seat, selectedSeats, onClick }) {
//   if (!seat) return null;

//   const isSelected = selectedSeats.some(s => s.id === seat.id);

//   const baseClass =
//     seat.type === "SLEEPER" ? "w-10 h-24" : "w-10 h-10";

//   let bgClass = "bg-white";

//   if (seat.isBooked) {
//     bgClass = "bg-gray-400 cursor-not-allowed";
//   } else if (isSelected) {
//     bgClass = "bg-green-500 text-white";
//   }

//   return (
//     <div>
//       <div
//         onClick={() => !seat.isBooked && onClick(seat)}
//         className={`h-18 border rounded flex items-center justify-end py-2 cursor-pointer flex-col ${baseClass} ${bgClass}`}
//       >
//         <div className="bg-gray-300 px-3 py-1 rounded-2xl"></div>
//       </div>
//       <div>
//         ₹{seat.price}
//       </div>
//     </div>
//   );
// }

// export default Seat;

// function Seat({ seat, selectedSeats, onClick }) {
//   if (!seat) return null;

//   const isSelected = selectedSeats.some(s => s.id === seat.id);

//   const sizeClass =
//     seat.type === "SLEEPER"
//       ? "w-12 h-28"
//       : "w-8 h-16";

//   const bgClass = seat.isBooked
//     ? "bg-gray-400 cursor-not-allowed"
//     : isSelected
//     ? "bg-emerald-500 text-white"
//     : "bg-white";


//   return (
//     <div className="flex flex-col items-center gap-1 justify-end">
//       <div
//         onClick={() => !seat.isBooked && onClick(seat)}
//         className={`border border-green-700! rounded flex justify-center items-end cursor-pointer ${sizeClass} ${bgClass}`}
//       >

//         <div className={`w-4 h-1 rounded-full mb-1 ${isSelected ? "bg-green-700" : "bg-gray-300"}`}></div>
//       </div>

//       <span className="text-xs text-gray-600">₹{seat.price}</span>
//     </div>
//   );
// }

// export default Seat;

function Seat({ seat, selectedSeats, onClick }) {
  if (!seat) return null;

  const isSelected = selectedSeats.some(s => s.id === seat.id);

  const sizeClass =
    seat.type === "SLEEPER"
      ? "w-9 h-20"
      : "w-9 h-9";

  const baseClass = "flex items-end justify-center rounded";
  const borderClass =
    seat.status === "AVAILABLE"
      ? "border border-green-700!"
      : seat.status === "BLOCKED"
        ? "border-2 border-gray-400"
        : seat.status === "BOOKED_MALE"
          ? "border-2 border-blue-500"
          : seat.status === "BOOKED_FEMALE"
            ? "border-2 border-pink-500"
            : seat.status === "LOCKED_FEMALE_ONLY"
              ? "border-2 border-dashed border-pink-400"
              : "";

  const bgClass =
    isSelected && seat.status === "AVAILABLE"
      ? "bg-green-500 text-white"
      : seat.status === "BLOCKED"
        ? "bg-gray-300"
        : seat.status === "LOCKED_FEMALE_ONLY"
          ? "bg-pink-50"
          : "bg-white";

  const cursor =
    seat.status === "AVAILABLE"
      ? "cursor-pointer"
      : "cursor-not-allowed";
  const seatClass = `${baseClass} ${borderClass} ${bgClass}`;

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() =>
          seat.status === "AVAILABLE" && onClick(seat)
        }
        className={`flex items-end justify-center rounded ${sizeClass} ${cursor} ${seatClass}`}
      >
        <div className={`w-4 h-1 rounded-full mb-1 ${isSelected ? "bg-green-700" : "bg-gray-300"}`}></div>
      </div>
      <span className="text-xs mt-1">₹{seat.price}</span>
    </div>
  );
}

export default Seat;



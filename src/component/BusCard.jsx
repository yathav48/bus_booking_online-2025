// const BusCard = ({ bus }) => {
//   return (
//     <div className="border rounded-xl p-4 flex justify-between items-center shadow-sm bg-white">
//       <div>
//         <h2 className="font-semibold text-lg">
//           {bus.operator}
//         </h2>
//         <p className="text-sm text-gray-500">
//           {bus.busType}
//         </p>
//         <p className="text-sm">
//           {bus.departureTime} → {bus.arrivalTime} | {bus.duration}
//         </p>
//       </div>

//       <div className="text-right">
//         <p className="font-bold text-lg">
//           ₹{bus.price}
//         </p>
//         <p className="text-sm text-gray-500">
//           {bus.seatsAvailable} seats left
//         </p>
//         <button className="mt-2 bg-red-600 text-white px-4 py-1 rounded-lg">
//           View Seats
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BusCard;

function BusCard({ bus, onViewSeats }) {
  return (
    <div
      className="border rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md bg-white"
      onClick={() => onViewSeats(bus)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center border-b border-gray-300 border-dashed">
          <div className="flex flex-col">
            <div className="font-bold text-lg">{bus.operator}</div>
            <p className="text-sm text-gray-500">{bus.busType}</p>
          </div>
          <div className="pb-4">
            <p className="text-md m-0 font-semibold">
              {bus.departureTime} → {bus.arrivalTime}
            </p>
            <p className="text-sm m-0 text-gray-500">{bus.seatsAvailable} seats</p>
          </div>
          <div className="text-start">
            <p className="font-bold m-0">₹{bus.price}</p>
          </div>
        </div>

        <div className="text-right py-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewSeats(bus);
            }}
            className="bg-red-600 text-white font-bold text-lg px-4 py-2.5! rounded-full!"
          >
            View Seats
          </button>
        </div>
      </div>

    </div>
  );
}

export default BusCard;

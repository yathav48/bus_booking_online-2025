// import Seat from "./Seat";
// function SeatDeck({ title, seats, selectedSeats, setSelectedSeats, bus }) {

//   const toggleSeat = (seat) => {
//     if (seat.isBooked) return;

//     setSelectedSeats(prev =>
//       prev.some(s => s.id === seat.id)
//         ? prev.filter(s => s.id !== seat.id)
//         : [...prev, seat]
//     );
//   };

//   const rows = [...new Set(seats.map(s => s.row))];
//   console.log("SeatDeck seats:", seats);

//   return (
//     <div>
//       <h3 className="font-bold mb-4">{title}</h3>

//       {rows.map(row => {
//         const left = seats.find(s => s.row === row && s.side === "LEFT");
//         const right = seats.filter(s => s.row === row && s.side === "RIGHT");

//         return (
//           <div key={row} className="flex justify-between mb-3">
//             <Seat seat={left} onClick={toggleSeat} selectedSeats={selectedSeats} bus={bus} />
//             <div className="w-10" />
//             <div className="flex gap-2">
//               {right.map(seat => (
//                 <Seat
//                   key={seat.id}
//                   seat={seat}
//                   onClick={toggleSeat}
//                   selectedSeats={selectedSeats}
//                   bus={bus}
//                 />
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default SeatDeck;

import Seat from "./Seat";
function SeatDeck({
  seats,
  busType,
  singleSeatSide,
  selectedSeats,
  setSelectedSeats,
  maxSeats,
  setLimitReached
}) {

  const toggleSeat = (seat) => {
    if (seat.status !== "AVAILABLE") return;

    setSelectedSeats(prev => {
      const isSelected = prev.some(s => s.id === seat.id);

      if (isSelected) {
        setLimitReached(false);
        return prev.filter(s => s.id !== seat.id);
      }

      if (prev.length >= maxSeats) {
        setLimitReached(true);
        return prev;
      }

      setLimitReached(false);
      return [...prev, seat];
    });
  };

  const rows = [...new Set(seats.map(s => s.row))];

  return (
    <div className="flex flex-col gap-3">
      {rows.map(row => {
        const rowSeats = seats.filter(s => s.row === row);

        // SEATER logic
        if (busType === "SEATER") {
          const single = rowSeats.find(s => s.side === singleSeatSide);
          const doubles = rowSeats.filter(s => s.side !== singleSeatSide);

          const singleOnLeft = singleSeatSide === "LEFT";

          return (
            <div key={row} className="flex items-center">
              {singleOnLeft && (
                <Seat
                  seat={single}
                  selectedSeats={selectedSeats}
                  onClick={toggleSeat}
                />
              )}

              {/* AISLE */}
              <div className="w-8" />

              <div className="flex gap-2">
                {doubles.map(seat => (
                  <Seat
                    key={seat.id}
                    seat={seat}
                    selectedSeats={selectedSeats}
                    onClick={toggleSeat}
                  />
                ))}
              </div>

              {!singleOnLeft && (
                <>
                  <div className="w-8" />
                  <Seat
                    seat={single}
                    selectedSeats={selectedSeats}
                    onClick={toggleSeat}
                  />
                </>
              )}
            </div>
          );
        }

        // SLEEPER logic
        const left = rowSeats.find(s => s.side === "LEFT");
        const right = rowSeats.filter(s => s.side === "RIGHT");

        return (
          <div key={row} className="flex items-center">
            <Seat
              seat={left}
              selectedSeats={selectedSeats}
              onClick={toggleSeat}
            />

            <div className="w-8" />

            <div className="flex gap-2">
              {right.map(seat => (
                <Seat
                  key={seat.id}
                  seat={seat}
                  selectedSeats={selectedSeats}
                  onClick={toggleSeat}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SeatDeck;

function SeatLayout({ seats }) {
  if (!seats || seats.length === 0) {
    return <p>No seats available</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {seats.map((seat) => (
        <div
          key={seat.id}
          className={`seat ${seat.isBooked ? "bg-gray-400" : "bg-green-500"}`}
        >
          {seat.label}
        </div>
      ))}
    </div>
  );
}

export default SeatLayout;
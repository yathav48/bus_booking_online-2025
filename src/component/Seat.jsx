function Seat({ seat, isSelected, onSelect }) {
  if (seat.status === "sold") {
    return (
      <div className="w-10 h-24 bg-gray-200 rounded cursor-not-allowed flex items-center justify-center">
        <span className="text-[10px] text-gray-400 -rotate-90">Sold</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect(seat)}
      className={`w-10 h-24 rounded border cursor-pointer flex items-center justify-center
        ${isSelected ? "bg-green-200 border-green-600" : "border-available-border bg-white"}
      `}
    >
      <span className="text-[10px] font-bold text-available-text">
        ₹{seat.price}
      </span>
    </div>
  );
}

export default Seat;

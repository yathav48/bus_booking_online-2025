function applyGenderRules(seats, bookedSeatId, gender) {
  return seats.map(seat => {
    if (seat.id === bookedSeatId) {
      return {
        ...seat,
        status: gender === "FEMALE"
          ? "BOOKED_FEMALE"
          : "BOOKED_MALE"
      };
    }

    // adjacency lock
    if (
      gender === "FEMALE" &&
      seat.row === seats.find(s => s.id === bookedSeatId).row &&
      seat.side === seats.find(s => s.id === bookedSeatId).side &&
      seat.status === "AVAILABLE"
    ) {
      return {
        ...seat,
        status: "LOCKED_FEMALE_ONLY"
      };
    }

    return seat;
  });
}
export default applyGenderRules;
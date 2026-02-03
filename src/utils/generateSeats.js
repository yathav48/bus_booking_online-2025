// export function generateSeats(bus) {
//   const { busType, layoutConfig, pricing } = bus;
//   const { rows, singleSeatSide } = layoutConfig;

//   const seats = [];

//   for (let row = 1; row <= rows; row++) {

//     // ===== SEATER =====
//     if (busType === "SEATER") {

//       const doubleSide = singleSeatSide === "LEFT" ? "RIGHT" : "LEFT";

//       // single seat
//       seats.push({
//         id: `L-${row}-S`,
//         row,
//         side: singleSeatSide,
//         type: "SEATER",
//         price: pricing.baseFare,
//         status: "AVAILABLE",
//         genderLocked: null // male | female
//       });

//       // double seats
//       seats.push({
//         id: `R-${row}-A`,
//         row,
//         side: doubleSide,
//         type: "SEATER",
//         price: pricing.baseFare,
//         status: "AVAILABLE",
//         genderLocked: null
//       });

//       seats.push({
//         id: `R-${row}-B`,
//         row,
//         side: doubleSide,
//         type: "SEATER",
//         price: pricing.baseFare,
//         status: "AVAILABLE",
//         genderLocked: null
//       });
//     }

//     // ===== SLEEPER =====
//     if (busType === "SLEEPER") {
//       seats.push({
//         id: `SL-${row}`,
//         row,
//         side: "LEFT",
//         type: "SLEEPER",
//         price: pricing.baseFare,
//         status: "AVAILABLE"
//       });

//       seats.push({
//         id: `SR-${row}-A`,
//         row,
//         side: "RIGHT",
//         type: "SLEEPER",
//         price: pricing.baseFare,
//         status: "AVAILABLE"
//       });

//       seats.push({
//         id: `SR-${row}-B`,
//         row,
//         side: "RIGHT",
//         type: "SLEEPER",
//         price: pricing.baseFare,
//         status: "AVAILABLE"
//       });
//     }
//   }

//   return seats;
// }

// utils/generateSeats.js
// export function generateSeats(bus, deck = "LOWER") {
//   if (!bus || !bus.layoutConfig) return [];

//   const { busType, layoutConfig, pricing } = bus;
//   const { rows, singleSeatSide } = layoutConfig;

//   const seats = [];

//   for (let row = 1; row <= rows; row++) {

//     // ================= SEATER =================
//     if (busType === "SEATER") {
//       const doubleSide =
//         singleSeatSide === "LEFT" ? "RIGHT" : "LEFT";

//       // single seat
//       seats.push({
//         id: `${deck}-${row}-S`,
//         row,
//         position: "SINGLE",
//         side: singleSeatSide,
//         type: "SEATER",
//         deck,
//         price: pricing.baseFare,
//         status: "AVAILABLE"
//       });

//       // double seats
//       seats.push({
//         id: `${deck}-${row}-D1`,
//         row,
//         position: "DOUBLE",
//         side: doubleSide,
//         type: "SEATER",
//         deck,
//         price: pricing.baseFare,
//         status: "AVAILABLE"
//       });

//       seats.push({
//         id: `${deck}-${row}-D2`,
//         row,
//         position: "DOUBLE",
//         side: doubleSide,
//         type: "SEATER",
//         deck,
//         price: pricing.baseFare,
//         status: "AVAILABLE"
//       });
//     }

//     // ================= SLEEPER =================
//     if (busType === "SLEEPER") {
//       seats.push({
//         id: `${deck}-${row}-L`,
//         row,
//         position: "LEFT",
//         side: "LEFT",
//         type: "SLEEPER",
//         deck,
//         price:
//           deck === "UPPER"
//             ? pricing.baseFare + pricing.upperDeckExtra
//             : pricing.baseFare,
//         status: "AVAILABLE"
//       });

//       seats.push({
//         id: `${deck}-${row}-R1`,
//         row,
//         position: "RIGHT",
//         side: "RIGHT",
//         type: "SLEEPER",
//         deck,
//         price:
//           deck === "UPPER"
//             ? pricing.baseFare + pricing.upperDeckExtra
//             : pricing.baseFare,
//         status: "AVAILABLE"
//       });

//       seats.push({
//         id: `${deck}-${row}-R2`,
//         row,
//         position: "RIGHT",
//         side: "RIGHT",
//         type: "SLEEPER",
//         deck,
//         price:
//           deck === "UPPER"
//             ? pricing.baseFare + pricing.upperDeckExtra
//             : pricing.baseFare,
//         status: "AVAILABLE"
//       });
//     }
//   }

//   return seats;
// }
export function generateSeats({ busType, layoutConfig, pricing }) {
  const { rows, singleSeatSide, decks } = layoutConfig;
  const seats = [];

  decks.forEach(deck => {
    for (let row = 1; row <= rows; row++) {

      // ===== SEATER =====
      if (busType === "SEATER") {
        const doubleSide = singleSeatSide === "LEFT" ? "RIGHT" : "LEFT";

        // single seat
        seats.push({
          id: `${deck}-S-${row}`,
          row,
          deck,
          side: singleSeatSide,
          type: "SEATER",
          price: pricing.baseFare,
          status: "AVAILABLE"
        });

        // double seats
        seats.push({
          id: `${deck}-D-${row}-A`,
          row,
          deck,
          side: doubleSide,
          type: "SEATER",
          price: pricing.baseFare,
          status: "AVAILABLE"
        });

        seats.push({
          id: `${deck}-D-${row}-B`,
          row,
          deck,
          side: doubleSide,
          type: "SEATER",
          price: pricing.baseFare,
          status: "AVAILABLE"
        });
      }

      // ===== SLEEPER =====
      if (busType === "SLEEPER") {
        seats.push({
          id: `${deck}-SL-${row}`,
          row,
          deck,
          side: "LEFT",
          type: "SLEEPER",
          price: pricing.upperDeckExtra
            ? pricing.baseFare + (deck === "UPPER" ? pricing.upperDeckExtra : 0)
            : pricing.baseFare,
          status: "AVAILABLE"
        });

        seats.push({
          id: `${deck}-SR-${row}-A`,
          row,
          deck,
          side: "RIGHT",
          type: "SLEEPER",
          price: pricing.upperDeckExtra
            ? pricing.baseFare + (deck === "UPPER" ? pricing.upperDeckExtra : 0)
            : pricing.baseFare,
          status: "AVAILABLE"
        });

        seats.push({
          id: `${deck}-SR-${row}-B`,
          row,
          deck,
          side: "RIGHT",
          type: "SLEEPER",
          price: pricing.upperDeckExtra
            ? pricing.baseFare + (deck === "UPPER" ? pricing.upperDeckExtra : 0)
            : pricing.baseFare,
          status: "AVAILABLE"
        });
      }
    }
  });

  return seats;
}





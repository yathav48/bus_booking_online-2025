const buses = [
  {
    id: 1,
    operator: "IntrCity SmartBus",

    route: {
      from: "Thoothukudi",
      to: "Chennai"
    },

    busType: "SEATER", // SEATER | SLEEPER | MIXED

    comfort: {
      ac: true,        // true = AC, false = Non-AC
      pushBack: true,
      chargingPoint: true,
      blanket: false
    },

    layoutConfig: {
      arrangement: "2+1",
      singleSeatSide: "LEFT", // LEFT or RIGHT
      rows: 11,
      decks: ["LOWER"]        // LOWER | UPPER | BOTH
    },

    pricing: {
      baseFare: 549,
      upperDeckExtra: 200
    },
    departureTime: "22:30",
    arrivalTime: "23:30",
  },
  {
    id: 2,
    operator: "RedBus Luxury",

    route: {
      from: "Chennai",
      to: "Coimbatore"
    },

    busType: "SLEEPER", // SEATER | SLEEPER | MIXED

    comfort: {
      ac: true,        // true = AC, false = Non-AC
      pushBack: true,
      chargingPoint: true,
      blanket: false
    },

    layoutConfig: {
      arrangement: "2+1",
      singleSeatSide: "LEFT", // LEFT or RIGHT
      rows: 6,
      decks: ["LOWER", "UPPER"]        // LOWER | UPPER | BOTH
    },

    pricing: {
      baseFare: 1100,
      upperDeckExtra: 200
    },
    departureTime: "08:00",
    arrivalTime: "12:00",
  },
  {
    id: 3,
    operator: "BlueLine Travels",

    route: {
      from: "Chennai",
      to: "Coimbatore"
    },

    busType: "SEATER", // SEATER | SLEEPER | MIXED

    comfort: {
      ac: true,        // true = AC, false = Non-AC
      pushBack: true,
      chargingPoint: true,
      blanket: false
    },

    layoutConfig: {
      arrangement: "2+1",
      singleSeatSide: "LEFT", // LEFT or RIGHT
      rows: 6,
      decks: ["LOWER", "UPPER"]        // LOWER | UPPER | BOTH
    },

    pricing: {
      baseFare: 549,
      upperDeckExtra: 200
    },
    departureTime: "09:00",
    arrivalTime: "13:00",
  },
  {
    id: 4,
    operator: "RedLine Travels",

    route: {
      from: "Chennai",
      to: "Coimbatore"
    },

    busType: "SEATER", // SEATER | SLEEPER | MIXED

    comfort: {
      ac: false,        // true = AC, false = Non-AC
      pushBack: true,
      chargingPoint: true,
      blanket: false
    },

    layoutConfig: {
      arrangement: "2+1",
      singleSeatSide: "LEFT", // LEFT or RIGHT
      rows: 11,
      decks: ["LOWER"]        // LOWER | UPPER | BOTH
    },

    pricing: {
      baseFare: 999,
      upperDeckExtra: 200
    },
    departureTime: "14:00",
    arrivalTime: "18:00",
  },
  {
    id: 5,
    operator: "yellow Travels",
    route: {
      from: "Chennai",
      to: "Coimbatore"
    },    
    busType: "MIXED", // SEATER | SLEEPER | MIXED
    comfort: {
      ac: false,        // true = AC, false = Non-AC
      pushBack: true,
      chargingPoint: true,
      blanket: false
    },
    layoutConfig: {
      arrangement: "2+1",
      singleSeatSide: "RIGHT", // LEFT or RIGHT
      rows: 11,
      decks: ["LOWER"]        // LOWER | UPPER | BOTH
    },
    pricing: {
      baseFare: 1299,
      upperDeckExtra: 200
    },
    departureTime: "15:00",
    arrivalTime: "19:00",
  }
];

export default buses;
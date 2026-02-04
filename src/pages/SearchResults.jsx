import buses from "./Busdata/buses";
import BusCard from "../component/BusCard";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BusSearchBar from "../component/BusSearchBar";
import wavesimg from '../assets/waves-img.svg';
import { motion } from "framer-motion";
import '../pages/scrollbar.css';
import SeatSelectionDrawer from "../component/SeatSelectionDrawer";
import { IoArrowForward } from "react-icons/io5";

function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const [filters, setFilters] = useState({
    ac: false,
    nonAc: false,
    morning: false,
    night: false
  });
  const [selectedBus, setSelectedBus] = useState(null);
  const [isSeatOpen, setIsSeatOpen] = useState(false);

  const filteredBuses = buses.filter((bus) => {
    const busFrom = bus.route?.from?.toLowerCase().trim();
    const busTo = bus.route?.to?.toLowerCase().trim();

    if (!busFrom || !busTo) return false;

    return (
      busFrom === from.toLowerCase().trim() &&
      busTo === to.toLowerCase().trim()
    );
  });

  const handleViewSeats = (bus) => {
    setSelectedBus(bus);
    setIsSeatOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseSeats = () => {
    setIsSeatOpen(false);
    setSelectedBus(null);
    document.body.style.overflow = "auto";
  };


  const [sortedBuses, setSortedBuses] = useState(filteredBuses);

  const visibleBuses = sortedBuses.filter((bus) => {
    const type = bus.busType?.toLowerCase() || "";

    const isAC = bus.comfort?.ac === true;
    const isNonAC = bus.comfort?.ac === false;

    //filtering logic
    if (filters.ac && !isAC) return false;
    if (filters.nonAc && !isNonAC) return false;
    if (filters.sleeper && bus.busType !== "SLEEPER") return false;
    if (filters.seater && bus.busType !== "SEATER") return false;

    // Morning / Night filter
    const hour = parseInt(bus.departureTime.split(":")[0], 10);

    if (filters.morning && !(hour >= 5 && hour < 12)) return false;
    if (filters.night && !(hour >= 20 || hour < 5)) return false;

    return true;
  });


  useEffect(() => {
    setSortedBuses(filteredBuses);
    document.title = `${from} to ${to} | Bus Ticket Booking`;
  }, [from, to]);

  // const sortByPrice = () => {
  //   const sorted = [...sortedBuses].sort((a, b) => a.price - b.price);
  //   setSortedBuses(sorted);
  // };
  const sortByPrice = () => {
    const sorted = [...sortedBuses].sort(
      (a, b) => a.pricing.baseFare - b.pricing.baseFare
    );
    setSortedBuses(sorted);
  };


  const sortByDeparture = () => {
    const sorted = [...sortedBuses].sort(
      (a, b) => a.departureTime.localeCompare(b.departureTime)
    );
    setSortedBuses(sorted);
  };

  // const sortBySeats = () => {
  //   const sorted = [...sortedBuses].sort(
  //     (a, b) => b.seatsAvailable - a.seatsAvailable
  //   );
  //   setSortedBuses(sorted);
  // };

  const handleSort = (sortType) => {
    switch (sortType) {
      case "price":
        sortByPrice();
        break;
      case "departure":
        sortByDeparture();
        break;
      case "seats":
        sortBySeats();
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.9 }}
      className="my-2 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center gap-4 border-b border-gray-300 pb-3 mb-4">
          {/* Back Arrow */}
          <button
            onClick={() => navigate(`/?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date || ""}`)}
            className="pb-2" >
            <IoArrowBack size={22} />
          </button>

          {/* Route Info */}
          <div>
            <div className="text-xl font-bold flex items-center gap-2">
              {from} <i className="text-gray-300 pt-1"><IoArrowForward /></i> {to}
            </div>
            <p className="text-md text-gray-500">
              {date
                ? new Date(date).toDateString()
                : ""}
              {" "} | {filteredBuses.length} Buses
            </p>
          </div>
        </div>
        <div className="py-4">
          <div className="mt-4">
            <BusSearchBar initialFrom={from} initialTo={to} initialDate={date} />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <div className="flex flex-col lg:flex-row gap-4 h-[80vh] max-w-7xl mx-auto scrollbar-hidden px-4 py-4">

          {/* LEFT FILTER PANEL (NO SCROLL) */}
          <div className="w-full lg:w-1/4 shrink-0 border border-gray-300 rounded-lg p-4 bg-gray-100 shadow-lg flex flex-col">
            <div className="flex flex-row justify-between border-b border-gray-300">
              <div className="font-bold mb-3 text-black text-2xl">Filter buses</div>
              <div>
                <button className="text-black underline px-2 py-1"
                  onClick={() => setFilters({ ac: false, nonAc: false, sleeper: false, seater: false, morning: false, night: false })}>
                  Clear all
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-2 gap-4 overflow-x-auto scrollbar-hide lg:flex-col!">
              <div className="flex items-center gap-2 mb-2">
                <button className={`px-4 py-1 border rounded-lg! 
               ${filters.ac
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-400"
                  }`}
                  onClick={() => setFilters({ ...filters, ac: !filters.ac })}>
                  AC</button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button className={`px-4 py-1 border rounded-lg!
    ${filters.nonAc
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-400"
                  }`}
                  onClick={() => setFilters({ ...filters, nonAc: !filters.nonAc })}>
                  Non-AC</button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button className={`px-4 py-1 border rounded-lg!
    ${filters.sleeper
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-400"
                  }`}
                  onClick={() => setFilters({ ...filters, sleeper: !filters.sleeper })}>
                  Sleeper</button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button className={`px-4 py-1 border rounded-lg! 
    ${filters.seater
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-400"
                  }`}
                  onClick={() => setFilters({ ...filters, seater: !filters.seater })}>
                  Seater</button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button className={`px-4 py-1 border rounded-lg! 
    ${filters.morning
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-400"
                  }`}
                  onClick={() => setFilters({ ...filters, morning: !filters.morning })}>
                  <div>
                    (5 AM – 12 PM)
                  </div>
                  <div>Moring</div>
                </button>
              </div>

              {/* Night */}
              <div className="flex items-center gap-2 mb-4">
                <button className={`px-4 py-1 border rounded-lg! 
    ${filters.night
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-black border-gray-400"
                  }`}
                  onClick={() => setFilters({ ...filters, night: !filters.night })}>
                  Night (8 PM – 5 AM)</button>
              </div>
            </div>
          </div>

          {/* RIGHT BUS LIST (SCROLL ONLY HERE) */}
          <div className="flex flex-1 flex-col overflow-y-auto scrollbar-hide">
            {/* Sorting Options */}
            <div className="flex flex-row justify-between bg-amber-200 p-2 rounded-lg">
              <div className="text-black font-semibold">{filteredBuses.length} buses found</div>
              <div className="flex flex-row items-center gap-2 font-semibold">
                <div>Sort by:</div>
                <div className="flex gap-4 items-center">
                  <button onClick={() => handleSort("price")} className="py-1 px-1 rounded-full text-sm">
                    Price
                  </button>

                  <button onClick={() => handleSort("departure")} className="py-1 px-1 rounded-full text-sm">
                    Departure
                  </button>

                  <button onClick={() => handleSort("seats")} className="py-1 px-1 rounded-full text-sm">
                    Seats
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img src={wavesimg} alt="waves" className="w-full h-15 object-cover rounded-lg" />
            </div>
            {visibleBuses.length === 0 ? (
              <p>No buses available</p>
            ) : (
              <div className="space-y-4 flex flex-col gap-4 mt-4">
                {visibleBuses.map((bus) => (
                  <div key={bus.id}>
                    <BusCard bus={bus} onViewSeats={handleViewSeats} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {isSeatOpen && (
          <SeatSelectionDrawer
            bus={selectedBus}
            from={from}
            to={to}
            onClose={handleCloseSeats}
          />
        )}
      </div>
    </motion.div>
  );
}

export default SearchResults;

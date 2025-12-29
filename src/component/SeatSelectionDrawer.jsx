import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import SeatLayout from "./SeatLayout";
import { useState, useEffect } from "react";
function SeatSelectionDrawer({ bus, from, to, onClose }) {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
    if (bus) {
      // mock seat generation
      const generatedSeats = Array.from({ length: 32 }, (_, i) => ({
        id: i + 1,
        label: `S${i + 1}`,
        isBooked: Math.random() < 0.3
      }));
      setSeats(generatedSeats);
    }
  }, [bus]);

  if (!bus) return null;
    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={onClose}
            />

            {/* Drawer */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "tween", duration: 0.5 }}
                className="fixed bottom-0 left-0 right-0 h-[90vh] bg-white z-50 rounded-t-2xl p-4 animate-slideUp">

                {/* Header */}
                <div className="flex items-center border-b pb-3 gap-3">
                    <button onClick={onClose} className="text-2xl">
                        <IoClose size={32} />
                    </button>
                    <div>
                        <h2 className="font-bold text-lg">
                            {from} → {to}
                        </h2>
                    </div>
                </div>

                <div className="mt-4 overflow-y-auto h-[calc(90vh-80px)]">
                    <SeatLayout seats={seats} />
                </div>
            </motion.div>
        </>
    );
}

export default SeatSelectionDrawer;

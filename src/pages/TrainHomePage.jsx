import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrainHomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-md bg-white/80 border border-gray-200 
        shadow-xl rounded-2xl max-w-lg w-full p-8 text-center p-4"
      >

        {/* Animated Train Icon */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-6xl mb-4"
        >
          🚆
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900">
          Train Booking
        </h1>

        <p className="text-gray-600 mt-3 leading-relaxed">
          We’re building a seamless train ticket booking experience for you.
          This feature is currently under development and will be available soon.
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6" />

        <p className="text-sm text-gray-500 mb-6">
          Meanwhile, explore our smart bus booking experience.
        </p>

        {/* CTA Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white 
            font-semibold px-4 py-2 rounded-lg! shadow-md transition"
          >
            Back to Bus Booking
          </motion.button>
        </Link>

      </motion.div>
    </div>
  );
}

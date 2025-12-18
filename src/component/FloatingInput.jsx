import { motion } from "framer-motion";
import { useState, forwardRef } from "react";

const FloatingInput = forwardRef(({ label, onChange, onBlur, value, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    const hasValue = value !== undefined && value !== "";

    const isActive = focused || hasValue;

    return (
        <div className="relative w-full mt-2">
            <input
                {...props}
                ref={ref}
                value={value}
                onChange={onChange}
                onBlur={(e) => { setFocused(false); onBlur?.(e); }}
                onFocus={(e) => setFocused(true)}
                className="w-full border-2 border-gray-400 rounded-lg px-3 py-3 text-base 
                outline-none focus:border-black transition-all bg-white"
            />
            <motion.label
                initial={false}
                animate={{
                    top: isActive ? "-10px" : "50%",
                    left: "14px",
                    fontSize: isActive ? "12px" : "16px",
                    color: isActive ? "black" : "#6b7280",
                    translateY: isActive ? "0" : "-50%",
                }}
                transition={{ duration: 0.2 }}
                className="absolute bg-white px-1 pointer-events-none"
            >
                {label}
            </motion.label>
        </div>
    );
});

export default FloatingInput;

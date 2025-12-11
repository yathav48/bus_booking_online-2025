import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingInput({ label, error, ...props }) {
    const [focused, setFocused] = useState(false);

    const hasValue =
        (props.value !== undefined && props.value !== "") ||
        (props.defaultValue !== undefined && props.defaultValue !== "");

    const isActive = focused || hasValue;


    return (
        <div className="relative w-full mt-2">
            <input
                {...props} 
                className="w-full border-2 border-gray-400 rounded-lg px-3 py-3 text-base 
                   outline-none focus:border-black transition-all bg-white"
                onFocus={(e) => {
                    setFocused(true);
                    props.onFocus?.(e);
                }}
                onBlur={(e) => {
                    setFocused(false);
                    props.onBlur?.(e);
                }}
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
}

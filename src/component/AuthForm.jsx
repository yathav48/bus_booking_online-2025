
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Letter by letter animation for titles
const AnimatedText = ({ text, delay = 0 }) => (
  <h2 className="text-3xl text-white font-bold text-center mb-6 flex flex-wrap">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay + i * 0.05, type: 'spring', stiffness: 500 }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </h2>
);

const InputField = ({ label, type }) => (
  <div className="relative border-b-2 border-white focus-within:border-[#e46033] mb-4">
    <input
      type={type}
      required
      className="w-full bg-transparent border-none outline-none text-white py-2 peer"
    />
    <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white transition-all peer-focus:-top-2 peer-focus:text-[#e46033] peer-valid:-top-2 peer-valid:text-[#e46033]">
      {label}
    </label>
  </div>
);

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {
    document.title = 'Login / Register - Bus Ticket Booking';
  })

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#25252b] font-['Poppins'] overflow-hidden">
      <div className={`relative w-[750px] h-[450px] border-2 border-[#e46033] shadow-[0_0_25px_#e46033] overflow-hidden`}>
        {/* Curved shapes */}
        <motion.div
          className="absolute right-0 -top-[5px] h-[600px] w-[850px] bg-gradient-to-r from-[#25252b] to-[#e46033] origin-bottom-right"
          animate={{ rotate: isRegister ? 0 : 10, skewY: isRegister ? 0 : 35 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute left-[250px] top-full h-[700px] w-[850px] bg-[#25252b] border-t-2 border-[#e46033] origin-bottom-left"
          animate={{ rotate: isRegister ? -11 : 0, skewY: isRegister ? -41 : 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* LOGIN FORM */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-4 z-20"
          animate={{ x: isRegister ? '-120%' : '0%', opacity: isRegister ? 0 : 1 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedText text="Login" delay={0} />
          <InputField label="Username" type="text" />
          <InputField label="Password" type="password" />
          <button className="w-full h-11 border-2 border-[#e46033] rounded-full text-white font-semibold relative overflow-hidden group mb-4">
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-b from-[#25252b] via-[#e46033] to-[#25252b] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          <p className="text-white text-sm text-center">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => setIsRegister(true)}
              className="text-[#e46033] font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </motion.div>

        {/* REGISTER FORM */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center px-10 z-20"
          animate={{ x: isRegister ? '0%' : '120%', opacity: isRegister ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedText text="Register" delay={1.2} />
          <InputField label="Username" type="text" />
          <InputField label="Email" type="email" />
          <InputField label="Password" type="password" />
          <button className="w-full h-11 border-2 border-[#e46033] rounded-full text-white font-semibold relative overflow-hidden group mb-4">
            <span className="relative z-10">Register</span>
            <div className="absolute inset-0 bg-gradient-to-b from-[#25252b] via-[#e46033] to-[#25252b] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          <p className="text-white text-sm text-center">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setIsRegister(false)}
              className="text-[#e46033] font-semibold hover:underline"
            >
              Sign In
            </button>
          </p>
        </motion.div>

        {/* INFO SECTIONS */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center text-right px-4 z-10"
          animate={{ x: isRegister ? '120%' : '0%', opacity: isRegister ? 0 : 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white uppercase leading-tight">Welcome Back!</h2>
          <p className="text-white mt-2">We are happy to have you with us again.</p>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center text-left pl-10 pr-36 z-10"
          animate={{ x: isRegister ? '0%' : '-120%', opacity: isRegister ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white uppercase leading-tight">Welcome!</h2>
          <p className="text-white mt-2">We’re delighted to have you here.</p>
        </motion.div>

      </div>
    </div>
  );
};

export default AuthForm;

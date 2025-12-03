import { IoMdClose } from "react-icons/io";
import loginposter from '../assets/loginmodule.svg';
import busicon from '../assets/bus-icon.svg';
import { motion } from "framer-motion";

export default function Loginmodal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
             initial={{ y: 300 }}
             animate={{ y: 0 }}
             transition={{ duration: 1, ease: 'easeOut'}}
             className="bg-white rounded-md shadow-lg w-full md:max-w-2xl flex flex-col p-1 h-fit">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="relative hidden md:block">
                        <img src={loginposter} alt="" />
                        <div className="absolute inset-0 flex flex-col py-4 px-4">
                            <span className="text-white text-2xl font-bold">
                                Unlock the
                            </span>
                            <span className="text-white text-2xl font-bold">
                                Smarter Way to Travel
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="px-2 flex flex-col gap-2 relative">
                            <div className="flex justify-end py-2">
                                <button onClick={onClose}>
                                    <IoMdClose className="text-2xl" />
                                </button>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div><img src={busicon} alt="" className="w-13 h-13" /></div>
                                <div className="text-red-500 font-bold text-md">Sign in to avail exciting discounts and cashbacks!!</div>
                            </div>
                            <input
                                type="mobile"
                                placeholder="Enter your phone number"
                                className="border p-2 rounded"
                            />
                            <button className="bg-red-300 p-2 !rounded-sm">
                                <span className="text-white font-bold text-sm">GENERATE OTP (One Time Password)</span>
                            </button>
                            <div className="text-center">
                                <span className="text-xs text-bold text-gray-700"><strong>OR,</strong> Connect using social accounts</span>
                            </div>
                            <button className="bg-blue-500 text-white py-2 rounded font-semibold">
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

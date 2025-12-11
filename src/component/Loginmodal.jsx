import { IoMdClose } from "react-icons/io";
import loginposter from '../assets/loginmodule.svg';
import busicon from '../assets/bus-icon.svg';
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import FloatingInput from "./FloatingInput";

export default function Loginmodal({ onClose }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleerrors = (errors) => { };
    const emailValue = watch("email");
    const passwordValue = watch("password");

    const registerOptions = {
        email: {
            required: 'Email is required',
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'please enter a valid email'
            }
        },
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long'
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: 'password must contain number, symbols'
            }
        }
    }
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.form
                onSubmit={handleSubmit(handleerrors)}
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
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
                            <div className="hii">
                                <FloatingInput label="Email" type="email" 
                                {...register('email', registerOptions.email)}
                                value={emailValue} />
                                <div className="bg-none h-4">
                                {errors.email && <p className="text-red-500 text-sm m-0">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div>
                                <FloatingInput label="Password" type="password" 
                                {...register('password', registerOptions.password)} 
                                value={passwordValue}/>
                                <div className="bg-none h-4">
                                {errors.password && <p className="text-red-500 text-sm m-0">{errors.password.message}</p>}
                                </div>
                            </div>
                            <button type="submit" className="bg-red-400 p-2 rounded-sm! mt-4 hover:bg-red-600">
                                <span className="text-white font-bold text-sm">Log in</span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.form>
        </div>
    );
}

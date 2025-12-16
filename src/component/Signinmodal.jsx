import FloatingInput from "./FloatingInput";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { pattern } from "framer-motion/client";
import { BiSolidError } from "react-icons/bi";

export default function Signinmodal({ onClose, openAccountDrawer }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleerrors = (errors) => { };
    const emailValue = watch("email");
    const passwordValue = watch("password");
    const registerOptions = {
        username: {
            required: 'Username is required',
            pattern: {
                // value: /^[a-zA-Z]{3,20}$/,
                value: /^[A-Za-z\s]{3,20}$/,
                message: 'Username contains only letters and name length minimum 3 characters'
            },
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email"
            },
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "password must contain number, symbols"
            },
        },
    }
    return (
        <div className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center">
            <form onSubmit={handleSubmit(handleerrors)}
                className="bg-white rounded-xl w-full max-w-sm p-4">
                <div className="flex items-center justify-between">
                    <button onClick={openAccountDrawer}>
                        ←
                    </button>
                    <button onClick={onClose} className="p-2 cursor-pointer"><IoMdClose className="text-2xl" /></button>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-lg font-bold">Sign In</h2>
                    <section className="w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="font-bold text-lg">Username:</label>
                            <input type="text" id="name" placeholder=""
                                {...register("username", registerOptions.username)}
                                className="border-b border-gray-500 px-2 py-2 text-base outline-none focus:border-black transition-all" />
                        </div>
                        <div className="h-4">{errors.username && <span className="text-red-500 text-sm flex gap-1"><i className="pt-1"><BiSolidError size={13}/></i><p className="m-0">{errors.username.message}</p></span>}</div>
                    </section>
                    <section className="w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="font-bold text-lg">Email:</label>
                            <input type="email" id="email" placeholder=""
                                {...register("email", registerOptions.email)}
                                className="border-b border-gray-500 px-2 py-2 text-base outline-none focus:border-black transition-all" />
                        </div>
                        <div className="h-4">{errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}</div>
                    </section>
                    <section className="w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="password" className="font-bold text-lg">Password:</label>
                            <input type="password" id="password" placeholder=""
                                {...register("password", registerOptions.password)}
                                className="border-b border-gray-500 px-2 py-2 text-base outline-none focus:border-black transition-all" />
                        </div>
                        <div className="h-4">{errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}</div>
                    </section>
                    <div className="flex w-full">
                        <button type="submit" className="bg-red-400 p-2 rounded-sm! hover:bg-red-600 w-full">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

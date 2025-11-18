import { IoMdClose } from "react-icons/io";

export default function WomenBookingModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] sm:w-[500px] flex flex-col py-4">
                <div className="flex justify-end p-3">
                    <button
                        onClick={onClose}
                    >
                        <i className="text-2xl">
                        <IoMdClose />
                        </i>
                    </button>
                </div>
                <div>
                    <div className="flex flex-col gap-2">
                        <div className="px-2">
                            <h2 className="text-2xl font-extrabold text-black text-center">
                                Booking for women
                            </h2>
                            <p className="text-gray-600 text-center">
                                Providing helpful details to smartly choose bus travel for women
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 py-4 text-center px-4">
                            <div className="p-3 bg-pink-100 rounded-xl">
                                Exclusive deals for women
                            </div>
                            <div className="p-3 bg-pink-100 rounded-xl">
                                Number of women travelling along
                            </div>
                            <div className="p-3 bg-pink-100 rounded-xl">
                                Priority Women helpline available
                            </div>
                            <div className="p-3 bg-pink-100 rounded-xl">
                                Buses preferred by women
                            </div>
                        </div>
                        <div className="flex items-center">
                        <button
                            className="mt-6 w-50 bg-red-600 text-white py-2 rounded-full font-semibold hover:bg-red-700"
                            onClick={onClose}
                        >
                            Got it
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

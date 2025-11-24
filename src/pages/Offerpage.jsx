import { image } from "framer-motion/client";
import offer1 from '../assets/offerbus.png';
import offer2 from '../assets/offerbustwo.png';
import offer3 from '../assets/offerbusthree.png';
import offer4 from '../assets/offerbus.png';
import offer5 from '../assets/offerbustwo.png';
import offer6 from '../assets/offerbusthree.png';
import { motion } from "framer-motion";
import SubpageFooter from "../component/SubpageFooter";


const offerData = [
    { id: 1, bgimage: offer1, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 2, bgimage: offer2, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 3, bgimage: offer3, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 4, bgimage: offer4, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 5, bgimage: offer5, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 6, bgimage: offer6, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 7, bgimage: offer1, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 8, bgimage: offer2, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 9, bgimage: offer3, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 10, bgimage: offer4, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 11, bgimage: offer5, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
    { id: 12, bgimage: offer6, title: "save upto 500 on primo operators", code: "Use Code PRIMO200" },
];
export default function Offerpage() {
    return (
        <>
        
        <section className="max-w-7xl mx-auto px-4">
            <div className="my-4 mx-4 flex items-center justify-center">
                <span className="text-2xl font-bold">Offers</span>
            </div>
            <div className="max-w-4xl mx-auto">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {offerData.map((item) => {
                        return (
                            <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.6 }}
                              key={item.id}  className="bg-white shadow-lg overflow-hidden p-2 dark:bg-gray-800 hover:scale-95 hover:duration-150 cursor-pointer">
                                <div>
                                <img src={item.bgimage} alt="" className="object-cover w-full h-full"/>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="px-2 py-2 text-semibold text-black">
                                        {item.title}
                                    </div>
                                    <div className="text-end text-gray-600 text-xs text-bold">{item.code}</div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
        <section>
            <SubpageFooter />
        </section>
        </>
    )
}
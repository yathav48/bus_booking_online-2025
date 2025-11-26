// import { useEffect } from "react";
// import NextpageNavbar from "../component/NextpageNavbar";
// import SubpageFooter from "../component/SubpageFooter";
// import { Link } from "react-router-dom";
// export default function Bookingpage() {
//     useEffect(() => {
//         document.title = 'Online Bus Ticket Booking / Booking page';
//     },[]);
//     return (
//         <>
//         <section className="bg-gray-300 h-[15rem] !p-[2.5rem]">
//             <div className="!p-[3rem] bg-white max-w-7xl mx-auto shadow-lg rounded-lg">
//                 <div className="text-center text-sm font-bold text-gray-700">
//                     Please login to view the profile Details <Link to="/login">Login Now</Link> OR <a href="/buspage">Go to home page</a>
//                 </div>
//             </div>
//         </section>
//         <section>
//             <SubpageFooter />
//         </section>
//         </>
//     )
// }

import { useEffect, useState } from "react";
import SubpageFooter from "../component/SubpageFooter";
import LoginModal from "../component/Loginmodal";
import { Link } from "react-router-dom";


export default function Bookingpage() {
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        document.title = 'Online Bus Ticket Booking / Booking page';
    }, []);

    return (
        <>
            <section className="bg-gray-300 h-[15rem] !p-[2.5rem]">
                <div className="!p-[3rem] bg-white max-w-7xl mx-auto shadow-lg rounded-lg">
                    <div className="text-center text-sm font-bold text-gray-700">
                        Please login to view the profile Details{" "}
                        <button 
                            className="text-blue-600 underline"
                            onClick={() => setShowLogin(true)}
                        >
                            Login Now
                        </button>{" "}
                        OR <Link to="/buspage">Go to home page</Link>
                    </div>
                </div>
            </section>

            <section>
                <SubpageFooter />
            </section>

            {showLogin && (
                <LoginModal onClose={() => setShowLogin(false)} />
            )}
        </>
    )
}

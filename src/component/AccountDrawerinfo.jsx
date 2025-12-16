import RightDrawer from "./RightDrawer"
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Signinmodal from './Signinmodal';
import { TfiMenuAlt } from "react-icons/tfi";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from "react";
import Loginmodal from "./Loginmodal";
export default function AccountDrawerinfo({ openDrawer, setOpenDrawer }) {
    const [showSignin, setShowSignin] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        if (openDrawer || showSignin) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup (important)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openDrawer, showSignin]);

    return (
        <div>
            <RightDrawer open={openDrawer} onOpenChange={setOpenDrawer} className="w-full xl:w-1/4">
                <div>
                    <div className='p-4 pb-0'>
                        <div className='text-2xl font-bold text-black mb-4'>Login to manage your booking</div>
                        <div>
                            <button
                                onClick={() => setShowLogin(true)}
                                className='px-4 py-2 bg-red-600 text-white text-lg font-bold rounded-full! w-full'>Log In</button>
                        </div>
                        <div className='py-2'>Don't have an account? <button className="text-black underline ml-2"
                            onClick={() => setShowSignin(true)}>
                            <strong>Sign Up</strong></button></div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <section>
                        <div className='text-black font-bold text-2xl mb-4 px-4'>My details</div>
                        <Nav.Link className='py-2 px-4' href='/bookingpage' onClick={() => setOpenDrawer(false)}>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center gap-4 text-lg font-semibold'>
                                    <i><TfiMenuAlt size={18} /></i>
                                    <span>Bookings</span>
                                </div>
                                <div>
                                    <i><IoIosArrowForward /></i>
                                </div>
                            </div>
                        </Nav.Link>
                        <Nav.Link className='py-2 border-y! border-gray-300! px-4' href='/personalinfo' onClick={() => setOpenDrawer(false)}>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row items-center gap-4 text-lg font-semibold'>
                                    <i><MdOutlinePersonOutline /></i>
                                    <span>Personal information</span>
                                </div>
                                <div>
                                    <i><IoIosArrowForward /></i>
                                </div>
                            </div>
                        </Nav.Link>
                    </section>
                </div>
            </RightDrawer>
            {showSignin && (
                <Signinmodal
                    onClose={() => setShowSignin(false)}
                    openAccountDrawer={() => {
                        setShowSignin(false);
                        setOpenDrawer(true);
                    }}
                />
            )}
            {showLogin && (
                <Loginmodal
                    onClose={() => setShowLogin(false)}
                    openAccountDrawer={() => {
                        setShowLogin(false);
                        setOpenDrawer(true);
                    }}
                />
            )}
        </div>
    )
}
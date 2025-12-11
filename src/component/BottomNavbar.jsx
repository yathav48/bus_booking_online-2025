import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import './BottomNavbar.css';
import RightDrawer from "./RightDrawer";
import { useState } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";


export default function BottomNavbar() {
    const location = useLocation();
    const currentpath = location.pathname;
    const [openDrawer, setOpenDrawer] = useState(false);
    console.log('currentpath in bottom nav:', currentpath);
    return (
        <>
            <Nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-3 lg:!hidden z-50">
                <Nav.Link as={NavLink} to='/buspage' className={`active-bottom-nav ${(currentpath === '/buspage' || currentpath === '/') ? 'active' : ''} flex flex-row items-center !text-gray-600 text-sm`}>
                    <div className="flex items-center justify-center icon">
                        <MdHome size={22} />
                    </div>
                        <span className="font-semibold text-xs">Home</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/bookingpage" className="flex flex-row items-center !text-gray-600 text-sm">
                    <div className="flex items-center justify-center">
                        <TfiMenuAlt size={22} />
                    </div>
                    <span className="font-semibold text-xs">Bookings</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/helppage" className="flex flex-row items-center !text-gray-600 text-sm">
                    <div className="flex items-center justify-center">
                        <IoMdHelpCircleOutline size={22} />
                    </div>
                    <span className="font-semibold text-xs">Help</span>
                </Nav.Link>
                <Nav.Link as={NavLink} to="#account" className="flex flex-row items-center !text-gray-600 text-sm">
                    <div className="flex items-center justify-center">
                        <MdOutlineAccountCircle size={22} />
                    </div>
                    <span className="font-semibold text-xs">Account</span>
                </Nav.Link>
            </Nav>
            <RightDrawer open={openDrawer} onOpenChange={setOpenDrawer} className="w-full xl:w-1/4">
                <div>
                    <div className='p-4 pb-0'>
                        <div className='text-2xl font-bold text-black mb-4'>Login to manage your booking</div>
                        <div>
                            <button className='px-4 py-2 bg-red-600 text-white text-lg font-bold rounded-full! w-full'>Log In</button>
                        </div>
                        <div className='py-2'>Don't have an account? <button className="text-black underline ml-2"><strong>Sign Up</strong></button></div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <section>
                        <div className='text-black font-bold text-2xl mb-4 px-4'>My details</div>
                        <Nav.Link className='py-2 border-b! border-gray-300! px-4 ' to='/bookingpage' onClick={() => setOpenDrawer(false)}>
                            <div className='flex flex-row items-center gap-4 text-lg font-semibold'>
                                <i><TfiMenuAlt size={18} /></i>
                                <span>Bookings</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link className='py-2 border-b border-gray-300 px-4' to='/personalinfo' onClick={() => setOpenDrawer(false)}>
                            <div className='flex flex-row items-center gap-4 text-lg font-semibold'>
                                <i><MdOutlinePersonOutline /></i>
                                <span>Personal information</span>
                            </div>
                        </Nav.Link>
                    </section>
                </div>
            </RightDrawer>
        </>
    )
}
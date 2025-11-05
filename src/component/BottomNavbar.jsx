import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import './BottomNavbar.css';


export default function BottomNavbar() {
    const location = useLocation();
    const currentpath = location.pathname;
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
        </>
    )
}
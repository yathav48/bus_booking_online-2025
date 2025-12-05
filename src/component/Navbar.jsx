import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import busIcon from '../assets/bus-icon.svg';
import trainIcon from '../assets/train.svg';
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';
import RightDrawer from './RightDrawer';
import { MdOutlinePersonOutline } from "react-icons/md";

export default function Navbarcomponent() {
    const location = useLocation();
    const currentpath = location.pathname;
    const [openDrawer, setOpenDrawer] = useState(false);
    console.log('currrentpath:', currentpath);
    return (
        <>
            <Navbar expand="lg" className="bg-white shadow-lg navbar-main p-0">
                <Container className="d-flex justify-content-between align-items-center px-4 max-w-7xl!">

                    <div className="d-flex align-items-center gap-4 w-full">
                        <div className='hidden md:block'>
                            <Nav.Link as={NavLink} to='/'>
                                <img src={busIcon} alt="bus-logo" width={50} />
                            </Nav.Link>
                        </div>


                        <Nav className="flex flex-row gap-2 align-items-center booking-links justify-around w-full md:w-fit">
                            <Nav.Link as={NavLink} to='/buspage'>
                                <div className={`navbar-active ${(currentpath === '/buspage' || currentpath === '/') ? 'active' : ''}`}>
                                    <img src={busIcon} alt="bus" />
                                    <span className='pr-[2]'>Bus Tickets</span>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/trainpage'>
                                <div className={`navbar-active ${(currentpath === '/trainpage') ? 'active' : ''}`}>
                                    <img src={trainIcon} alt="train" />
                                    <span>Train Tickets</span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>


                    <Nav className="!hidden lg:!flex d-flex flex-row gap-4 align-items-center right-menu">
                        <Nav.Link href="/bookingpage" target='_blank' rel="noopener noreferrer" className="d-flex align-items-center gap-1">
                            <TfiMenuAlt size={18} />
                            <span>Bookings</span>
                        </Nav.Link>
                        <Nav.Link href="/helppage" target='_blank' rel='noopener noreferrer' className="d-flex align-items-center gap-1">
                            <IoMdHelpCircleOutline size={20} />
                            <span>Help</span>
                        </Nav.Link>
                        <Nav.Link href="#account"
                            onClick={() => setOpenDrawer(true)}
                            className="d-flex align-items-center gap-1">
                            <MdOutlineAccountCircle size={20} />
                            <span>Account</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <RightDrawer open={openDrawer} onOpenChange={setOpenDrawer}>
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
    );
}

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
import { IoIosArrowForward } from "react-icons/io";
import Signinmodal from './Signinmodal';
import AccountDrawerinfo from './AccountDrawerinfo';


export default function Navbarcomponent() {
    const location = useLocation();
    const currentpath = location.pathname;
    const [openDrawer, setOpenDrawer] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
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
                        <Nav.Link as='button'
                            onClick={() => setOpenDrawer(true)}
                            className="d-flex align-items-center gap-1">
                            <MdOutlineAccountCircle size={20} />
                            <span>Account</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <AccountDrawerinfo
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
            {showSignin && <Signinmodal />}
        </>
    );
}

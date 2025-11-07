import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import busIcon from '../assets/bus-icon.svg';
import trainIcon from '../assets/train.svg';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaHeadset } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function NextpageNavbar() {
    const location = useLocation();
    const currentpath = location.pathname;
    console.log('currrentpath:', currentpath);
    return (
        <>
            <Navbar expand="lg" className="bg-white shadow-sm navbar-main">
                <Container fluid className="d-flex justify-content-between align-items-center navbar-container">

                    <div className="d-flex align-items-center gap-4 ">
                        <div className='hidden md:block'>
                            <Nav.Link as={NavLink} to='/'>
                                <img src={busIcon} alt="bus-logo" width={50} />
                            </Nav.Link>
                        </div>


                        <Nav className="d-flex flex-row gap-2 align-items-center booking-links">
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
                            <FaHeadset size={20}/>
                            <span>Bookings</span>
                        </Nav.Link>
                        <Nav.Link href="/helppage" target='_blank' rel='noopener noreferrer' className="d-flex align-items-center gap-1">
                            <LiaLanguageSolid size={20}/>
                            <span>Help</span>
                        </Nav.Link>
                        <Nav.Link href="#account" className="d-flex align-items-center gap-1">
                            <MdOutlineAccountCircle size={20} />
                            <span>Account</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
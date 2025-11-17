import AboutContainer from "../component/AboutContainer";
import BottomNavbar from "../component/BottomNavbar";
import BusSearchBar from "../component/BusSearchBar";
import FestivalBooking from "../component/FestivalBooking";
import Footer from "../component/Footer";
import Navbarcomponent from "../component/Navbar";
import ParagraphContent from "../component/ParagraphContent";

export default function Home() {
    return (
        <>
        <div className="homepage-layout">
            <div className="!pl-4 md:hidden">
            <span className="text-2xl font-bold text-black">Bus Tickets</span>
            </div>
            <div className="homepage-bg position-relative hidden md:block">
                <div className= "absolute bg-linear inset-0 bg-gradient-to-tr from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]">
                    <div className="absolute top-30 start-70 translate-middle text-start text-white text-capitalize text-weight-800 title hidden md:block">
                        <h1>india's no:1 online<br /> bus ticket booking site</h1>
                    </div>
                </div>

            </div>
            <BusSearchBar />
            <FestivalBooking />
            <ParagraphContent />
            <Footer />
            <AboutContainer />
            <BottomNavbar />
        </div>
        </>
    )
}
import { Route, Routes } from "react-router-dom";
import TrainHomePage from "../pages/TrainHomePage";
import BusHomePage from "../pages/BusHomePage"
import Bookingpage from "../pages/Bookingpage";
import Helppage from "../pages/Helppage"
import Offerpage from "../pages/Offerpage"
import Loginmodal from "../component/Loginmodal";

export default function componentload() {
    return (
        <Routes>
            <Route path='/' element={<BusHomePage />} />
            <Route path='/buspage' element={<BusHomePage />} />
            <Route path='/trainpage' element={<TrainHomePage />} />
            <Route path="/bookingpage" element={<Bookingpage />} >
            <Route path='login' element={<Loginmodal />} />
            </Route>
            <Route path="/helppage" element={<Helppage />} />
            <Route path='/offerpage' element={<Offerpage />} />
        </Routes>
    )
}
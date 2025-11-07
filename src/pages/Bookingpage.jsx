import { useEffect } from "react";
import NextpageNavbar from "../component/NextpageNavbar";
export default function Bookingpage() {
    useEffect(() => {
        document.title = 'Online Bus Ticket Booking / Booking page';
    },[]);
    return (
        <>
        <NextpageNavbar />
        </>
    )
}
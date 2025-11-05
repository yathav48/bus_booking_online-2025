import { useEffect } from "react";
export default function Bookingpage() {
    useEffect(() => {
        document.title = 'Online Bus Ticket Booking / Booking page';
    },[]);
    return (
        <div>
            <h2>Booking page</h2>
        </div>
    )
}
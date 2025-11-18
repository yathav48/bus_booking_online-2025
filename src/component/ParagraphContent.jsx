
export default function ParagraphContent() {
    return (
        <article className="px-4 max-w-7xl mx-auto my-4">
            <section className="">
                <div className="text-black font-bold text-lg py-2">redBus: India’s Leading Online Bus Booking and Train Ticket Booking Platform
                </div>
                <div>
                    <p className="my-4">redBus is India’s leading bus and train ticket booking platform for over 18 years and 56+ million satisfied users. It offers a seamless online ticket booking experience for millions of people.</p>
                    <p className="my-4">
                        With 5200+ bus operators and 730000+ routes on redBus, you can easily find buses to your destination. You can check the best price with exclusive discounts and offers when booking train or bus tickets.
                    </p>
                </div>
            </section>
            <section>
                <div className="text-gray-600 font-bold text-xl py-2">
                    Why Choose redBus for Bus Booking?
                </div>
                <p>
                    Below are some of the reasons why you should choose redBus for booking bus tickets.
                </p>
                <div className="mx-4 px-4">
                    <ul className="p-0 list-disc marker:text-black">
                        <li className="py-2"><strong>Free Cancellation</strong>- Cancel bus tickets without paying cancellation charges.</li>
                        <li className="py-2"><strong>Flexi Ticket</strong>- Select a Flexi ticket to modify your travel date at least 8 hours before departure. </li>
                        <li className="py-2"><strong>Earn Rewards</strong>- Refer your friend and get INR 100 in your redBus wallet after they complete their first trip.</li>
                        <li className="py-2"><strong>24x7 Customer Support</strong>- 24x7 customer support to help you with any query.</li>
                    </ul>
                </div>
            </section>
        </article>
    )
}
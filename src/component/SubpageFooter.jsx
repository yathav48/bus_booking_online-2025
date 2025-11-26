import { div, footer } from "framer-motion/client";
import busicon from "../assets/bus-icon.svg";

export default function SubpageFooter() {
    return (
        <footer className="my-4 bg-gray-200 p-4 flex flex-col gap-4">
            <article className="border-b border-gray-300">

                <div className="flex flex-col lg:flex-row gap-4 p-4">
                    <div className="">
                        <div className="flex flex-col border-b border-gray-300">
                            <div>
                                <img src={busicon} alt="#" className="w-17 h-17" />
                            </div>
                            <div className="text-start text-gray-600 text-sm">
                                redBus is the world's largest online bus ticket booking service trusted by over 56+ million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
                            </div>
                        </div>
                    </div>


                    <div className="w-full">
                        <div>
                            <section>
                                <div className="font-bold text-xl mb-2">About redbus</div>
                                <ul className="flex flex-row p-0 lg:!flex-col gap-2 font-semibold flex-wrap">
                                    <li><a href="#" target="blank">Contact us</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Offers</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <section>
                                <div className="font-bold text-xl mb-2">Info</div>
                                <ul className="flex flex-row p-0 gap-2 lg:!flex-col font-semibold flex-wrap">
                                    <li><a href="#" target="blank">T&C</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Bus operators registration</a></li>
                                    <li><a href="#" target="blank">Agent registration</a></li>
                                    <li><a href="#">Insurance partner</a></li>
                                    <li><a href="#">User agreements</a></li>
                                    <li><a href="#">Primo Bus</a></li>
                                    <li><a href="#" target="blank">Bus Timetable</a></li>
                                    <li><a href="#">Report Security Issues</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <section>
                                <div className="font-bold text-xl mb-2">Global Sites</div>
                                <ul className="flex flex-row p-0 gap-2 lg:!flex-col font-semibold flex-wrap">
                                    <li><a href="#">India</a></li>
                                    <li><a href="#">Singapore</a></li>
                                    <li><a href="#">Malaysia</a></li>
                                    <li><a href="#">Indonesia</a></li>
                                    <li><a href="#">Peru</a></li>
                                    <li><a href="#">Colombia</a></li>
                                    <li><a href="#">Cambodia</a></li>
                                    <li><a href="#">Vietnam</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <section>
                                <div className="font-bold text-xl mb-2">Our Partners</div>
                                <ul className="flex flex-row p-0 gap-2 lg:!flex-col font-semibold flex-wrap">
                                    <li><a href="#">Goibibo Bus</a></li>
                                    <li><a href="#">Goibibo Hotels</a></li>
                                    <li><a href="#">Makemytrip Hotels</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>

                </div>
            </article>
            <article>
                <div className="text-gray-500 text-sm p-4">
                    Ⓒ 2025 Redbus India Pvt Ltd. All rights reserved
                </div>
            </article>
        </footer >
    )
}
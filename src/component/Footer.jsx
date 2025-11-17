
export default function Footer() {
    return (
        <footer className="bg-gray-200">
            <div className="p-4 flex flex-col lg:flex-row lg:justify-between">
                <div>
                    <div>
                        <section>
                            <div className="font-bold text-xl mb-4">About redbus</div>
                            <ul className="flex flex-row p-0 gap-4 lg:!flex-col font-semibold flex-wrap">
                                <li><a href="#" target="blank">Contact us</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Offers</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div>
                    <div>
                        <section>
                            <div className="font-bold text-xl mb-4">Info</div>
                            <ul className="flex flex-row p-0 gap-4 lg:!flex-col font-semibold flex-wrap">
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
                <div>
                    <div>
                        <section>
                            <div className="font-bold text-xl mb-4">Global Sites</div>
                            <ul className="flex flex-row p-0 gap-4 lg:!flex-col font-semibold flex-wrap">
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
                <div>
                    <div>
                        <section>
                            <div className="font-bold text-xl mb-4">Our Partners</div>
                            <ul className="flex flex-row p-0 gap-4 lg:!flex-col font-semibold flex-wrap">
                                <li><a href="#">Goibibo Bus</a></li>
                                <li><a href="#">Goibibo Hotels</a></li>
                                <li><a href="#">Makemytrip Hotels</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    )
}
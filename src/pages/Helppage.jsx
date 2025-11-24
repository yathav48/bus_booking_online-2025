import NextpageNavbar from "../component/NextpageNavbar";
import section1img from '../assets/newcardtwo.webp';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Helppage() {
    return (
        <>
            {/* <NextpageNavbar /> */}
            <article className="px-4 flex flex-col gap-4">
                <section className="w-full bg-white my-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
                        <div className="flex flex-col justify-center">
                            <div className="cursor-pointer">
                                <span className="inline-block bg-gradient-to-r from-purple-800 to-blue-600 text-white text-md py-2 px-4 font-semibold rounded-full hover:bg-gradient-to-l hover:from-pink-500">
                                    PROFESSIONAL & TRUSTWORTHY
                                </span>
                            </div>
                            <div className="flex items-center font-bold mt-4 text-sm gap-2">
                                <span className="bg-gradient-to-r from-purple-800 via-pink-600 to-pink-600 text-transparent bg-clip-text">05 NOV 2025 GOOGLE WORKSPACE</span>
                            </div>
                            <div className="mt-4 text-4xl font-extrabold leading-tight bg-gradient-to-r from-gray-950 to-purple-800 text-transparent bg-clip-text">
                                Website Redesign with AI: How Businesses Scale Growth in the New Digital Era
                            </div>
                            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                In today's hyperconnected business world, credibility begins with how
                                you communicate. Imagine receiving a proposal from a company using a
                                free Gmail or Yahoo ID — would you take it seriously? For most
                                professionals, the answer is no. Your email ad.
                            </p>
                            <button className="flex gap-2 w-max px-4 py-2 items-center bg-gradient-to-r from-purple-900 to-red-700 text-white font-semibold !rounded-full hover:bg-gradient-to-l hover:from-yellow-400">
                                <span>Read more </span>
                                <i className="pt-1"><IoIosArrowRoundForward /></i>
                            </button>
                        </div>

                        <div className="flex items-center">
                            <div className="rounded-2xl overflow-hidden h-fit">
                                <img
                                    src={section1img}
                                    alt=""
                                    className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-white my-4">
                    <div className="px-4">
                        <div className="my-2 bg-gradient-to-r from-purple-950 to-pink-800 text-transparent bg-clip-text w-fit">BLOGS</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-capitalize bg-gradient-to-r from-gray-900 to-purple-800 text-transparent bg-clip-text w-fit text-2xl font-extrabold">latest blogs</div>
                            <p className="text-gray-600">We take pride in helping our clients achieve remarkable growth and success. Every project is a story of collaboration, innovation, and measurable impact. Behind every successful project lies a story worth sharing.</p>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div
                                    className="bg-white rounded-4xl shadow-sm border overflow-hidden cursor-pointer relative">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                            src={section1img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="flex !-mt-9">
                                            <span className="bg-gradient-to-r from-purple-900 to-blue-700 text-white text-xs font-semibold py-1 px-2 rounded-full">
                                                PROFESSIONAL & TRUSTWORTHY
                                            </span>
                                        </span>
                                        <div className="font-bold text-gray-900 text-lg leading-tight">
                                            Website Redesign with Al: How Busine sses Scale Growth in Scale Growth in t Scale Growth in the Digital Era
                                        </div>
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-xs text-gray-500 ">Very good web designer. Will continue to work with. He Und er stand What You Want Is Determine To Do The Job Will Hire Determine To Do The Job Will Hire Him Again.</p>
                                            <span className="font-semibold text-sm bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit">05 NOV 2025 BY AMAZEFOX</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-4xl shadow-sm border overflow-hidden cursor-pointer relative">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                            src={section1img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="flex !-mt-9">
                                            <span className="bg-gradient-to-r from-purple-900 to-pink-800 text-white text-xs font-semibold py-1 px-2 rounded-full">
                                                PROFESSIONAL & TRUSTWORTHY
                                            </span>
                                        </span>
                                        <div className="font-bold text-gray-900 text-lg leading-tight">
                                            Website Redesign with Al: How Busine sses Scale Growth in Scale Growth in t Scale Growth in the Digital Era
                                        </div>
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-xs text-gray-500 ">Very good web designer. Will continue to work with. He Und er stand What You Want Is Determine To Do The Job Will Hire Determine To Do The Job Will Hire Him Again.</p>
                                            <span className="font-semibold text-sm bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit">05 NOV 2025 BY AMAZEFOX</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-4xl shadow-sm border overflow-hidden cursor-pointer relative">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                            src={section1img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="flex !-mt-9">
                                            <span className="bg-gradient-to-r from-purple-900 to-blue-700 text-white text-xs font-semibold py-1 px-2 rounded-full">
                                                PROFESSIONAL & TRUSTWORTHY
                                            </span>
                                        </span>
                                        <div className="font-bold text-gray-900 text-lg leading-tight">
                                            Website Redesign with Al: How Busine sses Scale Growth in Scale Growth in t Scale Growth in the Digital Era
                                        </div>
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-xs text-gray-500 ">Very good web designer. Will continue to work with. He Und er stand What You Want Is Determine To Do The Job Will Hire Determine To Do The Job Will Hire Him Again.</p>
                                            <span className="font-semibold text-sm bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit">05 NOV 2025 BY AMAZEFOX</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-4xl shadow-sm border overflow-hidden cursor-pointer relative">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                            src={section1img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="flex !-mt-9">
                                            <span className="bg-gradient-to-r from-purple-900 to-blue-700 text-white text-xs font-semibold py-1 px-2 rounded-full">
                                                PROFESSIONAL & TRUSTWORTHY
                                            </span>
                                        </span>
                                        <div className="font-bold text-gray-900 text-lg leading-tight">
                                            Website Redesign with Al: How Busine sses Scale Growth in Scale Growth in t Scale Growth in the Digital Era
                                        </div>
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-xs text-gray-500 ">Very good web designer. Will continue to work with. He Und er stand What You Want Is Determine To Do The Job Will Hire Determine To Do The Job Will Hire Him Again.</p>
                                            <span className="font-semibold text-sm bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit">05 NOV 2025 BY AMAZEFOX</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-4xl shadow-sm border overflow-hidden cursor-pointer relative">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                            src={section1img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="flex !-mt-9">
                                            <span className="bg-gradient-to-r from-purple-900 to-pink-800 text-white text-xs font-semibold py-1 px-2 rounded-full">
                                                PROFESSIONAL & TRUSTWORTHY
                                            </span>
                                        </span>
                                        <div className="font-bold text-gray-900 text-lg leading-tight">
                                            Website Redesign with Al: How Busine sses Scale Growth in Scale Growth in t Scale Growth in the Digital Era
                                        </div>
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-xs text-gray-500 ">Very good web designer. Will continue to work with. He Und er stand What You Want Is Determine To Do The Job Will Hire Determine To Do The Job Will Hire Him Again.</p>
                                            <span className="font-semibold text-sm bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit">05 NOV 2025 BY AMAZEFOX</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-4xl shadow-sm border overflow-hidden cursor-pointer relative">
                                    <div className="h-40 w-full overflow-hidden">
                                        <img
                                            src={section1img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="flex !-mt-9">
                                            <span className="bg-gradient-to-r from-purple-900 to-blue-700 text-white text-xs font-semibold py-1 px-2 rounded-full">
                                                PROFESSIONAL & TRUSTWORTHY
                                            </span>
                                        </span>
                                        <div className="font-bold text-gray-900 text-lg leading-tight">
                                            Website Redesign with Al: How Busine sses Scale Growth in Scale Growth in t Scale Growth in the Digital Era
                                        </div>
                                        <div className="flex flex-col font-semibold">
                                            <p className="text-xs text-gray-500 ">Very good web designer. Will continue to work with. He Und er stand What You Want Is Determine To Do The Job Will Hire Determine To Do The Job Will Hire Him Again.</p>
                                            <span className="font-semibold text-sm bg-gradient-to-r from-purple-800 to-orange-700 text-transparent bg-clip-text w-fit">05 NOV 2025 BY AMAZEFOX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}
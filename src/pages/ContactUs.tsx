import Footer from '../components/component/Footer/Footer'
import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import contact from "../assets/Contact.png";
import location from "../assets/Location.png";
import time from "../assets/Time.png";
import SliderHeader from '../components/component/Header/SliderHeader';

export default function ContactUs() {
    return (
        <div>
            <SliderHeader />

            <section>
                <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={minibanner}
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={bannerVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay and Text */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-[#FFD42D] text-3xl md:text-4xl font-heading tracking-wide">
                            Contact Us
                        </h1>
                    </div>

                    {/* Torn Edge at Bottom */}
                    <img
                        src={bgframe}
                        alt="Torn Edge"
                        className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
                    />
                </div>
            </section>


            <section className="py-12    px-4 bg-[#F4F4F4]">
                {/* Get in Touch Section */}
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                    <h2 className="text-green-700 font-heading text-2xl md:text-4xl font-semibold">
                        Get in Touch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                        {/* Contact Info */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border">
                            <div className="text-green-600 text-3xl mb-2 flex justify-center">
                                <img src={contact} alt="Contact" className="h-10" />
                            </div>
                            <p className="text-gray-800 font-semibold">+973 4040 8556</p>
                            <p className="text-gray-800 font-semibold">kidskingdom@gmail.com</p>
                        </div>

                        {/* Timings */}
                        <div className="bg-white rounded-lg p-5 shadow-sm border">
                            <div className="text-green-600 text-3xl mb-2 flex justify-center">
                                <img src={time} alt="Time" className="h-10" />
                            </div>
                            <p className="text-gray-800 font-semibold">
                                Weekday: 10 AM to 6 PM
                            </p>
                            <p className="text-gray-800 font-semibold">
                                Weekend: 9 AM to 7 PM
                            </p>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-2 bg-white rounded-lg p-5 shadow-sm border">
                            <div className="text-green-600 text-3xl mb-2 flex justify-center">
                                <img src={location} alt="Location" className="h-10" />
                            </div>
                            <p className="text-gray-800 text-sm">
                                Manama | Marina Beach | Lulu Hypermarket - Hidd | Lulu Hypermarket - Riffa
                            </p>
                            <p className="text-gray-800 font-semibold mt-1">
                                Kids Kingdom, 6HPC+4CQ, Manama, Bahrain, Manama, Bahrain
                            </p>
                        </div>
                    </div>

                </div>

                {/* Suggestions and Enquiry */}
                <div className="mt-12 max-w-4xl mx-auto">
                    <h2 className="text-green-700 font-heading text-2xl md:text-4xl font-semibold text-center mb-6">
                        Suggestions and Enquiry
                    </h2>
                    <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Name*</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-1 text-sm">Mobile*</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1 text-sm">CPR Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter your cpr number"
                                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-1 text-sm">Email*</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1 text-sm">Member*</label>
                                <input
                                    type="number"
                                    placeholder="Enter how many members?"
                                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Message</label>
                            <textarea
                                placeholder="Enter your message"
                                rows={4}
                                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                            ></textarea>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-[#FFD42D] hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-md shadow-md"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </section>


            <Footer />
        </div>
    )
}

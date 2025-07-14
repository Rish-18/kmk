import Footer from '../components/component/Footer/Footer'
import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';
import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";

export default function Blog() {
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
                            Explore Ride & Game Blogs
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


            {/* cards */}
            <section className="px-4 py-10 bg-[#F4F4F4] border-none">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* card 1 */}
                        <div

                            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
                        >
                            <img
                                src={blog1}
                                alt="Amusement Park Offer"
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <p className="text-green-600 font-bold text-lg md:text-2xl">
                                    Student Special – 35% Off on Non-Stop Fun!
                                </p>
                                <p className="text-gray-800 mt-2 text-sm md:text-base">
                                    Students, this one's for you! Gear up for unlimited rides,
                                    splashes & non-stop adventure at Park.
                                </p>
                                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div
                            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
                        >
                            <img
                                src={blog2}
                                alt="Amusement Park Offer"
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <p className="text-green-600 font-bold text-lg md:text-2xl">
                                    Student Special – 35% Off on Non-Stop Fun!
                                </p>
                                <p className="text-gray-800 mt-2 text-sm md:text-base">
                                    Students, this one's for you! Gear up for unlimited rides,
                                    splashes & non-stop adventure at Park.
                                </p>
                                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div
                            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
                        >
                            <img
                                src={blog3}
                                alt="Amusement Park Offer"
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <p className="text-green-600 font-bold text-lg md:text-2xl">
                                    Student Special – 35% Off on Non-Stop Fun!
                                </p>
                                <p className="text-gray-800 mt-2 text-sm md:text-base">
                                    Students, this one's for you! Gear up for unlimited rides,
                                    splashes & non-stop adventure at Park.
                                </p>
                                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                                    View Details
                                </button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div

                            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
                        >
                            <img
                                src={blog1}
                                alt="Amusement Park Offer"
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <p className="text-green-600 font-bold text-lg md:text-2xl">
                                    Student Special – 35% Off on Non-Stop Fun!
                                </p>
                                <p className="text-gray-800 mt-2 text-sm md:text-base">
                                    Students, this one's for you! Gear up for unlimited rides,
                                    splashes & non-stop adventure at Park.
                                </p>
                                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div
                            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
                        >
                            <img
                                src={blog2}
                                alt="Amusement Park Offer"
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <p className="text-green-600 font-bold text-lg md:text-2xl">
                                    Student Special – 35% Off on Non-Stop Fun!
                                </p>
                                <p className="text-gray-800 mt-2 text-sm md:text-base">
                                    Students, this one's for you! Gear up for unlimited rides,
                                    splashes & non-stop adventure at Park.
                                </p>
                                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div
                            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
                        >
                            <img
                                src={blog3}
                                alt="Amusement Park Offer"
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <p className="text-green-600 font-bold text-lg md:text-2xl">
                                    Student Special – 35% Off on Non-Stop Fun!
                                </p>
                                <p className="text-gray-800 mt-2 text-sm md:text-base">
                                    Students, this one's for you! Gear up for unlimited rides,
                                    splashes & non-stop adventure at Park.
                                </p>
                                <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

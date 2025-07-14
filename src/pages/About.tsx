import Footer from '../components/component/Footer/Footer'
import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';
import parkbg from '../assets/park-bg.png';

import img1 from '../assets/aboutimg1.png';
import img2 from '../assets/aboutimg2.png';
import img3 from '../assets/aboutimg3.png';
import img4 from '../assets/aboutimg4.png';
import img5 from '../assets/aboutimg5.png';
import img6 from '../assets/aboutimg6.png';
import img7 from '../assets/aboutimg7.png';
import img8 from '../assets/aboutimg8.png';
import aboutbg from '../assets/about-bg.png';
import aboutoffer1 from '../assets/aboutoffer1.png';
import aboutoffer2 from '../assets/aboutoffer2.png';
import aboutoffer3 from '../assets/aboutoffer3.png';
import aboutoffer4 from '../assets/aboutoffer4.png';
import aboutofferbg from '../assets/aboutoffer-bg.png';
import aboutchooseus from '../assets/aboutchooseus.png';

export default function About() {
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
                        <h1 className="text-[#FFD42D] text-2xl md:text-4xl font-heading tracking-wide">
                            About Kids Kingdom
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
            <section
                className="bg-[#F4F4F4] py-12 px-6 text-center relative bg-cover bg-center"

            >
                <div className="max-w-4xl mx-auto">
                    <div style={{ backgroundImage: `url(${parkbg})`, backgroundRepeat: 'no-repeat' }} className="bg-contain ">

                        <h2 className="text-2xl md:text-4xl font-bold text-[#009D48] font-[cursive] mb-2" >
                            Welcome to <br />
                            <span className="text-2xl md:text-4xl text-[#009D48]">Kids Kingdom Entertainment</span>
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4 max-w-3xl mx-auto pb-10">
                            Established in 1998, Kids Kingdom Entertainment w.l.l. is Bahrain’s premier destination for children’s
                            entertainment. Located in the heart of the city, our vibrant and colorful park offers a wide array of
                            fun-filled activities designed to delight and inspire young minds
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                            <img src={img1} alt="1" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img2} alt="2" className="rounded-lg w-60 h-60 object-cover" />
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 mt-4 md:mt-10">
                            <img src={img3} alt="3" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img4} alt="4" className="rounded-lg w-60 h-60 object-cover" />
                        </div>

                        {/* Column 3 - Taller */}
                        <div className="flex flex-col gap-4 ">
                            <img src={img5} alt="5" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img6} alt="6" className="rounded-lg w-60 h-60 object-cover" />
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col gap-4 mt-4 md:mt-10">
                            <img src={img7} alt="7" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img8} alt="8" className="rounded-lg w-60 h-60 object-cover" />
                        </div>
                    </div>

                </div>
            </section>

            {/* mission */}
            <section
                className="bg-no-repeat lg:bg-repeat bg-cover md:bg-contain py-14 px-4 text-center bg-[#F4F4F4]"
                style={{ backgroundImage: `url(${aboutbg})` }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#2e2e2e] mb-4 ">
                        Our Mission
                    </h2>
                    <p className="text-base md:text-lg text-[#2e2e2e] leading-relaxed">
                        At Kids Kingdom Entertainment, we are dedicated to providing a safe, engaging, and memorable experience
                        for children of all ages. Our goal is to create an environment where kids can explore, learn, and have
                        fun while building lasting memories with family and friends.
                    </p>
                </div>
            </section>


            {/* offer */}
            <section className="py-12 px-4 md:px-12 bg-[#f4f4f4]">
                <div
                    className="max-w-6xl mx-auto text-center"
                    style={{
                        backgroundImage: `url(${aboutofferbg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-[#009D48] font-[cursive] mb-10">
                        What We Offer
                    </h2>

                    <div className="grid gap-10 text-left">
                        {/* Interactive Play Areas */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                src={aboutoffer1}
                                alt="Interactive Play Areas"
                                className="w-full md:w-[50%] max-h-48 md:max-h-full rounded-lg object-cover"
                            />
                            <div className="text-center md:text-left px-2 md:px-0">
                                <p className="text-base md:text-2xl font-semibold text-gray-800">
                                    Interactive Play Areas
                                </p>
                                <p className="text-sm md:text-xl text-gray-700 mt-1 max-w-md mx-auto md:mx-0">
                                    From soft play zones to climbing structures, our play areas are designed to stimulate imagination and physical activity.
                                </p>
                            </div>
                        </div>

                        {/* Educational Workshops */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
                            <img
                                src={aboutoffer2}
                                alt="Educational Workshops"
                                className="w-full md:w-[50%] max-h-48 md:max-h-full rounded-lg object-cover"
                            />
                            <div className="text-center md:text-left px-2 md:px-0">
                                <p className="text-base md:text-2xl font-semibold text-gray-800">
                                    Educational Workshops
                                </p>
                                <p className="text-sm md:text-xl text-gray-700 mt-1 max-w-md mx-auto md:mx-0">
                                    We offer a variety of workshops that blend fun with learning, including arts and crafts, science experiments, and storytelling sessions.
                                </p>
                            </div>
                        </div>

                        {/* Birthday Parties */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                src={aboutoffer3}
                                alt="Birthday Parties"
                                className="w-full md:w-[50%] max-h-48 md:max-h-full rounded-lg object-cover"
                            />
                            <div className="text-center md:text-left px-2 md:px-0">
                                <p className="text-base md:text-2xl font-semibold text-gray-800">
                                    Birthday Parties
                                </p>
                                <p className="text-sm md:text-xl text-gray-700 mt-1 max-w-md mx-auto md:mx-0">
                                    Make your child’s special day unforgettable with our customizable birthday party packages, complete with themed decorations, games, and activities.
                                </p>
                            </div>
                        </div>

                        {/* Special Events */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
                            <img
                                src={aboutoffer4}
                                alt="Special Events"
                                className="w-full md:w-[50%] max-h-48 md:max-h-full rounded-lg object-cover"
                            />
                            <div className="text-center md:text-left px-2 md:px-0">
                                <p className="text-base md:text-2xl font-semibold text-gray-800">
                                    Special Events
                                </p>
                                <p className="text-sm md:text-xl text-gray-700 mt-1 max-w-md mx-auto md:mx-0">
                                    Join us for our regular events and themed days, where kids can enjoy performances, contests, and interactive shows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="relative bg-[#F4F4F4] py-12 px-4 md:px-8 lg:px-20 text-center overflow-hidden" style={{ backgroundImage: `url(${aboutchooseus})`, backgroundSize: 'cover' }}>
                <div
                    className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none z-0"

                />

                <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-10 relative z-10">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 relative z-10">
                    {/* Card 1 */}
                    <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">Safety First</p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            Our park adheres to the highest safety standards, ensuring a secure environment for all our young visitors.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">Clean and Hygienic</p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            We maintain a clean and hygienic facility, regularly sanitizing all play areas and equipment.
                        </p>
                    </div>

                    {/* Card 3 (No border) */}
                    <div className="space-y-3 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">Expert Staff</p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            Our team of friendly and experienced staff is dedicated to making your child’s visit a joyful and enriching experience.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

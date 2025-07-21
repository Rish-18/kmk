import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Footer from "../components/component/Footer/Footer";
// import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.jpg";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from "../components/component/Header/SliderHeader";
import parkbg from "../assets/park-bg.png";
import img1 from "../assets/aboutimg1.png";
import img2 from "../assets/aboutimg2.png";
import img3 from "../assets/aboutimg3.png";
import img4 from "../assets/aboutimg4.png";
import img5 from "../assets/aboutimg5.png";
import img6 from "../assets/aboutimg6.png";
import img7 from "../assets/aboutimg7.png";
import img8 from "../assets/aboutimg8.png";
import aboutbg from "../assets/about-bg.png";
import aboutoffer1 from "../assets/aboutoffer1.png";
import aboutoffer2 from "../assets/aboutoffer2.png";
import aboutoffer3 from "../assets/aboutoffer3.png";
import aboutoffer4 from "../assets/aboutoffer4.png";
import aboutofferbg from "../assets/aboutoffer-bg.png";
import aboutchooseus from "../assets/aboutchooseus.png";

export default function About() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("LanguageContext is undefined");
    const { t } = context;
    return (
        <div>
            <SliderHeader />

            <section>
                <div className="relative h-[300px] md:h-[550px] w-full overflow-hidden">
                    <video autoPlay muted loop playsInline poster={minibanner} className="absolute inset-0 w-full h-full object-cover">
                        <source src="" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-[#FFD42D] text-2xl md:text-4xl font-heading tracking-wide">
                            {t("about_title")}
                        </h1>
                    </div>
                    <img src={bgframe} alt="Torn Edge" className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full" />
                </div>
            </section>

            <section className="bg-[#F4F4F4] py-12 px-6 text-center relative bg-cover bg-center">
                <div className="max-w-4xl mx-auto">
                    <div style={{ backgroundImage: `url(${parkbg})`, backgroundRepeat: 'no-repeat' }} className="bg-cover ">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#009D48] font-[cursive] mb-2">
                            {t("about_welcome")}
                            <br />
                            <span className="text-2xl md:text-4xl text-[#009D48]">{t("headline")}</span>
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4 max-w-3xl mx-auto pb-10">
                            {t("about_intro")}
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center" dir="ltr">
                        <div className="flex flex-col gap-4">
                            <img src={img1} alt="1" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img2} alt="2" className="rounded-lg w-60 h-60 object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 mt-4 md:mt-10">
                            <img src={img3} alt="3" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img4} alt="4" className="rounded-lg w-60 h-60 object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <img src={img5} alt="5" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img6} alt="6" className="rounded-lg w-60 h-60 object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 mt-4 md:mt-10">
                            <img src={img7} alt="7" className="rounded-lg w-60 h-60 object-cover" />
                            <img src={img8} alt="8" className="rounded-lg w-60 h-60 object-cover" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Mission */}
            <section className="bg-no-repeat lg:bg-repeat bg-cover md:bg-contain py-14 px-4 text-center bg-[#F4F4F4]" style={{ backgroundImage: `url(${aboutbg})` }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#2e2e2e] mb-4">{t("mission_title")}</h2>
                    <p className="text-base md:text-lg text-[#2e2e2e] leading-relaxed">{t("mission_text")}</p>
                </div>
            </section>

            {/* What We Offer */}
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
                        {t("offers_title")}
                    </h2>

                    <div className="grid gap-10 text-left">
                        {(
                            [
                                { img: aboutoffer1, title: "offer1_title", desc: "offer1_desc" },
                                { img: aboutoffer2, title: "offer2_title", desc: "offer2_desc" },
                                { img: aboutoffer3, title: "offer3_title", desc: "offer3_desc" },
                                { img: aboutoffer4, title: "offer4_title", desc: "offer4_desc" },
                            ] as const
                        ).map((offer, i) => (
                            <div
                                key={i}
                                className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                    } items-center gap-4`}
                            >
                                <img
                                    src={offer.img}
                                    alt={`offer-${i}`}
                                    className="w-full md:w-[50%] max-h-48 md:max-h-full rounded-lg object-cover"
                                />
                                <div className="text-center md:text-left px-2 md:px-0">
                                    <p className="text-base md:text-2xl font-semibold text-gray-800">
                                        {t(offer.title)}
                                    </p>
                                    <p className="text-sm md:text-xl text-gray-700 mt-1 max-w-md mx-auto md:mx-0">
                                        {t(offer.desc)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why Choose Us */}
            <section className="relative bg-[#f4f4f4] py-12 px-4 md:px-8 lg:px-20 text-center overflow-hidden">
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
                    style={{ backgroundImage: `url(${aboutchooseus})` }}
                />

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-10 relative z-10">
                    {t("choose_us_title")}
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 relative z-10">
                    {/* Card 1 */}
                    <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">
                            {t("choose_us_card1_title")}
                        </p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            {t("choose_us_card1_desc")}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">
                            {t("choose_us_card2_title")}
                        </p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            {t("choose_us_card2_desc")}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="space-y-3 px-6 py-4">
                        <p className="text-lg md:text-xl font-semibold text-black">
                            {t("choose_us_card3_title")}
                        </p>
                        <p className="text-sm md:text-base max-w-sm mx-auto">
                            {t("choose_us_card3_desc")}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

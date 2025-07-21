import { useContext, useRef, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

import ChooseUs from '../components/component/ChooseUs/ChooseUs';
import Footer from '../components/component/Footer/Footer';
import SliderHeader from '../components/component/Header/SliderHeader';
import SliderComponent from '../components/component/Slider/SliderComponent';

// import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/longminibanner.png";
import bgframe from "../assets/bg-frame.png";
import girl from '../assets/Girl.png';
import offerImg from '../assets/offer-img.png';

import minislide1 from "../assets/minislide1.png";
import minislide2 from "../assets/minislide2.png";
import minislide3 from "../assets/minislide3.png";
import minislide4 from "../assets/minislide4.png";
import minislide5 from "../assets/minislide5.png";
import minislide6 from "../assets/minislide6.png";
import minislide7 from "../assets/minislide7.png";
import minislide8 from "../assets/minislide8.png";

import manamapark from '../assets/manamapark.jpg';
import marinapark from '../assets/marinapark.jpg';
import hiddpark from '../assets/hiddpark.jpg';
import riffapark from '../assets/riffapark.jpg';
import parkbg from '../assets/park-bg.png';

import thumbnail1 from '../assets/home-v1.png';
import thumbnail2 from '../assets/home-v2.png';
import thumbnail3 from '../assets/home-v3.png';
import video1 from '../assets/home-video1.mp4';
import video2 from '../assets/home-video2.mp4';
import video3 from '../assets/home-video3.mp4';
import { Link } from 'react-router-dom';

const allImages = [minislide1, minislide2, minislide3, minislide4, minislide5, minislide6, minislide7, minislide8];
const imagesTop = allImages.slice(0, 4);
const imagesBottom = allImages.slice(4, 8);

export default function Home() {
    const langContext = useContext(LanguageContext);

    if (!langContext) {
        throw new Error("LanguageContext is not available. Did you wrap your app in LanguageProvider?");
    }

    const { t } = langContext;
    const sliderRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    const togglePlay = (index: number) => {
        const video = videoRefs.current[index];
        if (!video) return;

        if (video.paused) {
            video.play();
            setPlayingIndex(index);
        } else {
            video.pause();
            setPlayingIndex(null);
        }
    };

    const scrollSlider = (direction: 'left' | 'right') => {
        const slider = sliderRef.current;
        if (!slider) return;

        const scrollAmount = 260 + 16;
        if (direction === 'left') {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <SliderHeader />

            {/* Banner */}
            <section>
                <div className="relative h-[300px] md:h-[140dvh] w-full overflow-hidden">
                    <video autoPlay muted loop playsInline poster={minibanner} className="absolute inset-0 w-full h-full object-cover">
                        <source src="" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center pb-[0px] md:pb-[200px] lg:pb-[300px]">
                        <div className="text-center space-y-4 px-4">
                            <h1 className="text-[#FFD42D] text-xl md:text-4xl font-heading tracking-wide">
                                {t("welcome")} <br /> {t("headline")}
                            </h1>
                            <p className="text-white text-xs md:text-3xl">
                                {t("subheadline")}
                            </p>
                        </div>
                    </div>

                    <img src={bgframe} alt="Frame" className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none" />
                </div>
            </section>

            {/* Select Your Park */}
            <section className="bg-[#F4F4F4] py-12 px-4 text-center relative z-10 min-h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${parkbg})` }}>
                <div className="md:absolute md:top-[-50%] xl:top-[-70%] md:left-[4%] xl:left-1/5 mx-auto max-w-6xl">
                    <h2 className="text-[#FFD42D] text-3xl md:text-4xl font-heading mb-8">
                        {t("select_your_park")}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                        {[
                            { img: manamapark, label: t("manama") },
                            { img: marinapark, label: t("marina_beach") },
                            { img: hiddpark, label: t("hidd") },
                            { img: riffapark, label: t("riffa") }
                        ].map((park, i) => (
                            <div key={i} className="bg-transparent overflow-hidden rounded-md md:w-[220px] w-full">
                                <img src={park.img} alt={park.label} className="w-full h-auto object-cover" />
                                <div className="py-2 font-semibold text-lg">{park.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SliderComponent />
            <ChooseUs />

            {/* Offers & Combos */}
            <section className="bg-[#f4f4f4]">
                <div className="py-8 px-4 md:px-12 rounded-md max-w-[1200px] flex flex-col md:flex-row items-start gap-4 mx-auto">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img src={girl} alt="Excited Girl" className="h-[300px] md:h-[400px]" />
                    </div>
                    <div className="w-full md:w-2/3 my-auto">
                        <div className="flex justify-between items-center max-w-xl">
                            <h2 className="text-[#009D48] font-semibold text-2xl md:text-4xl">{t("offers_combos")}</h2>
                            <div className="flex gap-2">
                                <button onClick={() => scrollSlider('left')} className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">&lt;</button>
                                <button onClick={() => scrollSlider('right')} className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">&gt;</button>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-700 max-w-xl">{t("offers_description")}</p>
                        <div ref={sliderRef} className="flex gap-4 overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory scroll-smooth">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="min-w-[280px] max-w-[300px] rounded-lg overflow-hidden bg-white shadow snap-center">
                                    <img src={offerImg} alt={`Offer ${i + 1}`} className="w-full h-full object-cover rounded-t" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <Link to="/offers">
                                <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded shadow">
                                    {t("explore_all")}
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* Kids Kingdom Park - keep LTR */}
            <section className="py-16 bg-gradient-to-b from-[#FFE273] to-[#FFD42D]">
                <h2 className="text-3xl md:text-4xl font-heading text-[#3A3A3A] text-center mb-10">{t("kids_kingdom_heading")}</h2>
                <div className="overflow-hidden w-full" dir="ltr"
                    style={{ direction: 'ltr' }}>
                    <div className="marquee-track">
                        {[...imagesTop, ...imagesTop].map((img, i) => (
                            <img key={`top-${i}`} src={img} alt={`top-${i}`} className="w-[220px] md:w-[260px] mx-2 rounded-2xl shadow-lg object-cover" />
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden w-full mt-6" dir="ltr"
                    style={{ direction: 'ltr' }}>
                    <div className="marquee-track-reverse">
                        {[...imagesBottom, ...imagesBottom].map((img, i) => (
                            <img key={`bottom-${i}`} src={img} alt={`bottom-${i}`} className="w-[220px] md:w-[260px] mx-2 rounded-2xl shadow-lg object-cover" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Hear From Us */}
            <section className="py-10 bg-[#F4F4F4]">
                <h2 className="text-center text-2xl md:text-4xl font-heading font-semibold mb-8">{t("hear_from_us")}</h2>
                <div className="max-w-6xl mx-auto px-4 md:px-10">
                    <div className="flex gap-4 overflow-x-auto md:hidden no-scrollbar pb-4 snap-x snap-mandatory">
                        {[{ video: video1, thumbnail: thumbnail1 }, { video: video2, thumbnail: thumbnail2 }, { video: video3, thumbnail: thumbnail3 }].map((item, index) => (
                            <div key={index} className="relative min-w-[250px] max-w-[300px] rounded-lg overflow-hidden bg-black snap-center aspect-[3/4]">
                                <video
                                    ref={(el) => { videoRefs.current[index] = el }}
                                    src={item.video}
                                    poster={item.thumbnail}
                                    className="w-full h-full object-cover transition cursor-pointer"
                                    muted loop playsInline
                                    onClick={() => togglePlay(index)}
                                />
                                {playingIndex !== index && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button onClick={() => togglePlay(index)} className="bg-[#009D48] p-3 rounded-full shadow-lg hover:scale-110 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6"><path d="M8 5v14l11-7z" /></svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ video: video1, thumbnail: thumbnail1 }, { video: video2, thumbnail: thumbnail2 }, { video: video3, thumbnail: thumbnail3 }].map((item, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden bg-black aspect-[3/4]">
                                <video
                                    ref={(el) => { videoRefs.current[index] = el }}
                                    src={item.video}
                                    poster={item.thumbnail}
                                    className="w-full h-full object-cover transition cursor-pointer"
                                    muted loop playsInline
                                    onClick={() => togglePlay(index)}
                                />
                                {playingIndex !== index && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button onClick={() => togglePlay(index)} className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6"><path d="M8 5v14l11-7z" /></svg>
                                        </button>

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

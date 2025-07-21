import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Footer from "../components/component/Footer/Footer";
import offerImg from "../assets/offer-img.png";
// import bannerVideo from "../assets/bannerVideo.mp4";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from "../components/component/Header/SliderHeader";
import minibanner from "../assets/minibanner.png";

export default function OfferPage() {
  const { t } = useContext(LanguageContext)!;

  return (
    <div> 
      <SliderHeader />

      {/* Banner Section */}
      <section>
        <div className="relative h-[300px] md:h-[550px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={minibanner}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-[#FFD42D] text-3xl md:text-4xl font-heading tracking-wide">
              {t("offers_combos")}
            </h1>
          </div>

          <img
            src={bgframe}
            alt="Torn Edge"
            className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
          />
        </div>
      </section>

      {/* Offers Section */}
      <section className="px-4 py-10 bg-[#F4F4F4] border-none">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center"
              >
                <img src={offerImg} alt="Amusement Park Offer" className="w-full h-48" />
                <div className="p-4">
                  <p className="text-green-600 font-bold text-lg md:text-2xl">
                    {t("offer_title")}
                  </p>
                  <p className="text-gray-800 mt-2 text-sm md:text-base">
                    {t("offer_description")}
                  </p>
                  <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded shadow">
                    {t("view_details")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useContext } from 'react';
import Footer from '../components/component/Footer/Footer';
// import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.jpg";
import bgframe from "../assets/bg-frame.png";
import contact from "../assets/Contact.png";
import location from "../assets/Location.png";
import time from "../assets/Time.png";
import SliderHeader from '../components/component/Header/SliderHeader';
import { LanguageContext } from '../context/LanguageContext';

export default function ContactUs() {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t } = langContext;

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
              {t("contact_us_heading")}
            </h1>
          </div>

          <img
            src={bgframe}
            alt="Torn Edge"
            className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
          />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-green-700 font-heading text-2xl md:text-4xl font-semibold">
            {t("get_in_touch")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div className="bg-white rounded-lg p-5 shadow-sm border">
              <div className="text-green-600 text-3xl mb-2 flex justify-center">
                <img src={contact} alt="Contact" className="h-10" />
              </div>
              <p className="text-gray-800 font-semibold">+973 4040 8556</p>
              <p className="text-gray-800 font-semibold">kidskingdom@gmail.com</p>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border">
              <div className="text-green-600 text-3xl mb-2 flex justify-center">
                <img src={time} alt="Time" className="h-10" />
              </div>
              <p className="text-gray-800 font-semibold">{t("weekday_timing")}</p>
              <p className="text-gray-800 font-semibold">{t("weekend_timing")}</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg p-5 shadow-sm border">
              <div className="text-green-600 text-3xl mb-2 flex justify-center">
                <img src={location} alt="Location" className="h-10" />
              </div>
              <p className="text-gray-800 text-sm">{t("branches_list")}</p>
              <p className="text-gray-800 font-semibold mt-1">
                {t("address")}
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-green-700 font-heading text-2xl md:text-4xl font-semibold text-center mb-6">
            {t("suggestions_enquiry")}
          </h2>

          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-sm">{t("form_name")}</label>
              <input
                type="text"
                placeholder={t("placeholder_name")}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-sm">{t("form_mobile")}</label>
                <input
                  type="tel"
                  placeholder={t("placeholder_mobile")}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-sm">{t("form_cpr")}</label>
                <input
                  type="text"
                  placeholder={t("placeholder_cpr")}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 text-sm">{t("form_email")}</label>
                <input
                  type="email"
                  placeholder={t("placeholder_email")}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-sm">{t("form_member")}</label>
                <input
                  type="number"
                  placeholder={t("placeholder_member")}
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm">{t("form_message")}</label>
              <textarea
                placeholder={t("placeholder_message")}
                rows={4}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
              ></textarea>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#FFD42D] hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-md shadow-md"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

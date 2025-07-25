import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";
import chooseusbg from "../../../assets/darkchooseus.png";

export default function ChooseUs() {
  const language = useContext(LanguageContext);
  if (!language) return null; // or show fallback content

  const { t } = language;

  return (
    <section className="relative bg-[#f4f4f4] py-12 px-4 md:px-8 lg:px-20 text-center overflow-hidden" data-aos="fade-up">
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none z-0"
        style={{ backgroundImage: `url(${chooseusbg})` }}
      />
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-10 relative z-10" data-aos="zoom-in"
        data-aos-delay="100"
      >
        {t("choose_us_title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 relative z-10" data-aos="fade-up"
        data-aos-delay="200">
        <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4" data-aos="fade-up"
          data-aos-delay="300">
          <p className="text-lg md:text-xl font-semibold text-black">
            {t("choose_us_card1_title")}
          </p>
          <p className="text-sm md:text-base max-w-sm mx-auto">
            {t("choose_us_card1_desc")}
          </p>
        </div>
        <div className="space-y-3 border-b md:border-b-0 md:border-r border-gray-300 px-6 py-4" data-aos="fade-up"
          data-aos-delay="400">
          <p className="text-lg md:text-xl font-semibold text-black">
            {t("choose_us_card2_title")}
          </p>
          <p className="text-sm md:text-base max-w-sm mx-auto">
            {t("choose_us_card2_desc")}
          </p>
        </div>
        <div className="space-y-3 px-6 py-4" data-aos="fade-up"
          data-aos-delay="500">
          <p className="text-lg md:text-xl font-semibold text-black">
            {t("choose_us_card3_title")}
          </p>
          <p className="text-sm md:text-base max-w-sm mx-auto">
            {t("choose_us_card3_desc")}
          </p>
        </div>
      </div>
    </section>
  );
}

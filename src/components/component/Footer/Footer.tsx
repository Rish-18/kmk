import { useContext } from "react";
import { Mail, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { LanguageContext } from "../../../context/LanguageContext";
import footerbg from "../../../assets/footer-bg.png";
import WebLogoEng from "../../../assets/Web_Logo_KMK_Eng_notext.png";

export default function Footer() {
  const context = useContext(LanguageContext);
  if (!context) return null;
  const { t, lang } = context;

  return (
    <footer className="w-full font-quicksand font-semibold text-base md:text-lg text-white text-center">
      {/* Map section */}
      <div className="w-full h-[250px] md:h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7136145536847!2d50.6504736!3d26.238493399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a9006b685235%3A0xa0b15af591f63cc0!2sKids%20kingdom%20entertainment!5e0!3m2!1sen!2sin!4v1752154042277!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Overlay */}
      <div className="relative bg-black">
        <img
          src={footerbg}
          alt="Ferris Wheel"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        <div className="relative z-10 py-20 px-4 container mx-auto flex flex-col items-center gap-6 md:gap-10 lg:gap-12">
          {/* Logo + Title */}
          <div className="text-center">
            <img src={WebLogoEng} alt="Logo" className="mx-auto w-28 md:w-40 mb-2" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFD42D] font-heading tracking-wider">
              {t("footer_join_title")}
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg lg:text-2xl max-w-xl md:max-w-2xl lg:max-w-4xl px-4">
            {t("footer_description")}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-20 text-base md:text-lg lg:text-xl">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-[#FFD42D]" />
              <a href={`tel:97340408556`}>
                <span dir={lang === "ar" ? "rtl" : "ltr"}>+973 4040 8556</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-[#FFD42D]" />
              {t("footer_email")}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-[#FFD42D]" />
              {t("footer_timing")}
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#FFD42D] font-[800] mb-4 md:mb-6 tracking-wider">
              {t("footer_follow")}
            </h1>
            <div className="flex justify-center gap-3 md:gap-4 lg:gap-6">
              <a href="#" className="bg-[#FFD42D] p-2 md:p-3 lg:p-4 rounded-lg">
                <Facebook className="text-black" size={24} />
              </a>
              <a href="#" className="bg-[#FFD42D] p-2 md:p-3 lg:p-4 rounded-lg">
                <Instagram className="text-black" size={24} />
              </a>
              <a href="#" className="bg-[#FFD42D] p-2 md:p-3 lg:p-4 rounded-lg">
                <Youtube className="text-black" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-green-600">
        <div className="py-3 px-4 container mx-auto text-white text-xs sm:text-sm md:text-base lg:text-lg flex flex-col md:flex-row justify-between items-center">
          <p className="text-center">{t("footer_copyright")}</p>
          <div className="flex gap-2 mt-2 md:mt-0 text-center">
            <a href="#">{t("footer_privacy")}</a>
            <span>|</span>
            <a href="#">{t("footer_terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

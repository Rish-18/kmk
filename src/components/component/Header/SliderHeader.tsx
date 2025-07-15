import { useContext, useState } from "react";
import { Button } from "../../ui/button";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import WebLogoEng from "../../../assets/Web_Logo_KMK_Eng.png";
import manama from "../../../assets/Manama.png";
import marina from "../../../assets/marinabeach.png";
import hidd from "../../../assets/hidd.png";
import riffa from "../../../assets/rafa.png";
import { LanguageContext } from "../../../context/LanguageContext";

export default function SliderHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchesOpenMobile, setIsBranchesOpenMobile] = useState(false);

  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { lang, toggleLang, t } = langContext;

  const marqueeClass = lang === "ar" ? "scroll-right" : "scroll-left";
  return (


    <header className="w-full font-quicksand font-semibold bg-[#F4F4F4]">
      {/* Top Bar */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2 text-[#313131] text-sm lg:text-xl">
        <div className="flex items-center gap-4 md:gap-20 flex-wrap justify-center md:justify-start">
          <img src={WebLogoEng} alt="Logo" className="w-20 h-auto" />
        </div>

        <div className="flex items-center gap-4 md:gap-20 mt-2 md:mt-0">
          <button
            onClick={toggleLang}
            className="bg-white text-black px-4 py-2 rounded"
          >
            {t("lang_switch")}
          </button>
          <div className="flex items-center gap-1 hidden md:inline-flex">
            <div className="bg-[#009D48] p-1 rounded">
              <Phone size={16} className="text-white" />
            </div>
            <span>+973 4040 8556</span>
          </div>
          <Button className="bg-[#FFD42D] text-black hover:bg-yellow-300 shadow-md font-bold text-lg hidden md:inline-flex">
            {t("card_top_up")}
          </Button>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container overflow-hidden">
        <div className={`marquee-track ${marqueeClass}`}>
          <span className="marquee-text">
            {`${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}`}
          </span>
          <span className="marquee-text">
            {`${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}`}
          </span>
        </div>
        <div className={`marquee-track ${marqueeClass}`}>
          <span className="marquee-text">
            {`${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}`}
          </span>
          <span className="marquee-text">
            {`${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}\u00A0\u00A0\u00A0${t("marquee_text")}`}
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#009D48]">
        <div className="container mx-auto px-4 py-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap justify-between items-center text-white text-xl font-semibold">
            <li><Link to="/">{t("home")}</Link></li>
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                {t("branches")} <ChevronDown size={16} />
              </div>
              <ul className="absolute left-0 top-full mt-2 bg-white text-black rounded-lg shadow-lg p-4 w-80 opacity-0 group-hover:opacity-100 group-hover:block invisible group-hover:visible transition-all duration-300 z-50 group-focus-within:visible">
                <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                  <img src={manama} alt="Manama" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_manama")}</span>
                </li>
                <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                  <img src={marina} alt="Marina Beach" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_marina")}</span>
                </li>
                <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                  <img src={hidd} alt="Hidd" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_hidd")}</span>
                </li>
                <li className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
                  <img src={riffa} alt="Riffa" className="w-8 h-8 rounded object-cover" />
                  <span>{t("branch_riffa")}</span>
                </li>
              </ul>
            </li>
            <li><Link to="/offers">{t("offers")}</Link></li>
            <li><Link to="/about">{t("about_us")}</Link></li>
            <li><Link to="/rides">{t("rides")}</Link></li>
            <li><Link to="/blogs">{t("blogs")}</Link></li>
            <li><Link to="/contact">{t("contact_us")}</Link></li>
            <li><Link to="/dining">{t("dining")}</Link></li>
          </ul>

          {/* Mobile Toggle */}
          <div className="flex md:hidden justify-between items-center">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="flex flex-col mt-4 gap-4 text-white text-lg font-semibold">
              <li><Link to="/">{t("home")}</Link></li>

              {/* Mobile Branches Dropdown */}
              <li>
                <button
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsBranchesOpenMobile(!isBranchesOpenMobile)}
                >
                  {t("branches")}{" "}
                  <ChevronDown size={16} className={isBranchesOpenMobile ? "rotate-180 transition" : "transition"} />
                </button>
                {isBranchesOpenMobile && (
                  <ul className="bg-white text-black rounded-lg shadow-lg p-4 w-full mt-2">
                    <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                      <img src={manama} alt="Manama" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_manama")}</span>
                    </li>
                    <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                      <img src={marina} alt="Marina Beach" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_marina")}</span>
                    </li>
                    <li className="flex items-center gap-2 mb-3 hover:opacity-80 cursor-pointer">
                      <img src={hidd} alt="Hidd" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_hidd")}</span>
                    </li>
                    <li className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
                      <img src={riffa} alt="Riffa" className="w-8 h-8 rounded object-cover" />
                      <span>{t("branch_riffa")}</span>
                    </li>
                  </ul>
                )}
              </li>

              {/* Rest of Mobile Nav */}
              <li><Link to="/offers">{t("offers")}</Link></li>
              <li><Link to="/about">{t("about_us")}</Link></li>
              <li><Link to="/rides">{t("rides")}</Link></li>
              <li><Link to="/blogs">{t("blogs")}</Link></li>
              <li><Link to="/contact">{t("contact_us")}</Link></li>
              <li><Link to="/dining">{t("dining")}</Link></li>
              <li className="mx-auto">
                <Link to="/dining">
                  <Button className="bg-[#FFD42D] text-black hover:bg-yellow-300 shadow-md font-bold text-lg">
                    {t("card_top_up")}
                  </Button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

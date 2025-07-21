import { useContext } from "react";
import Slider from "react-slick";
import type { CustomArrowProps } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../context/LanguageContext";

import trampImg from "../../../assets/slider1.jpg";
import carromImg from "../../../assets/slider2.jpg";
import jumpingImg from "../../../assets/slider3.jpg";

const CustomPrev = ({ style, onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-[20px] md:left-[-20px] z-10 top-1/2 -translate-y-1/2"
    style={{ ...style }}
  >
    <ChevronLeft size={32} className="text-black bg-white rounded-full shadow p-1" />
  </button>
);

const CustomNext = ({ style, onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="absolute right-[20px] md:right-[-20px] z-10 top-1/2 -translate-y-1/2"
    style={{ ...style }}
  >
    <ChevronRight size={32} className="text-black bg-white rounded-full shadow p-1" />
  </button>
);

export default function RidesCarousel() {
  const context = useContext(LanguageContext);
  if (!context) return null;
  const { t } = context;

  const rides = [
    {
      title: t("rides_trampoline_title"),
      desc: t("rides_trampoline_desc"),
      img: trampImg,
    },
    {
      title: t("rides_carrom_title"),
      desc: t("rides_carrom_desc"),
      img: carromImg,
    },
    {
      title: t("rides_jumping_title"),
      desc: t("rides_jumping_desc"),
      img: jumpingImg,
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#FFE273] to-[#FFD42D] text-center">
      <h2 className="text-3xl md:text-4xl font-heading text-[#3A3A3A] mb-10">
        {t("rides_section_title")}
      </h2>

      <div className="relative mx-auto max-w-2xl md:max-w-6xl px-4">
        <Slider {...settings}>
          {rides.map((ride, i) => (
            <div key={i} className="px-2">
              <div
                className="relative h-[350px] lg:h-[500px] w-full max-w-[220px] md:max-w-full mx-auto rounded-xl overflow-hidden bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${ride.img})` }}
              >

                <div className="absolute inset-0 bg-black/30 z-[2]" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center z-4">
                  <p className="text-2xl font-bold mb-2">{ride.title}</p>
                  <p className="text-sm line-clamp-5">{ride.desc}</p>
                  <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                    {t("rides_learn_more")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Link to="/rides">
        <button className="mt-10 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
          {t("rides_explore_all")}
        </button>
      </Link>
    </section>
  );
}

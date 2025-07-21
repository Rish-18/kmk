import Footer from '../components/component/Footer/Footer';
// import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.jpg";
import bgframe from "../assets/bg-frame.png";
import diningImg from "../assets/diningmain.png";
import dining1 from "../assets/dining1.png";
import dining2 from "../assets/dining2.png";
import dining3 from "../assets/dining3.png";
import { useContext, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Phone } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/dish5.png";
import SliderHeader from '../components/component/Header/SliderHeader';
import { LanguageContext } from '../context/LanguageContext';

const dishes = [
  { name: "dish1", img: dish1 },
  { name: "dish2", img: dish2 },
  { name: "dish3", img: dish3 },
  { name: "dish4", img: dish4 },
  { name: "dish5", img: dish5 },
] as const;

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

export default function DiningPage() {
  const [open, setOpen] = useState(false);
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
              {t("restaurant_dining_heading")}
            </h1>
          </div>

          <img
            src={bgframe}
            alt="Torn Edge"
            className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
          />
        </div>
      </section>

      {/* Restaurant Card */}
      <section className="py-10 px-4 bg-[#F4F4F4]">
        <div className="container mx-auto p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3">
              <img src={diningImg} alt="Restaurant" className="rounded-lg w-full h-auto" />
            </div>

            <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-row md:flex-col gap-4 md:w-[100px] w-full md:shrink-0 items-center justify-center md:justify-start">
                <img src={dining1} alt="Dish 1" className="w-1/3 md:w-full h-20 md:h-24 rounded object-cover" />
                <img src={dining2} alt="Dish 2" className="w-1/3 md:w-full h-20 md:h-24 rounded object-cover" />
                <img src={dining3} alt="Dish 3" className="w-1/3 md:w-full h-20 md:h-24 rounded object-cover" />
              </div>

              <div className="flex-1 space-y-2">
                <p className="text-xl md:text-2xl font-bold text-green-700">
                  {t("restaurant_name")}
                </p>

                <p className="text-base font-semibold text-gray-800">
                  {t("restaurant_timing")} <span className="font-bold text-black">{t("restaurant_timing_hours")}</span>
                </p>

                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm md:text-md font-bold">{t("veg")}</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-md text-sm md:text-md font-bold">{t("non_veg")}</span>
                </div>

                <p className="text-sm md:text-base lg:text-lg text-gray-800 mt-2">
                  {t("restaurant_desc")}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-[#FFD42D] hover:bg-yellow-300 text-black font-bold text-base md:text-xl px-6 py-2 rounded-md shadow-md">
                        {t("view_menu")}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg bg-white">
                      <h2 className="text-lg font-bold mb-4">{t("menu")}</h2>
                      <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                        <li><span className="font-semibold">{t("menu_starters")}:</span> Veg Spring Rolls, Chicken Lollipop, Paneer Tikka</li>
                        <li><span className="font-semibold">{t("menu_main_course")}:</span> Butter Chicken, Dal Makhani, Veg Biryani, Paneer Butter Masala</li>
                        <li><span className="font-semibold">{t("menu_south_indian")}:</span> Masala Dosa, Idly Vada Combo, Sambar Rice</li>
                        <li><span className="font-semibold">{t("menu_chinese")}:</span> Manchurian Noodles, Schezwan Fried Rice</li>
                        <li><span className="font-semibold">{t("menu_beverages")}:</span> Fresh Lime Soda, Masala Chai, Cold Coffee</li>
                        <li><span className="font-semibold">{t("menu_desserts")}:</span> Gulab Jamun, Ice Cream Scoop</li>
                      </ul>
                    </DialogContent>
                  </Dialog>

                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold text-base md:text-lg px-6 py-2 rounded-md shadow-md flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t("inquiry_now")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dishes Slider */}
      <section className="py-10 bg-[#F4F4F4] px-2 md:px-8">
        <h1 className="text-center text-xl md:text-4xl font-heading font-semibold text-green-700 mb-8">
          {t("special_dishes")}
        </h1>

        <Slider {...sliderSettings}>
          {dishes.map((dish, i) => (
            <div key={i} className="px-3">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-32 md:w-44 h-32 md:h-44 rounded-full object-cover border-2 border-white shadow-md"
                />
                <p className="text-center font-semibold text-sm md:text-base">
                  {t(dish.name)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <Footer />
    </div>
  );
}

import { useContext } from 'react';
import Footer from '../components/component/Footer/Footer';
// import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.jpg";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';
import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import { LanguageContext } from '../context/LanguageContext';

export default function Blog() {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t } = langContext;

  const blogCards = [
    {
      img: blog1,
      title: t("blog_card1_title"),
      desc: t("blog_card1_desc")
    },
    {
      img: blog2,
      title: t("blog_card2_title"),
      desc: t("blog_card2_desc")
    },
    {
      img: blog3,
      title: t("blog_card3_title"),
      desc: t("blog_card3_desc")
    },
    {
      img: blog1,
      title: t("blog_card4_title"),
      desc: t("blog_card4_desc")
    },
    {
      img: blog2,
      title: t("blog_card5_title"),
      desc: t("blog_card5_desc")
    },
    {
      img: blog3,
      title: t("blog_card6_title"),
      desc: t("blog_card6_desc")
    },
  ];

  return (
    <div>
      <SliderHeader />

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
              {t("blog_heading")}
            </h1>
          </div>

          <img
            src={bgframe}
            alt="Torn Edge"
            className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
          />
        </div>
      </section>

      <section className="px-4 py-10 bg-[#F4F4F4] border-none">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <img src={card.img} alt="Blog" className="w-full h-48" />
                <div className="p-4">
                  <p className="text-green-600 font-bold text-lg md:text-2xl">{card.title}</p>
                  <p className="text-gray-800 mt-2 text-sm md:text-base">{card.desc}</p>
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

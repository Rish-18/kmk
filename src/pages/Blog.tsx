import { useContext, useEffect, useState } from 'react';
import Footer from '../components/component/Footer/Footer';
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';
import { LanguageContext } from '../context/LanguageContext';

interface BlogEntry {
  id: number;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  imageUrl: string;
}

export default function Blog() {
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t, lang } = langContext;

  const [blogs, setBlogs] = useState<BlogEntry[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  return (
    <div>
      <SliderHeader />

      {/* Banner */}
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

      {/* Blogs */}
      <section className="px-4 py-10 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <img
                  src={blog.imageUrl}
                  alt={lang === "en" ? blog.title_en : blog.title_ar}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <p className="text-green-600 font-bold text-lg md:text-2xl">
                    {lang === "en" ? blog.title_en : blog.title_ar}
                  </p>
                  <p className="text-gray-800 mt-2 text-sm md:text-base">
                    {lang === "en" ? blog.description_en : blog.description_ar}
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

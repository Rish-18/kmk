import { useContext, useEffect, useState } from 'react';
import Footer from '../components/component/Footer/Footer';
// import bannerVideo from "../assets/bannerVideo.mp4";
import minibanner from "../assets/minibanner.png";
import bgframe from "../assets/bg-frame.png";
import SliderHeader from '../components/component/Header/SliderHeader';
// import carrom from "../assets/carrom.png";
// import karting from "../assets/karting.png";

import trampoline from "../assets/trampoline.jpg";
import arcade from "../assets/Arcade.jpg"
import crazybus from "../assets/crazybus.jpg";
import rockintug from "../assets/rockintug.jpg";
import playarea from "../assets/playarea.jpg";
import ballpit from "../assets/ballpit.jpg";
import delux3dkiddleride from "../assets/delux3dkiddleride.jpg";
import speedbocce from "../assets/speedbocce.jpg";
import jumping from "../assets/jumpin.jpg";
import carousel from "../assets/carousel.jpg";
import hawaiiansurfing from "../assets/hawaiiansurfing.jpg";
import minitrainride from "../assets/minitrainride.jpg";
import boatride from "../assets/boatride.jpg";
import merrygoround from "../assets/merrygoround.jpg";
import disko from "../assets/disko.jpg";

import { LanguageContext } from '../context/LanguageContext';
import en from "../locales/en.json";

type RideLabelKeys = keyof typeof en;

interface RideVariant {
  img: string;
  label: RideLabelKeys;
}

interface RideCard {
  key: string;
  variants: RideVariant[];
}

const cardsData: RideCard[] = [
  {
    key: 'trampoline',
    variants: [
      { img: trampoline, label: 'ride_trampoline1' },
      { img: arcade, label: 'ride_trampoline2' },
      { img: crazybus, label: 'ride_trampoline3' },
    ],
  },
  {
    key: 'carrom',
    variants: [
      { img: rockintug, label: 'ride_carrom1' },
      { img: playarea, label: 'ride_carrom2' },
      { img: ballpit, label: 'ride_carrom3' },
    ],
  },
  {
    key: 'jumping',
    variants: [
      { img: delux3dkiddleride, label: 'ride_jumping1' },
      { img: speedbocce, label: 'ride_jumping2' },
      { img: jumping, label: 'ride_jumping3' },
    ],
  },
  {
    key: 'karting',
    variants: [
      { img: carousel, label: 'ride_karting1' },
      { img: hawaiiansurfing, label: 'ride_karting2' },
      { img: minitrainride, label: 'ride_karting3' },
    ],
  },
  {
    key: 'football',
    variants: [
      { img: boatride, label: 'ride_football1' },
      { img: merrygoround, label: 'ride_football2' },
      { img: disko, label: 'ride_football3' },
    ],
  },
];

export default function Rides() {
  // ✅ Always call hooks at the top
  const [currentIndices, setCurrentIndices] = useState<number[]>(Array(cardsData.length).fill(0));
  const [flipping, setFlipping] = useState<boolean[]>(Array(cardsData.length).fill(false));

  useEffect(() => {
    let cardIndex = 0;

    const flipNextCard = () => {
      setFlipping((prev) => {
        const newState = [...prev];
        newState[cardIndex] = true;
        return newState;
      });

      setTimeout(() => {
        setCurrentIndices((prev) => {
          const newIndices = [...prev];
          newIndices[cardIndex] = (newIndices[cardIndex] + 1) % 3;
          return newIndices;
        });

        setFlipping((prev) => {
          const newState = [...prev];
          newState[cardIndex] = false;
          return newState;
        });

        cardIndex = (cardIndex + 1) % cardsData.length;
        setTimeout(flipNextCard, 1600);
      }, 500);
    };

    flipNextCard();
  }, []);

  // ✅ Use lang context only after hooks
  const langContext = useContext(LanguageContext);
  if (!langContext) return null;
  const { t } = langContext;

  const renderCard = (cardIndex: number, customClass: string = '') => (
    <div className={`relative ${customClass}`}>
      <div className={`flip-card w-full h-full ${flipping[cardIndex] ? 'flip' : ''}`}>
        <img
          src={cardsData[cardIndex].variants[currentIndices[cardIndex]].img}
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-0 right-0 bg-[#009D48] text-white text-xl px-3 py-1">
          {t(cardsData[cardIndex].variants[currentIndices[cardIndex]].label)}
        </span>
      </div>
    </div>
  );

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
            <source src="./" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-[#FFD42D] text-3xl md:text-4xl font-heading tracking-wide">
              {t("explore_rides_heading")}
            </h1>
          </div>

          <img
            src={bgframe}
            alt="Torn Edge"
            className="absolute bottom-[-70px] md:bottom-[-200px] lg:bottom-[-300px] w-full pointer-events-none select-none"
          />
        </div>
      </section>

      <section className="mx-auto p-4 bg-[#F4F4F4] border-none">
        {/* Desktop Layout */}
        <div className="hidden md:flex h-[600px]">
          <div className="w-[30%] h-full">{renderCard(0, 'h-full')}</div>
          <div className="w-[70%] flex flex-col">
            <div className="flex h-[60%]">
              <div className="w-[60%]">{renderCard(1, 'h-full')}</div>
              <div className="w-[40%]">{renderCard(2, 'h-full')}</div>
            </div>
            <div className="flex h-[40%]">
              <div className="w-[50%]">{renderCard(3, 'h-full')}</div>
              <div className="w-[50%]">{renderCard(4, 'h-full')}</div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-4">
          <div>{renderCard(0, 'h-[200px]')}</div>
          <div>{renderCard(1, 'h-[200px]')}</div>
          <div>{renderCard(2, 'h-[200px]')}</div>
          <div>{renderCard(3, 'h-[200px]')}</div>
          <div>{renderCard(4, 'h-[200px]')}</div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

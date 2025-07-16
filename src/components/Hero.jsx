// src/app/[locale]/components/Hero.jsx
"use client"; // Menandakan komponen client

import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard";
import { useTranslations } from 'next-intl';
import avatar from "@/images/avatar.png"; // Import gambar
const imageSrc = avatar.src; // Ambil URL final dari gambar (bukan object)

export default function Hero() {
  const t = useTranslations('Hero');
  const tProfileCard = useTranslations('ProfileCard');

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="min-h-content max-w-screen bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col lg:flex-row items-center justify-center lg:justify-evenly p-4 sm:p-6 md:p-10">
      
      {/* Text Section */}
      <section className="flex flex-col text-justify lg:text-left mt-8 lg:mt-0 max-w-full lg:max-w-[60%] px-4">
        <SplitText
          text={t('title')}
          className="text-5xl sm:text-4xl sm:text-center md:text-6xl lg:text-5xl text-left font-semibold text-white mb-4"
          delay={210}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
          // textAlign="centerz"
        />

        <SplitText
          text={t('description')}
          className="text-base sm:text-lg md:text-xl font-normal text-slate-300 max-w-full lg:max-w-[90%]  lg:mt-10 mb-8 "
          delay={20}
          duration={0.3}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
          textAlign="justify"
        />
      </section>

      {/* Profile Card Section */}
      <section className="mt-8 lg:mt-0">
        <ProfileCard
          name="Zulfian Hamzah"
          title={tProfileCard('title')}
          handle="Muhammad Zulfian"
          status="@julio.hamzah"
          contactText={tProfileCard('contactMe')} 
          avatarUrl={imageSrc} // ✅ path string, bukan object
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => scrollTo("contact")} 
          className="w-max"
          
          
        />
      </section>
    </div>
  );
}

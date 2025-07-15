"use client";

import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import frontend from "@/images/frontend.png";
import backend from "@/images/backend.png";
import ui from "@/images/ui.png";
import mobile from "@/images/mobile.png";



export default function About() {
  const t = useTranslations("About");

  const handleAnimationComplete = () => {
    // console.log("All letters have animated!");
  };

  return (
    <div className="min-h-content bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 py-16 lg:py-24 gap-8">
      
      {/* Text Section */}
      <section id="about" className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
        {/* Title animasi */}
        <SplitText
          text={t("title")}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          delay={210}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* Deskripsi biasa */}
        <div className="space-y-4 max-w-[90%] lg:max-w-full">
          <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed text-justify lg:text-justify">
            {t("description1")}
          </p>
          <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed text-justify lg:text-justify">
            {t("description2")}
          </p>
        </div>
      </section>

      {/* CardSwap Section */}
      <section  className="w-full mb-30 lg:w-1/2 sm:mb-0 flex justify-center">
        <div className="h-30 sm:h-96 sm:w-96 relative flex justify-center">
          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
            <Card>
  <div className="flex flex-col items-center justify-center text-white">
    <Image
      src={frontend.src}
      alt="Front End Developer"
      width={100}
      height={100}
      className="mt-10 mb-3 object-contain"
    />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
      {t("cardFrontendTitle")}
    </h3>
    <p className="text-slate-300 p-2 text-sm sm:text-base text-center">
      {t("cardFrontendDesc")}
    </p>
  </div>
</Card>

<Card>
  <div className="flex flex-col items-center justify-center text-white">
    <Image
      src={backend.src}
      alt="Backend Developer"
      width={100}
      height={100}
      className="mt-10 mb-3 object-contain"
    />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
      {t("cardBackendTitle")}
    </h3>
    <p className="text-slate-300 p-4 text-sm sm:text-base text-center">
      {t("cardBackendDesc")}
    </p>
  </div>
</Card>

<Card>
  <div className="flex flex-col items-center justify-center text-white">
    <Image
      src={ui.src}
      alt="UI Design"
      width={100}
      height={100}
      className="mt-10 mb-3 object-contain"
    />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
      {t("cardUiTitle")}
    </h3>
    <p className="text-slate-300 px-6 text-sm sm:text-base text-center">
      {t("cardUiDesc")}
    </p>
  </div>
</Card>

<Card>
  <div className="flex flex-col items-center justify-center text-white">
    <Image
      src={mobile.src}
      alt="Mobile App Development"
      width={100}
      height={100}
      className="mt-10 mb-3 object-contain"
    />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
      {t("cardMobileTitle")}
    </h3>
    <p className="text-slate-300 p-2 text-sm sm:text-base text-center">
      {t("cardMobileDesc")}
    </p>
  </div>
</Card>

          </CardSwap>
        </div>
      </section>
    </div>
  );
}

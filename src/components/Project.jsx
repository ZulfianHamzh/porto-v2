"use client";

import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import { useTranslations } from "next-intl";
import PixelCard from "@/blocks/Components/PixelCard/PixelCard";
import Image from "next/image";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import merpati from "@/images/merpati.png";
import formriselab from "@/images/formriselab.png";
import prediksi from "@/images/prediksi.jpg";
import qcaap from "@/images/qcapp.jpg";

// Data Proyek
const projects = [
  {
    id: 1,
    date: "16-05-2025",
    img:  merpati,
    url: "https://merpati-express.vercel.app/"
  },
  {
    id: 2,
    date: "28-10-2024",
    img: formriselab,
    url: "https://form.riselab.id/"
  },
  {
    id: 3,
    date: "10-07-2025",
    img: prediksi,
    url: "#"
  },
  {
    id: 4,
    date: "05-06-2025",
    img: qcaap,
    url: "#"
  },
  // {
  //   id: 5,
  //   date: "12 May 2025",
  //   img: "/images/projects/dashboard.png",
  //   url: "https://example.com/dashboard"
  // },
  {
    id: 6,
    date: "08 Okt 2025",
    img: "/images/projects/social.png",
    url: "https://saville.id/"
  },
  // {
  //   id: 7,
  //   date: "03 Mar 2025",
  //   img: "/images/projects/portfolio.png",
  //   url: "https://example.com/portfolio"
  // },
  // {
  //   id: 8,
  //   date: "10 Jan 2025",
  //   img: "/images/projects/logistics.png",
  //   url: "https://example.com/logistics"
  // }
];

export default function Project() {
  const t = useTranslations("Project");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col items-center px-4 sm:px-6 md:px-10 py-16 lg:py-24">
      {/* Title & Description */}
      <header id="projects" className="max-w-3xl text-center mb-12">
        <SplitText
          text={t("title")}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          delay={200}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 leading-relaxed">
          {t("description1")}
        </p>
      </header>

      <AnimatedContent
        distance={160}
        direction="vertical"
        reverse={false}
        duration={3.0}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        {/* Cards */}
        <section className="w-full justify-items-center max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((p) => (
            <PixelCard key={p.id} className="flex flex-col h-full">
              {/* Gambar */}
              <div className="relative w-full overflow-hidden rounded-t-lg">
  <Image
    src={p.img}
    alt={t(`items.${p.id}.title`)}
    width={640} // atur ukuran tetap
    height={480} // 4:3 ratio
    className="w-full h-auto object-cover"
    sizes="(max-width:1024px) 100vw, 25vw"
    priority
  />
</div>


              {/* Konten Teks */}
              <div className="flex flex-col gap-1 p-4 bg-white/10 backdrop-blur-md rounded-b-lg text-white flex-1">
                <h3 className="text-lg font-semibold">{t(`items.${p.id}.title`)}</h3>
                <time className="text-xs text-slate-400">{p.date}</time>
                <p className="text-sm text-slate-300 mt-1 flex-grow">
                  {t(`items.${p.id}.desc`)}
                </p>

                {/* Tombol Link */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-white/20 text-white text-sm px-4 py-2 rounded-md hover:bg-white/30 transition"
                >
                  {t("viewProject")}
                </a>
              </div>
            </PixelCard>
          ))}
        </section>

        {/* Tombol GitHub (di tengah) */}
<div className="w-full flex justify-center mt-10">
  <a
    href="https://github.com/ZulfianHamzh" // ganti dengan GitHub kamu
    target="_blank"
    rel="noopener noreferrer"
    className="text-white bg-[#24292F] hover:bg-[#1c1e22] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
  >
    <svg
      className="w-5 h-5 mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clipRule="evenodd"
      />
    </svg>
    {t("seeMoreGithub")}
  </a>
</div>
<div className="w-full flex flex-col items-center mt-16 px-4">
  {/* Header */}
  <h2 className="text-white text-3xl font-bold mb-20 text-center">
    {t("timeline.header")}
  </h2>

  {/* Timeline Container */}
  <div className="w-5xl max-w-6xl relative">
    {/* Garis Horizontal (Desktop) */}
    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 z-0" />

    {/* Garis Vertikal (Mobile) */}
    <div className="block md:hidden absolute left-1/2 top-0 w-1 h-full bg-white/20 -translate-x-1/2 z-0" />

    {/* Timeline Items */}
    <ul className="relative flex flex-col md:flex-row justify-between items-center md:items-start z-10 gap-14 md:gap-0">
      {[
        "timeline.mac",
        "timeline.imac",
        "timeline.ipod",
        "timeline.iphone",
        // "timeline.watch",
      ].map((key, index) => (
        <li
          key={key}
          className="relative flex flex-col items-center md:w-auto md:flex-1 w-full"
        >
          {/* Label Atas (Desktop - Ganjil) */}
          {index % 2 === 0 && (
            <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 text-white text-sm px-4 py-2 rounded shadow-md min-w-max">
              {t(key)}
            </div>
          )}

          {/* Titik */}
          <div className="z-10 w-5 h-5 bg-white rounded-full border-2 border-slate-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl" />

          {/* Label Bawah (Desktop - Genap) */}
          {index % 2 !== 0 && (
            <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 text-white text-sm px-4 py-2 rounded shadow-md min-w-max">
              {t(key)}
            </div>
          )}

          {/* Label Mobile (Selalu tampil di bawah titik) */}
          <div className="mt-4 md:hidden bg-slate-800 border border-slate-600 text-white text-sm px-4 py-2 rounded shadow-md w-fit max-w-[25%] text-center">
            {t(key)}
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>
      </AnimatedContent>
    </div>
  );
}

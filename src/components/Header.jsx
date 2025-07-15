"use client";

import React, { useState } from "react";
import Dock from "@/blocks/Components/Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscGlobe, VscCallOutgoing } from "react-icons/vsc";
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl'; // Import useTranslations

// --- Komponen LanguageSwitcherDropdown ---
function LanguageSwitcherDropdown({ onClose }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (e) => {
    const nextLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    onClose();
  };

  return (
    <div className="absolute bottom-[80px] right-1/2 translate-x-1/2 bg-slate-800 p-2 rounded-lg shadow-lg z-50 border border-slate-700">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="bg-transparent text-white border-none focus:ring-0 focus:outline-none cursor-pointer"
      >
        <option value="id" className="bg-slate-700 text-white">Bahasa Indonesia</option>
        <option value="en" className="bg-slate-700 text-white">English</option>
      </select>
    </div>
  );
}
// --- Akhir Komponen LanguageSwitcherDropdown ---


export default function Header() {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const t = useTranslations('Header'); // Inisialisasi hook untuk namespace 'Header'

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGlobeClick = () => {
    setShowLanguageSwitcher(prev => !prev);
  };

  const handleCloseLanguageSwitcher = () => {
    setShowLanguageSwitcher(false);
  };

  const items = [
    { icon: <VscHome size={18} />, label: t('home'), onClick: () => scrollTo("home") },
    { icon: <VscAccount size={18} />, label: t('about'), onClick: () => scrollTo("about") },
    { icon: <VscArchive size={18} />, label: t('projects'), onClick: () => scrollTo("projects") },
    { icon: <VscCallOutgoing size={18} />, label: t('contact'), onClick: () => scrollTo("contact") },
    { icon: <VscGlobe size={18} />, label: t('language'), onClick: handleGlobeClick },
  ];

  return (
    <div className="fixed bottom-4 w-full flex justify-center z-50">
      {showLanguageSwitcher && <LanguageSwitcherDropdown onClose={handleCloseLanguageSwitcher} />}
      <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
    </div>
  );
}
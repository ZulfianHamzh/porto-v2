"use client";

import { FaInstagram, FaLinkedin, FaTiktok, FaGithub, FaMailchimp, FaEnvelope } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  const socials = [
    { href: "https://www.instagram.com/julio.hamzah/", Icon: FaInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/zulfian-hamzah-912941201", Icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.tiktok.com/@julio.hmzh", Icon: FaTiktok, label: "TikTok" },
    { href: "https://github.com/ZulfianHamzh", Icon: FaGithub, label: "GitHub" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=muhamad_zulfian@yahoo.com", Icon: FaEnvelope, label: "Email" },
  ];

  return (
    <footer id="contact" className="w-full bg-slate-950 border-t border-slate-800 py-10 px-4 flex flex-col items-center gap-8">
      {/* Social icons */}
      <ul className="flex gap-8">
        {socials.map(({ href, Icon, label }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-300 hover:text-white transition text-xl"
            >
              <Icon />
            </Link>
          </li>
        ))}
      </ul>

      {/* Download CV button */}
      <a
        href="/files/CV.pdf" /* ← taruh file CV di /public/files/CV.pdf */
        download
        className="inline-block bg-white/10 text-white px-6 py-2 rounded-md backdrop-blur-md hover:bg-white/20 transition text-sm font-medium"
      >
        {t("downloadCV")}
      </a>

      {/* Copyright / small text */}
      <p className="mt-4 text-xs text-slate-500">&copy; {new Date().getFullYear()} Zulfian Hamzah</p>
    </footer>
  );
}

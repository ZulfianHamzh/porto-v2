// src/middleware.js
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

// Definisikan bahasa yang didukung dan bahasa default Anda
let locales = ['en', 'id'];
let defaultLocale = 'id';

function getLocale(request) {
  // Mendapatkan bahasa dari header 'Accept-Language' browser
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  let languages = new Negotiator({ headers }).languages();
  // Mencocokkan bahasa yang didukung dengan bahasa browser
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Cek apakah path URL sudah mengandung locale (misal: /en/about atau /id/contact)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Jika URL sudah punya locale, biarkan request berlanjut
  if (pathnameHasLocale) return;

  // Jika URL tidak punya locale, deteksi locale pengguna dan lakukan redirect
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`; // Ubah URL menjadi /<locale>/<original_path>
  return NextResponse.redirect(request.nextUrl); // Redirect pengguna ke URL dengan locale
}

// Konfigurasi matcher agar middleware hanya berjalan pada path yang relevan
export const config = {
  matcher: [
    // Lewati semua path yang dimulai dengan:
    // - api (jalur API)
    // - _next/static (aset statis Next.js)
    // - _next/image (optimasi gambar Next.js)
    // - favicon.ico (favicon situs)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
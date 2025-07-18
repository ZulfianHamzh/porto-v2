// src/app/[locale]/layout.jsx
import { NextIntlClientProvider } from "next-intl";
import { notFound } from 'next/navigation';

// Import the getRequestConfig function from your next-intl config file
// Adjust the path if your next-intl.config.ts/js is not at the root
import getRequestConfig from '../../../next-intl.config'; // Adjust path if needed

// generateStaticParams is crucial for Next.js to know which locales to build
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]; // List all your supported locales
}

export default async function LocaleLayout({ children, params }) {
  // --- PERBAIKAN DI SINI ---
  // Await params to ensure it's resolved before accessing its properties
  const resolvedParams = await params;
  const { locale } = resolvedParams; // Access locale from the awaited params
  // --- AKHIR PERBAIKAN ---

  let messages;
  try {
    // Use getRequestConfig to load messages based on the locale
    // This will use the configuration defined in your next-intl.config.ts/js file
    const config = await getRequestConfig({ locale });
    messages = config.messages;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound(); // Fallback to 404 if messages can't be loaded
  }

  return (
    // NextIntlClientProvider must wrap the children to provide context for useTranslations
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
// src/app/[locale]/layout.jsx
// No need to import 'messa' or 'LocaleProvider' here.
import { NextIntlClientProvider } from "next-intl";
import { notFound } from 'next/navigation'; // Make sure this is imported

// Import the getRequestConfig function from your next-intl config file
// Adjust the path if your next-intl.config.ts/js is not at the root
import getRequestConfig from '../../../next-intl.config'; // Adjust path if needed

// generateStaticParams is crucial for Next.js to know which locales to build
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]; // List all your supported locales
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params; // Correctly access locale from params

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
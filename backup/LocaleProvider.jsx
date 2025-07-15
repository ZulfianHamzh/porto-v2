// src/app/[locale]/LocaleProvider.jsx
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LocaleProvider({ locale, children }) {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    import(`../../../messages/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch(() => notFound());
  }, [locale]);

  if (!messages) return null; // Loading state atau skeleton

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
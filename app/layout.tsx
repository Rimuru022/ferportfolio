import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { I18nProvider } from '@/lib/i18n';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fernando Pérez — Data Operations & Systems Architect',
  description: 'Portfolio of Fernando Pérez, an outcome-driven Systems & Data Architect specializing in backend automation, BI architecture, and RevOps workflows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/shared/header/Header';
import SidePanel from '@/shared/SidePanel';
import IntroCall from '@/features/shared/IntroCall';
import InfoCall from '@/features/shared/InfoCards';
import Footer from '@/features/shared/Footer';

export const metadata: Metadata = {
  title: 'Game Finder Pro',
  description: 'Discover Your Next Favorite Game with Game Finder Pro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-(--color-bg-secondary)">
      <body suppressHydrationWarning className="flex justify-center">
        <div className="flex min-h-screen w-full max-w-[1536px]">
          <div className="sticky top-0 h-screen shrink-0 max-lg:hidden">
            <SidePanel />
          </div>
          <div className="w-full flex-1 pt-4 lg:pt-8">
            <IntroCall />
            <Header />
            <InfoCall />
            <main className="py-6 sm:px-6 xl:px-8 xl:py-10 2xl:px-12">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

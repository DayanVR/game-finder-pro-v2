import type { Metadata } from 'next';
import './globals.css';
import Header from '@/shared/header/Header';
import SidePanel from '@/shared/SidePanel';
import IntroCall from '@/features/shared/IntroCall';
import InfoCall from '@/features/shared/InfoCards';

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
    <html lang="en" className="flex justify-center bg-(--color-bg-secondary)">
      <body suppressHydrationWarning className="flex min-h-screen w-full max-w-[1536px]">
        <div className="sticky top-0 h-screen shrink-0">
          <SidePanel />
        </div>
        <div className="w-full pt-7">
          <IntroCall />
          <Header />
          <InfoCall />
          <main className="px-12 py-6">{children}</main>
          <footer className="bg-black p-6">footer</footer>
        </div>
      </body>
    </html>
  );
}

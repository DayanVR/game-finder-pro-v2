import type { Metadata } from 'next';
import './globals.css';
import Header from '@/shared/header/Header';
import SidePanel from '@/shared/SidePanel';

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
    <html lang="en">
      <body className="ml-72 flex min-h-screen max-w-[1536px] flex-col bg-black pt-6">
        <Header />
        <SidePanel />
        <main className="flex-1 px-12 py-6">{children}</main>
        <footer className="bg-black p-6">footer</footer>
      </body>
    </html>
  );
}

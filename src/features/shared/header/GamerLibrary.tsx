import Link from 'next/link';
import FavBook from '@/svg/FavBook';

export default function GamerLibrary() {
  return (
    <Link
      className="flex w-fit cursor-pointer items-center space-x-3 rounded-full border border-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      href="/gamer-library"
    >
      <FavBook className="text-primary size-6 fill-(--color-accent-primary) transition-transform xl:size-7" />
      <span className="text-xl font-semibold text-white transition-colors xl:text-2xl">
        Gamer Library
      </span>
    </Link>
  );
}

import Link from 'next/link';
import FavBook from '@/svg/FavBook';

export default function GamerLibraryLink() {
  return (
    <Link
      className="flex w-fit bg-(--color-bg-secondary) cursor-pointer items-center space-x-3 rounded-full border border-white/10 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#e7000b]"
      href="/gamer-library"
    >
      <FavBook className="text-primary size-4 fill-(--color-accent-primary) transition-transform xl:size-6" />
      <span className="text-base xl:text-2xl font-semibold text-white transition-colors xl:text-2xl">
        Gamer Library
      </span>
    </Link>
  );
}

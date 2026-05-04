'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from '@/features/shared/gamerLibrary/leftArrow';

export const NavigateBack = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={router.back}
      className="flex w-fit cursor-pointer items-center space-x-3 rounded-full border border-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#e7000b]"
    >
      <ArrowLeft className="size-4 sm:size-6 fill-(--color-accent-primary) transition-transform group-hover:scale-105" />
      <span className="text-base font-semibold text-white transition-colors md:text-lg xl:text-xl">
        Back
      </span>
    </button>
  );
};

import { fetchGameDetails } from '@/features/games/hooks/fetchGamesData';
import { NavigateBack } from '@/features/games/components/navigateBack';
import { Plus } from '@/features/shared/gamerLibrary/addPlus';
import Image from 'next/image';
import { normalizeImage } from '@/features/libs/normalizeImage';
import GameInfo from '@/features/games/components/games/GameInfo';

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gameDetails = await fetchGameDetails(slug);
  console.log(gameDetails?.platforms);
  return (
    <>
      <div className="flex h-full w-full items-center justify-between">
        <NavigateBack />
        <button
          type="button"
          //   onClick={handleAddToLibrary}
          className="group flex cursor-pointer items-center gap-x-3 rounded-full border border-(--color-accent-primary)/50 bg-(--color-accent-primary)/20 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-(--color-accent-primary)/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        >
          <Plus className="size-6 fill-(--color-accent-primary) transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold text-white transition-colors xl:text-xl">
            Add to Library
          </span>
        </button>
      </div>

      <section>
        {gameDetails && (
          <Image
            src={
              normalizeImage(gameDetails.cover?.url.replace('t_thumb', 't_720p')) ??
              '/img-not-found.jpg'
            }
            alt={gameDetails.name ?? ''}
            width={660}
            height={370}
            className="mx-auto aspect-video h-full w-8/12"
          />
        )}

        <div>
          <h1 className="my-6 text-4xl font-semibold text-balance text-(--color-accent-secondary) max-lg:mx-2 max-lg:text-center md:text-5xl lg:w-6/12 lg:pt-4 xl:w-7/12 xl:text-6xl 2xl:w-full">
            {gameDetails ? gameDetails.name : 'Game not found'}
          </h1>

          {gameDetails && <GameInfo gameDetails={gameDetails} />}
        </div>
      </section>
    </>
  );
}

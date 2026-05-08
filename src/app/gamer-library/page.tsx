'use client';
import { TrashCan } from '@/features/shared/gamerLibrary/trashCan';
import { NavigateBack } from '@/features/games/components/navigateBack';
import useGameStore from '@/features/libs/store';
import { useEffect } from 'react';
import GameCard from '@/features/games/components/games/GameCard';

export default function GamerLibraryPage() {
  const { loadGames, clearGames, savedGames } = useGameStore();

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <>
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-2">
        <NavigateBack />
        <button
          type="button"
          onClick={clearGames}
          className="group flex cursor-pointer items-center gap-x-3 rounded-full border border-red-500/50 bg-red-500/20 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
        >
          <TrashCan className="size-6 fill-red-500 transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold text-white transition-colors xl:text-xl">
            Reset Library
          </span>
        </button>
      </div>

      <section className="w-full px-4">
        {savedGames.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center">
            <h1 className="text-2xl font-bold lg:text-4xl">No games added to library</h1>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {savedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

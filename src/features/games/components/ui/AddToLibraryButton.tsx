'use client';

import useGameStore from '@/features/libs/store';
import { Plus } from '@/features/shared/gamerLibrary/addPlus';
import { IGDBGame, IGDBGameListItem, SavedGame } from '@/features/libs/types';

export default function AddToLibraryButton({ game }: { game: IGDBGameListItem }) {
  const toggleGame = useGameStore((s) => s.toggleGame);
  const savedGames = useGameStore((s) => s.savedGames);

  const isSaved = savedGames.some((g) => g.id === game.id);

  const normalizeSavedGame = (game: IGDBGame): SavedGame => ({
    id: game.id,
    slug: game.slug,
    name: game.name,
    cover: game.cover,
    rating: game.rating,
    rating_count: game.rating_count,
    platforms: game.platforms,
  });

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleGame(normalizeSavedGame(game));
      }}
      className="group flex cursor-pointer items-center gap-x-3 rounded-full border border-(--color-accent-primary)/50 bg-(--color-accent-primary)/20 px-6 py-3 backdrop-blur-md transition-all hover:scale-105"
    >
      <Plus className="size-4 fill-(--color-accent-primary) sm:size-6" />

      <span className="text-base font-semibold text-white md:text-lg">
        {isSaved ? 'Saved ✓' : 'Add to Library'}
      </span>
    </button>
  );
}

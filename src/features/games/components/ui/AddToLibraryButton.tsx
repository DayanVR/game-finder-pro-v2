'use client';

import useGameStore from '@/features/libs/store';
import { Plus } from '@/features/shared/gamerLibrary/addPlus';
import { IGDBGame, IGDBGameListItem, SavedGame } from '@/features/libs/types';
import { useUser } from '@clerk/nextjs';
import { supabase } from '@/features/libs/supabase';

export default function AddToLibraryButton({ game }: { game: IGDBGameListItem }) {
  const { user } = useUser();
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
      type="button"
      onClick={async (e) => {
        e.preventDefault();

        if (!user) {
          alert('Please sign in to save games to your library.');
          return;
        }

        const normalizedGame = normalizeSavedGame(game);

        if (isSaved) {
          await supabase.from('saved_games').delete().eq('user_id', user.id).eq('game_id', game.id);

          toggleGame(normalizedGame);
        } else {
          await supabase.from('saved_games').insert({
            user_id: user.id,

            game_id: game.id,
            slug: game.slug,
            name: game.name,

            cover_url: game.cover?.url,

            rating: game.rating,
            rating_count: game.rating_count,
          });

          toggleGame(normalizedGame);
        }
      }}
      className="group flex cursor-pointer items-center gap-x-3 rounded-full border border-(--color-accent-primary)/50 bg-(--color-accent-primary)/20 px-6 py-3 backdrop-blur-md transition-all hover:scale-105 hover:bg-(--color-accent-primary)/60 hover:shadow-[0_0_15px_#e7000b]"
    >
      <Plus className="size-4 fill-(--color-accent-primary) sm:size-6" />

      <span className="text-base font-semibold text-white md:text-lg">
        {isSaved ? 'Saved ✓' : 'Add to Library'}
      </span>
    </button>
  );
}

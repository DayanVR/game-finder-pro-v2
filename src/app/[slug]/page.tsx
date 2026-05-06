import { fetchGameDetails } from '@/features/games/hooks/fetchGamesData';
import { NavigateBack } from '@/features/games/components/navigateBack';
import Image from 'next/image';
import { normalizeImage } from '@/features/libs/normalizeImage';
import GameInfo from '@/features/games/components/games/GameInfo';
import { IGDBGame, SavedGame } from '@/features/libs/types';
import { formattedDate } from '@/features/libs/functions';
import { detailsIcons } from '@/shared/gameDetailsIcons';
import AddToLibraryButton from '@/features/games/components/ui/AddToLibraryButton';

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gameDetails = await fetchGameDetails(slug);

  const { Star, Calendar, Controller, People } = detailsIcons;
  const { game_modes, player_perspectives, genres, themes, rating, rating_count } =
    gameDetails as IGDBGame;

  const formatDate = formattedDate(gameDetails?.first_release_date);

  const ratingComponent = rating ? (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex w-fit items-center gap-x-2 rounded-full bg-(--color-accent-primary)/20 px-3 py-2">
        <Star className="size-5 fill-(--color-accent-primary)" />
        <span className="text-2xl font-semibold text-(--color-accent-primary)">
          {rating.toFixed(0)}
        </span>
        <span className="text-lg text-white/80"> / 100</span>
      </div>
      <span className="text-sm text-white/80 xl:text-base 2xl:text-lg">
        Based on {rating_count?.toLocaleString()} ratings
      </span>
    </div>
  ) : (
    <span className="text-sm text-white/70 xl:text-base 2xl:text-lg">N/A</span>
  );

  return (
    <>
      <div className="mx-4 flex items-center justify-between sm:mx-2">
        <NavigateBack />
        <AddToLibraryButton game={gameDetails as SavedGame} />
      </div>

      <section className="relative flex gap-8 max-md:flex-col">
        <div className="my-3 w-full justify-self-center sm:max-w-[300px] lg:my-8">
          {gameDetails && (
            <div className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-black/50 shadow-2xl shadow-[#e7000b]/30 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={
                  normalizeImage(gameDetails.cover?.url.replace('t_thumb', 't_720p')) ??
                  '/img-not-found.jpg'
                }
                fill={true}
                alt={gameDetails.name ?? ''}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-y-4">
          <h1 className="text-3xl font-semibold text-balance md:text-4xl xl:text-5xl">
            {gameDetails ? gameDetails.name : 'Game not found'}
          </h1>
          {ratingComponent}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {formatDate && (
              <p className="flex items-center gap-2 text-sm text-white/70 xl:text-base 2xl:text-lg">
                <Calendar className="size-4 text-(--color-accent-primary)" />
                {formatDate}
              </p>
            )}
            {player_perspectives && (
              <p className="flex items-center gap-2 text-sm text-white/70 xl:text-base 2xl:text-lg">
                <Controller className="size-6 text-(--color-accent-primary)" />
                {player_perspectives
                  ?.map((player_perspective) => player_perspective.name)
                  .join(', ')}
              </p>
            )}
            {game_modes && (
              <p className="flex items-center gap-2 text-sm text-balance text-white/70 xl:text-base 2xl:text-lg">
                <People className="size-6 text-(--color-accent-primary)" />
                {game_modes?.map((game_mode) => game_mode.name).join(', ')}
              </p>
            )}
          </div>
          <div className="flex gap-3 text-sm text-(--color-accent-primary) xl:text-base 2xl:text-lg">
            {genres?.map((genre) => (
              <p
                className="py-.5 rounded-full border border-(--color-accent-secondary)/40 bg-(--color-accent-secondary)/10 px-2 font-bold"
                key={genre.name}
              >
                {genre.name}
              </p>
            ))}
          </div>
          <div className="flex gap-6 px-2 text-sm xl:text-base 2xl:text-lg">
            {themes?.map((theme) => (
              <p key={theme.name}>{theme.name}</p>
            ))}
          </div>
        </div>
      </section>

      <section>{gameDetails && <GameInfo gameDetails={gameDetails} />}</section>
    </>
  );
}

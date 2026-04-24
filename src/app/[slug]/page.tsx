import { fetchGameDetails } from '@/features/games/hooks/fetchGamesData';
import { NavigateBack } from '@/features/games/components/navigateBack';
import { Plus } from '@/features/shared/gamerLibrary/addPlus';
import Image from 'next/image';
import { normalizeImage } from '@/features/libs/normalizeImage';
import GameInfo from '@/features/games/components/games/GameInfo';
import { IGDBGame } from '../../features/libs/types';
import { formattedDate } from '@/features/libs/functions';
import { detailsIcons } from '@/shared/gameDetailsIcons';

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gameDetails = await fetchGameDetails(slug);

  const { Star, Calendar, Controller, Desktop, Developer, Gallery, People, Suitcase } =
    detailsIcons;
  const {
    platforms,
    game_modes,
    first_release_date,
    involved_companies,
    player_perspectives,
    genres,
    summary,
    storyline,
    videos,
    screenshots,
    themes,
    rating,
    rating_count,
  } = gameDetails as IGDBGame;

  const formatDate = formattedDate(gameDetails?.first_release_date);

  const ratingComponent = rating ? (
    <div className="flex items-center gap-4">
      <div className="flex w-fit items-center gap-x-2 rounded-full bg-(--color-accent-primary)/20 px-4 py-2">
        <Star className="size-5 fill-(--color-accent-primary)" />
        <span className="text-2xl font-semibold text-(--color-accent-primary)">
          {rating.toFixed(0)}
        </span>
        <span className="text-lg text-white/80"> / 100</span>
      </div>
      <span className="text-sm text-white/80">
        Based on {rating_count?.toLocaleString()} ratings
      </span>
    </div>
  ) : (
    <span className="text-sm text-white/70">N/A</span>
  );

  return (
    <>
      <div className="flex h-full w-full items-center justify-between">
        <NavigateBack />
        <button
          type="button"
          //   onClick={handleAddToLibrary}
          className="group flex cursor-pointer items-center gap-x-3 rounded-full border border-(--color-accent-primary)/50 bg-(--color-accent-primary)/20 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-(--color-accent-primary)/30 hover:shadow-[0_0_15px_#e7000b]"
        >
          <Plus className="size-6 fill-(--color-accent-primary) transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold text-white transition-colors xl:text-xl">
            Add to Library
          </span>
        </button>
      </div>

      {/* <div className="from-primary/10 via-background to-background absolute inset-0 bg-gradient-to-b" />
      <div className="from-primary/20 absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] via-transparent to-transparent" /> */}

      <section className="relative flex gap-8">
        <div className="my-3 w-full max-w-[300px] justify-self-center lg:my-8">
          {gameDetails && (
            <div className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-black/50 shadow-2xl shadow-[#e7000b]/20 transition-transform duration-300 hover:scale-[1.02]">
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
          <h1 className="text-4xl font-semibold text-balance md:text-5xl lg:w-6/12 xl:w-7/12 xl:text-6xl 2xl:w-full">
            {gameDetails ? gameDetails.name : 'Game not found'}
          </h1>
          {ratingComponent}
          <div className="flex gap-4">
            {formatDate && (
              <p className="flex items-center gap-2 text-sm text-white/70">
                <Calendar className="size-4 text-(--color-accent-primary)" />
                {formatDate}
              </p>
            )}
            {player_perspectives && (
              <p className="flex items-center gap-2 text-sm text-white/70">
                <Controller className="size-6 text-(--color-accent-primary)" />
                {player_perspectives
                  ?.map((player_perspective) => player_perspective.name)
                  .join(', ')}
              </p>
            )}
            {game_modes && (
              <p className="flex items-center gap-2 text-sm text-white/70">
                <People className="size-6 text-(--color-accent-primary)" />
                {game_modes?.map((game_mode) => game_mode.name).join(', ')}
              </p>
            )}
          </div>
          <div className="flex gap-3 text-(--color-accent-primary) text-sm">
            {genres?.map((genre) => (
              <p
                className="py-.5 rounded-full border border-(--color-accent-secondary)/40 bg-(--color-accent-secondary)/10 px-2 font-bold"
                key={genre.name}
              >
                {genre.name}
              </p>
            ))}
          </div>
          <div className="flex gap-6 px-2 text-sm">
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

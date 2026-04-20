'use client';
import { IGDBGame } from '@/features/libs/types';
import { useState } from 'react';
import ImageGallery from './ImageGallery';
import { formattedDate } from '@/features/libs/functions';

export default function GameInfo({ gameDetails }: { gameDetails: IGDBGame }) {
  const [gameInfo, setGameInfo] = useState<string | undefined>('summary');
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
  } = gameDetails;

  const developerCompany = involved_companies?.find((company) => company.developer);
  const publisherCompany = involved_companies?.find((company) => company.publisher);

  const formatDate = formattedDate(gameDetails?.first_release_date);
  const videoUrl = `https://www.youtube.com/embed/${videos?.[0]?.video_id}`;

  return (
    <>
      <div className="grid grid-cols-2 gap-x-8">
        <dl className="space-y-2 text-pretty [&_dd]:pt-2 [&_dt]:pt-2 [&_dt]:font-semibold">
          {themes?.length !== undefined && themes?.length > 0 && (
            <>
              <dt>Themes:</dt>
              <dd>{themes?.map((theme) => theme.name).join(', ')}</dd>
            </>
          )}
          {first_release_date && (
            <>
              <dt>Release Date:</dt>
              <dd>{formatDate}</dd>
            </>
          )}
          {player_perspectives?.length !== undefined && player_perspectives?.length > 0 && (
            <>
              <dt>Player Perspectives:</dt>
              <dd>
                {player_perspectives
                  ?.map((player_perspective) => player_perspective.name)
                  .join(', ')}
              </dd>
            </>
          )}
          {game_modes?.length !== undefined && game_modes?.length > 0 && (
            <>
              <dt>Game Modes:</dt>
              <dd>{game_modes?.map((game_mode) => game_mode.name).join(', ')}</dd>
            </>
          )}
        </dl>

        <dl className="space-y-2 text-pretty [&_dd]:pt-2 [&_dt]:pt-2 [&_dt]:font-semibold">
          {developerCompany && (
            <>
              <dt>Developer:</dt>
              <dd>{developerCompany?.company.name}</dd>
            </>
          )}
          {publisherCompany && (
            <>
              <dt>Publisher:</dt>
              <dd>{publisherCompany?.company.name}</dd>
            </>
          )}
          {genres?.length !== undefined && genres?.length > 0 && (
            <>
              <dt>Genres:</dt>
              <dd>{genres?.map((genre) => genre.name).join(', ')}</dd>
            </>
          )}
          {platforms?.length !== undefined && platforms?.length > 0 && (
            <>
              <dt>Platforms:</dt>
              <dd>{platforms?.map((platform) => platform.name).join(', ')}</dd>
            </>
          )}
        </dl>
      </div>
      <div className="mx-auto p-2 xl:w-10/12">
        <div className="flex justify-around pb-6 sm:justify-center md:space-x-8 lg:pt-4 xl:pt-8">
          {summary && (
            <>
              <button
                name="Summary"
                className={`cursor-pointer ${gameInfo === 'summary' ? 'bg-(--color-accent-primary) text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-dark-surface/50 hover:bg-dark-surface hover:border-(--color-accent-primary) hover:bg-(--color-accent-primary)/40'} rounded-full border border-white/10 px-6 py-3 transition-all`}
                onClick={() => setGameInfo('summary')}
              >
                Summary
              </button>
            </>
          )}
          {gameDetails?.summary && gameDetails?.storyline && (
            <div className="border-x border-(--color-text-secondary)/60"></div>
          )}
          {storyline && (
            <>
              <button
                name="Storyline"
                className={`cursor-pointer ${gameInfo === 'storyline' ? 'bg-(--color-accent-primary) text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-dark-surface/50 hover:bg-dark-surface hover:border-(--color-accent-primary) hover:bg-(--color-accent-primary)/40'} rounded-full border border-white/10 px-6 py-3 transition-all`}
                onClick={() => setGameInfo('storyline')}
              >
                Storyline
              </button>
            </>
          )}
        </div>
        {gameInfo === 'summary' && <p className="line-clamp-6 xl:mx-7 2xl:text-xl">{summary}</p>}
        {gameInfo === 'storyline' && (
          <p className="line-clamp-6 xl:mx-7 2xl:text-xl">{storyline}</p>
        )}
      </div>
      <div>
        {videos && (
          <div className="space-y-4 py-4 lg:space-y-8 lg:py-8">
            <h2 className="bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary) bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl xl:text-6xl">
              GAMEPLAY TRAILER
            </h2>
            <iframe
              className="mx-auto h-80 w-full rounded-2xl border border-(--color-accent-primary)/60 shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_10px_rgba(139,92,246,1)] md:w-[550px] xl:h-[400px] xl:w-[700px]"
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
        {screenshots && <ImageGallery images={screenshots.map((screenshot) => screenshot.url)} />}
      </div>
    </>
  );
}

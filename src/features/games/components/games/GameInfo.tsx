'use client';
import { IGDBGame } from '@/features/libs/types';
import { useState } from 'react';
import ImageGallery from './ImageGallery';
import { formattedDate } from '@/features/libs/functions';
import { detailsIcons } from '@/features/shared/gameDetailsIcons';

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
  const {Desktop, Developer, Suitcase } =
    detailsIcons;

  const developerCompany = involved_companies?.find((company) => company.developer);
  const publisherCompany = involved_companies?.find((company) => company.publisher);

  const formatDate = formattedDate(gameDetails?.first_release_date);
  const videoUrl = `https://www.youtube.com/embed/${videos?.[0]?.video_id}`;

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-[1fr_1fr_0.5fr] gap-8">
        <div className="col-span-2 mx-auto max-h-96 min-h-64 w-full rounded-2xl border border-white/10 bg-(--color-bg-secondary) py-3 xl:py-4">
          <div className="flex justify-around pb-6 sm:justify-center md:space-x-8 lg:pt-4 xl:pt-6">
            {summary && (
              <>
                <button
                  name="Summary"
                  className={`cursor-pointer ${gameInfo === 'summary' ? 'bg-(--color-accent-primary) text-white shadow-[0_0_10px_#e7000b]' : 'bg-dark-surface/50 hover:bg-dark-surface hover:border-(--color-accent-primary) hover:bg-(--color-accent-primary)/40'} rounded-full border border-white/10 px-6 py-3 font-semibold transition-all`}
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
                  className={`cursor-pointer ${gameInfo === 'storyline' ? 'bg-(--color-accent-primary) text-white shadow-[0_0_10px_#e7000b]' : 'bg-dark-surface/50 hover:bg-dark-surface hover:border-(--color-accent-primary) hover:bg-(--color-accent-primary)/40'} rounded-full border border-white/10 px-6 py-3 font-semibold transition-all`}
                  onClick={() => setGameInfo('storyline')}
                >
                  Storyline
                </button>
              </>
            )}
          </div>
          {gameInfo === 'summary' && (
            <p className="line-clamp-4 text-white/70 xl:mx-7 2xl:text-xl">{summary}</p>
          )}
          {gameInfo === 'storyline' && (
            <p className="line-clamp-4 text-white/70 xl:mx-7 2xl:text-xl">{storyline}</p>
          )}
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-(--color-bg-secondary) px-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-(--color-accent-primary)/20 p-3">
              <Developer className="size-4 text-(--color-accent-secondary)" />
            </div>
            <div>
              <h3 className="text-white/60">DEVELOPER</h3>
              <span className="font-bold">{developerCompany?.company.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-(--chart-5)/10 p-3">
              <Suitcase className="size-4 text-(--chart-5)" />
            </div>
            <div>
              <h3 className="text-white/60">PUBLISHER</h3>
              <span className="font-bold">{publisherCompany?.company.name}</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-(--color-bg-secondary) px-6">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-(--color-accent-primary)/20 p-3">
              <Desktop className="size-4 text-(--color-accent-secondary)" />
            </div>
            <div className="">
              <h3 className="text-white/60">AVAILABLE PLATFORMS</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2.5">
            {platforms?.map((platform) => (
              <span className="rounded-full bg-white/5 px-2 py-1 text-sm" key={platform.id}>
                {platform.name}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-2 row-span-3 row-start-2 h-fit overflow-hidden rounded-2xl border border-white/10 bg-(--color-bg-secondary)">
          {videos && (
            <div className="space-y-4 py-4 lg:space-y-4 lg:pt-10 lg:pb-8">
              <h2 className="mx-6 text-lg font-semibold text-(--color-accent-primary) md:text-xl xl:text-2xl">
                GAMEPLAY <span className="text-white">TRAILER</span>
              </h2>
              <iframe
                className="aspect-video h-80 w-full min-w-full"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
      {screenshots && <ImageGallery images={screenshots.map((screenshot) => screenshot.url)} />}
    </>
  );
}

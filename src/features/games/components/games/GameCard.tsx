import { IGDBGameListItem } from '@/features/libs/types';
import Link from 'next/link';
import { useMemo } from 'react';
import { sidebarIcons } from '@/features/shared/sidebarIcons';
import Image from 'next/image';
import { normalizeImage } from '@/features/libs/normalizeImage';
import { formattedDate } from '@/features/libs/functions';

export default function GameCard({ game }: { game: IGDBGameListItem }) {
  const { Windows, PlayStation, Xbox, Android, IOS, Nintendo } = sidebarIcons;

  const platformIcons = useMemo(() => {
    if (!game.platforms) return [];

    const iconsPlatforms = new Set<string>();
    game.platforms.forEach((platform) => {
      const { id, platform_family } = platform;
      if (id === 6 && !iconsPlatforms.has('windows')) {
        iconsPlatforms.add('windows');
      } else if (platform_family?.id === 1 && !iconsPlatforms.has('playstation')) {
        iconsPlatforms.add('playstation');
      } else if (platform_family?.id === 2 && !iconsPlatforms.has('xbox')) {
        iconsPlatforms.add('xbox');
      } else if (id === 34 && !iconsPlatforms.has('android')) {
        iconsPlatforms.add('android');
      } else if (id === 39 && !iconsPlatforms.has('apple')) {
        iconsPlatforms.add('apple');
      } else if (platform_family?.id === 5 && !iconsPlatforms.has('nintendo')) {
        iconsPlatforms.add('nintendo');
      }
    });
    return [...iconsPlatforms];
  }, [game.platforms]);

  const fullRate = Math.round(game.rating ?? 0);
  const rateColor =
    fullRate >= 80
      ? 'bg-green-500/20 text-green-400'
      : fullRate >= 60
        ? 'bg-yellow-500/20 text-yellow-400'
        : 'bg-red-500/20 text-red-400';

  const formatDate = formattedDate(game?.first_release_date);

  return (
    <Link
      href={`/${game.slug}`}
      className="group relative mx-auto h-[420px] w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-(--color-bg-secondary) shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_#e7000b]"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={
            normalizeImage(game.cover?.url.replace('t_thumb', 't_cover_big')) ??
            '/img-not-found.jpg'
          }
          className="aspect-square h-full w-full object-fill transition-transform duration-700 group-hover:scale-105"
          alt={game.name}
          width={100}
          height={100}
        />

        <div className="absolute inset-0 bg-linear-to-t from-(--color-bg-secondary) via-transparent to-transparent opacity-40" />
      </div>

      <div className="flex h-[180px] flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-1.5">
              {platformIcons.map((icon, index) => (
                <div key={index} className="flex size-5.5 flex-col content-center items-center">
                  {icon === 'windows' && <Windows />}
                  {icon === 'playstation' && <PlayStation />}
                  {icon === 'xbox' && <Xbox />}
                  {icon === 'android' && <Android />}
                  {icon === 'apple' && <IOS />}
                  {icon === 'nintendo' && <Nintendo />}
                </div>
              ))}
            </div>
            <span
              className={`flex w-16 items-center justify-center rounded-full border px-3 py-1 text-sm font-bold backdrop-blur-md ${rateColor}`}
            >
              {fullRate}
            </span>
          </div>

          <h1 className="group-hover:text-primary mt-3 line-clamp-2 text-xl lg:text-2xl text-pretty font-bold text-white transition-colors">
            {game?.name}
          </h1>
        </div>

        <div className="text-base xl:text-lg flex items-center justify-between border-t border-white/10 pt-3 font-medium text-gray-400">
          <span className="flex items-center">
            <span className="mr-1.5 font-semibold text-(--color-accent-primary)">
              {game?.rating_count}
            </span>
            Votes
          </span>
          <span>{formatDate}</span>
        </div>
      </div>
    </Link>
  );
}

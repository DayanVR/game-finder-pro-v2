'use client';

import { Suspense } from 'react';
import useGameStore from '@/features/libs/store';
import Selection from '../Selection';
import { useEffect } from 'react';

const FiltersUI = ({
  q,
  topGames,
  releasedGameDate,
  platformId,
}: {
  q: string | null;
  topGames: boolean | string | undefined;
  releasedGameDate: string | undefined;
  platformId: string | undefined;
}) => {
  const { UITitle, setUITitle } = useGameStore();

  useEffect(() => {
    const titleChange = () => {
      if (releasedGameDate === 'last-month') {
        return setUITitle('Last 30 Days');
      } else if (releasedGameDate === 'last-week') {
        return setUITitle('This Week');
      } else if (topGames === 'top-50') {
        return setUITitle('Top 50');
      } else if (topGames === true) {
        return setUITitle('GOTY Edition');
      } else if (q != undefined) {
        return setUITitle('Searching Games');
      } else if (platformId === '6') {
        return setUITitle('Pc Games');
      } else if (platformId === '2') {
        return setUITitle('Xbox Games');
      } else if (platformId === '1') {
        return setUITitle('PlayStation Games');
      } else if (platformId === '34') {
        return setUITitle('Android Games');
      } else if (platformId === '39') {
        return setUITitle('IOS Games');
      } else if (platformId === '5') {
        return setUITitle('Nintendo Games');
      } else {
        return setUITitle('All Platforms');
      }
    };
    titleChange();
  }, [setUITitle, platformId, q, releasedGameDate, topGames]);

  return (
    <div className="mt-2 mb-10 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-center lg:justify-between">
      <h1 className="text-center text-2xl md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
        {UITitle}
      </h1>
      <Suspense>
        <Selection searchGame={q && q.length > 0 ? true : false} />
      </Suspense>
    </div>
  );
};

export default FiltersUI;

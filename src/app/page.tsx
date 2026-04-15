import { Suspense } from 'react';
import VideoGamesList from '@/features/games/components/ui/VideoGamesList';
import FiltersUI from '@/features/games/components/ui/FiltersUI';
import { handleDateChange } from '@/features/libs/functions';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const q = (params.searchInput as string) || null;
  const sortBy = params.sortBy as string;
  const gotyEdition = (params.topGames as string) || undefined;
  const gameDate = params.releasedGameDate as string;
  const platformID = params.platform as string;

  let topGames;

  if (gotyEdition === 'goty') {
    topGames = true;
  } else {
    topGames = gotyEdition;
  }

  let releasedGameDate;
  if (gameDate) {
    releasedGameDate = handleDateChange(gameDate).toString();
  }

  return (
    <section>
      <FiltersUI
        q={q}
        sortBy={sortBy}
        topGames={topGames}
        releasedGameDate={gameDate}
        platformId={platformID}
      />
      <Suspense>
        <VideoGamesList
          q={q}
          sortBy={sortBy}
          // limit={limit}
          // offset={offset}
          topGames={topGames}
          releasedGameDate={releasedGameDate}
          platformId={platformID}  
          // orderBy={orderBy}
        />
      </Suspense>
    </section>
  );
}

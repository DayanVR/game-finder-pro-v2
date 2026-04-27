import { Suspense } from 'react';
import VideoGamesList from '@/features/games/components/ui/VideoGamesList';
import FiltersUI from '@/features/games/components/ui/FiltersUI';
import { handleDateChange } from '@/features/libs/functions';
import { PaginationComponent } from '@/features/shared/Pagination';

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
  const page = params.page as string;

  let topGames;

  if (gotyEdition === 'goty') {
    topGames = true;
  } else {
    topGames = gotyEdition;
  }
  const orderBy = topGames === 'top-50';
  const limit = orderBy ? 50 : 12;
  const offset = (Number(page) - 1) * limit;

  let releasedGameDate;
  if (gameDate) {
    releasedGameDate = handleDateChange(gameDate).toString();
  }

  return (
    <section className="space-y-10">
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
          limit={limit}
          offset={offset}
          topGames={topGames}
          releasedGameDate={releasedGameDate}
          platformId={platformID}
        />
      </Suspense>
    </section>
  );
}

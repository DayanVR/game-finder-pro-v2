import { fetchGameList } from '../../hooks/fetchGamesData';
import { IGDBGameListItem } from '@/features/libs/types';
import GameCard from '../games/GameCard';
import { PaginationComponent } from '@/features/shared/Pagination';

export default async function VideoGamesList({
  q,
  offset,
  sortBy,
  topGames,
  platformId,
  releasedGameDate,
  limit,
}: {
  q?: string | null;
  offset?: number;
  sortBy?: string;
  topGames?: boolean | undefined | string;
  platformId?: string;
  releasedGameDate?: string;
  limit?: number;
}) {
  const result = await fetchGameList({
    q,
    sortBy,
    topGames,
    releasedGameDate,
    platformId,
    offset,
    limit,
  });

  if (!result) {
    console.error('Failed to fetch game list');
    return;
  }

  const { data, totalPages } = result;
  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 gap-8 px-4 text-white min-[1700px]:grid-cols-4 min-[2560px]:grid-cols-6 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((game: IGDBGameListItem) => (
          <GameCard key={game.id} game={game} />
        ))}
        {data?.length === 0 && (
          <>
            {topGames && releasedGameDate && (
              <div className="col-span-full text-center text-xl text-white">
                No games found.
                <div className="my-6 flex items-center justify-center text-2xl text-red-500">
                  Please select either &quot;Top Games&quot; or &quot;New Releases&quot; filter, not
                  both.
                </div>
              </div>
            )}
            {platformId && (
              <div className="col-span-full text-center text-2xl text-red-500">
                No games found for the selected platform.
              </div>
            )}
          </>
        )}
      </div>
      {data && <PaginationComponent totalPages={totalPages} />}
    </>
  );
}

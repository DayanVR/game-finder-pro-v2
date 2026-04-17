import { IGDBGame, IGDBGameListItem } from '@/features/libs/types';

export const fetchGameList = async ({
  q,
  offset,
  sortBy,
  topGames,
  platformId,
  releasedGameDate,
  orderBy,
}: {
  q?: string | null;
  offset?: number;
  sortBy?: string;
  topGames?: boolean | undefined | string;
  platformId?: string;
  releasedGameDate?: string;
  orderBy?: boolean;
}) => {
  try {
    const searchFields = `
      name,
      cover.url,
      genres.name,
      platforms.name,
      platforms.platform_type,
      platforms.platform_family.*,
      rating,
      rating_count,
      first_release_date,
      slug,
      version_title`;

    const whereFilters = [
      'rating != null',
      topGames === true
        ? `(version_title ~ *"Game of the Year Edition"* | version_title ~ *"GOTY Edition"*)`
        : '',
      platformId === '6' || platformId === '34' || platformId === '39'
        ? `platforms = ${platformId}`
        : '',
      platformId === '1' || platformId === '2' ? `platforms.platform_family = ${platformId}` : '',
      releasedGameDate ? `first_release_date >= ${releasedGameDate}` : '',
    ]
      .filter(Boolean)
      .join(' & ');

    const sortOption =
      sortBy === 'order-asc'
        ? 'rating asc'
        : sortBy === 'name-asc'
          ? 'name asc'
          : sortBy === 'name-desc'
            ? 'name desc'
            : sortBy === 'order-desc'
              ? 'rating desc'
              : undefined;
    const sort = topGames === 'top-50' ? 'rating_count desc' : sortOption;

    const response = await fetch('http://localhost:3001/api/games', {
      method: 'POST',
      headers: {
        'Client-ID': process.env.NEXT_PUBLIC_CLIENT_ID!,
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: searchFields,
        search: q,
        where: whereFilters,
        sort: sort || 'rating_count desc',
        limit: orderBy ? 50 : 12,
        offset: offset || 0,
      }),
    });

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const data: IGDBGameListItem[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game list:', error);
  }
};

export const fetchGameDetails = async (slug: string) => {
  const searchFields = `
              name,
              slug,
              rating,
              rating_count,
              cover.url,
              genres.name,
              game_modes.name,
              involved_companies.company.name,
              involved_companies.*,
              first_release_date,
              storyline,
              summary,
              player_perspectives.name,
              screenshots.url,
              themes.name,
              videos.video_id,
              platforms.name,
              platforms.category,
              platforms.platform_family.*
            `;
  try {
    const response = await fetch(`http://localhost:3001/api/details`, {
      method: 'POST',
      headers: {
        'Client-ID': `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
        Authorization: `${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: searchFields,
        where: `slug = "${slug}"`,
      }),
    });

    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const data = await response.json();
    return (data?.[0] as IGDBGame) || null;
  } catch (error) {
    console.error('Error fetching game details:', error);
  }
};

import { IGDBGame } from '@/features/libs/types';
import { useEffect, useState } from 'react';

export const useFetchGamesData = (slug: string) => {
  const [gameDetails, setGameDetails] = useState<IGDBGame | null>(null);
  useEffect(() => {
    if (!slug) return;

    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/details`, {
          method: 'POST',
          headers: {
            'Client-ID': `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
            Authorization: `${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: 'name, slug, rating, rating_count, cover.url, genres.name, game_modes.name, involved_companies.company.name, first_release_date, storyline, summary, player_perspectives.name, screenshots.url, themes.name, videos.video_id, platforms.name, platforms.category, platforms.platform_family.*',
            where: `slug = "${slug}"`,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        const game: IGDBGame = data?.[0];
        setGameDetails(game);

        return game;
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [slug]);

  return { gameDetails };
};

'use client';
import { useFetchGamesData } from '@/features/games/hooks/fetchGamesData';
import GameCard from '@/features/games/components/GameCard';

export default function Home() {
  const { gameDetails } = useFetchGamesData('halo-infinite');
  console.log(gameDetails);
  return (
    <>
      <h1>Home</h1>
      <div>
        {gameDetails && (
            <GameCard game={gameDetails} />
        )}
      </div>
    </>
  );
}

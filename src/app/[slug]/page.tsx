'use client';
import { useFetchGamesData } from '@/features/games/hooks/fetchGamesData';
import { useParams } from 'next/navigation';

export default function GamePage() {
  const params = useParams();
  const { gameDetails } = useFetchGamesData(params.slug as string);

  console.log(gameDetails)  

  return (
    <>
      <div>
        {gameDetails && (
          <p>{gameDetails.name}</p>
        )}
      </div>
    </>
  );
}

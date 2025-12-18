import { IGDBGame } from "@/features/libs/types";
import Link from "next/link";

export default function GameCard({ game }: { game: IGDBGame }) {
    return (
      <Link href={`/${game.slug}`}
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        className="bg-dark-card hover:border-primary/50 group relative mx-auto h-[420px] w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
      >
        {/* Image/Video Container */}
        <div className="relative h-[240px] w-full overflow-hidden">
          {/* {hover && game?.videos ? (
            <iframe
              title={game.name}
              src={videoSource}
              loading="lazy"
              loop
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          ) : (
          )} */}
          <img
            src={game.cover?.url.replace('t_thumb', 't_cover_big') ?? 'img-not-found.jpg'}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={game.name}
          />
          {/* Gradient Overlay */}
          <div className="from-dark-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />

          {/* Rating Badge */}
          {/* <div className="absolute top-3 right-3">
            <div
              className={`flex items-center justify-center rounded-full border px-3 py-1 text-sm font-bold backdrop-blur-md ${
                fullRate >= 80
                  ? 'border-green-500 bg-green-500/20 text-green-400'
                  : fullRate >= 60
                    ? 'border-yellow-500 bg-yellow-500/20 text-yellow-400'
                    : 'border-red-500 bg-red-500/20 text-red-400'
              }`}
            >
              {fullRate}
            </div>
          </div> */}
        </div>

        <div className="flex h-[180px] flex-col justify-between p-5">
          <div>
            {/* <div className="flex space-x-3 text-gray-400">
              {[...platformIcons].map((icon, index) => (
                <div key={index} className="transition-colors hover:text-white">
                  {icon === 'windows' && (
                    <FontAwesomeIcon icon={faWindows} className="text-sky-500" />
                  )}
                  {icon === 'playstation' && (
                    <FontAwesomeIcon icon={faPlaystation} className="text-blue-500" />
                  )}
                  {icon === 'xbox' && <FontAwesomeIcon icon={faXbox} className="text-green-500" />}
                  {icon === 'android' && (
                    <FontAwesomeIcon icon={faAndroid} className="text-lime-500" />
                  )}
                  {icon === 'apple' && <FontAwesomeIcon icon={faApple} className="text-gray-300" />}
                </div>
              ))}
            </div> */}

            <h1 className="group-hover:text-primary mt-3 line-clamp-2 text-xl font-bold text-white transition-colors">
              {game?.name}
            </h1>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-3 text-sm font-medium text-gray-400">
            <span className="flex items-center">
              <span className="text-primary mr-1">{game?.rating_count}</span> Votes
            </span>
            {/* <span>{formattedDate}</span> */}
          </div>
        </div>
      </Link>
    );
}
import { ArrowLeft } from '@/features/shared/gamerLibrary/leftArrow';
import { TrashCan } from '@/features/shared/gamerLibrary/trashCan';

export default function GamerLibraryPage() {
  return (
    <>
      <section className="flex h-full w-full items-center justify-between">
        <button
          type="button"
          className="flex w-fit cursor-pointer items-center space-x-3 rounded-full border border-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        >
          <ArrowLeft className="size-6 fill-(--color-accent-primary) transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold text-white transition-colors xl:text-xl">
            Back
          </span>
        </button>
        <button
          type="button"
          //   onClick={handleClear}
          className="group flex cursor-pointer items-center gap-x-3 rounded-full border border-red-500/50 bg-red-500/20 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
        >
          <TrashCan className="size-6 fill-red-500 transition-transform group-hover:scale-105" />
          <span className="text-lg font-semibold text-white transition-colors xl:text-xl">
            Reset Library
          </span>
        </button>
      </section>

      <section>
        <div>
          <h1 className="text-4xl font-bold">No games added to library</h1>
        </div>
      </section>
    </>
  );
}

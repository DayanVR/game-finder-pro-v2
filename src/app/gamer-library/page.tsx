import { TrashCan } from '@/features/shared/gamerLibrary/trashCan';
import { NavigateBack } from '@/features/games/components/navigateBack';

export default function GamerLibraryPage() {
  return (
    <>
      <section className="flex h-full w-full items-center justify-between">
        <NavigateBack />
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

      <section className="mt-6 flex h-full w-full items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">No games added to library</h1>
        </div>
      </section>
    </>
  );
}

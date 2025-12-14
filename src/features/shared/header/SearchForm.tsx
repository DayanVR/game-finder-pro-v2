'use client';
import SearchGlass from '@/svg/SearchGlass';

export default function SearchForm() {
  return (
    <form
      //   onSubmit={handleFormSubmit}
      className="mx-lg:md:justify-center w-fit max-lg:mx-auto max-md:space-y-4 sm:w-7/12 md:flex md:w-8/12 md:items-center"
    >
      <div className="group relative block w-full xl:w-9/12 2xl:w-8/12">
        <span className="sr-only">Search</span>
        <span className="pointer-events-none absolute inset-y-3.5 left-0 ml-4 flex size-6 items-center">
          <SearchGlass className="text-(--color-accent-primary)" />
        </span>
        <input
          name="searchInput"
          id="search-input"
          // value={searchInput}
          type="search"
          className="w-full rounded-l-full border border-white/10 bg-(--color-bg-secondary) py-3 pl-12 text-lg font-medium text-white placeholder-gray-400 transition-all focus:ring-1 focus:outline-none max-md:rounded-full"
          placeholder="Find your game..."
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer rounded-r-full border-y border-r border-(--color-accent-primary) bg-(--color-accent-primary) px-8 py-3 text-lg font-bold text-white transition-all hover:bg-(--color-accent-primary)/70 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] max-md:hidden"
      >
        Search
      </button>
    </form>
  );
}

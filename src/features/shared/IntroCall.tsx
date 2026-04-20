export default function IntroCall() {
  return (
    <div className="mx-10 mt-12 flex flex-col items-center gap-y-6 text-center">
      <h1 className="text-5xl font-bold">
        Discover Your Next{' '}
        <span className="bg-linear-to-r from-(--color-accent-primary) to-(--color-accent-secondary) bg-clip-text text-5xl font-bold text-transparent">
          Adventure!
        </span>
      </h1>
      <p className="max-w-2xl text-lg text-white/70 text-pretty">
        Explore thousands of games across all platforms. Find your perfect match with our advanced
        search and filters.
      </p>
    </div>
  );
}

import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import GamerLibraryLink from './GamerLibraryLink';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="mx-10 lg:mx-12 flex items-center justify-between gap-y-5 max-lg:mt-12 max-lg:flex-col lg:mt-8 xl:mt-12">
      <SearchForm />
      <div className="flex items-center gap-4 lg:gap-10">
        <Show when="signed-in">
          <GamerLibraryLink />
          <UserButton  />
        </Show>
        <Show when="signed-out">
          <div className="ml-2 hidden items-center gap-3 pl-4 sm:flex">
            <SignInButton>
              <button
                type="button"
                className="h-10 cursor-pointer rounded-full bg-gray-300/10 px-4 text-sm font-medium text-white transition-all hover:bg-gray-300/30 sm:h-12 sm:px-5 sm:text-base"
              >
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button
                type="button"
                className="h-10 cursor-pointer rounded-full bg-(--color-accent-primary) px-4 text-sm font-medium text-white transition-all hover:bg-(--color-accent-primary)/80 hover:shadow-[0_0_25px_#e7000b] sm:h-12 sm:px-5 sm:text-base"
              >
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </Show>
      </div>
    </header>
  );
}

import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import GamerLibraryLink from './GamerLibraryLink';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="mx-10 flex items-center justify-between gap-y-5 max-lg:mt-12 max-lg:flex-col lg:mt-8">
      <SearchForm />
      <div className="flex items-center gap-4">
        <Show when="signed-in">
          <GamerLibraryLink />
          <UserButton />
        </Show>
        <Show when="signed-out">
          <div className="ml-2 hidden items-center gap-3 pl-4 sm:flex">
            <SignInButton>
              <button type="button" className="h-10 cursor-pointer rounded-full bg-gray-300/10 hover:bg-gray-300/30 px-4 text-sm font-medium text-white transition-colors sm:h-12 sm:px-5 transition-colors sm:text-base">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button type="button" className="h-10 cursor-pointer rounded-full bg-(--color-accent-secondary) hover:bg-(--color-accent-primary) px-4 text-sm font-medium text-white transition-colors sm:h-12 sm:px-5 sm:text-base">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </Show>
      </div>
    </header>
  );
}

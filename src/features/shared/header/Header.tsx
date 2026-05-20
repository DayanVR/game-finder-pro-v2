import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import GamerLibraryLink from './GamerLibraryLink';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="mx-10 flex items-center justify-between gap-y-5 max-lg:mt-12 max-lg:flex-col lg:mt-8">
      <SearchForm />
      <Show when="signed-in">
        <GamerLibraryLink />
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignInButton />
        <SignUpButton>
          <button className="h-10 cursor-pointer rounded-full bg-purple-700 px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
            Sign Up
          </button>
        </SignUpButton>
      </Show>
    </header>
  );
}

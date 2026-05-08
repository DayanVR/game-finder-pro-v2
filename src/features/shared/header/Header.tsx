import { Suspense } from 'react';
import GamerLibraryLink from './GamerLibraryLink';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="mx-10 flex items-center justify-between gap-y-5 max-lg:mt-12 max-lg:flex-col lg:mt-8">
      <Suspense>
        <SearchForm />
      </Suspense>
      <GamerLibraryLink />
    </header>
  );
}

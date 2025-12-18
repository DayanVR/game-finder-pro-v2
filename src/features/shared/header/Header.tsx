import GamerLibraryLink from './GamerLibraryLink';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="mx-10 mb-6 flex items-center justify-between gap-y-5 max-lg:mt-12 max-lg:flex-col lg:mt-6">
      <SearchForm />
      <GamerLibraryLink />
    </header>
  );
}

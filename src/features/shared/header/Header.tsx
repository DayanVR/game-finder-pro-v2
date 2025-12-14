import GamerLibrary from './GamerLibrary';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="mb-6 items-center justify-between mx-10 max-lg:mt-12 lg:mt-6 max-lg:flex-col gap-y-5 flex">
      <SearchForm />
      <GamerLibrary />
    </header>
  );
}

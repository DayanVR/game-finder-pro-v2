'use client';

import { updateURLParam } from '@/features/libs/functions';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';

function Selection(props: { searchGame: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <div className="flex max-md:mx-auto max-md:flex-col max-md:space-y-4 md:justify-between md:space-x-4 lg:space-x-6">
      <label className="invisible absolute text-transparent" htmlFor="sorting">
        Sort by:
      </label>
      <select
        onChange={(e) => updateURLParam('sortBy', e.target.value, router, searchParams, pathname)}
        disabled={props.searchGame}
        className="rounded-md bg-(--primary) px-2 py-2.5 text-white/60 hover:fill-red-400 md:px-6"
        id="sorting"
      >
        <optgroup label="Rating:">
          <option value="order-desc">DESC</option>
          <option value="order-asc">ASC</option>
        </optgroup>
        <optgroup label="Name:">
          <option value="name-asc">A to Z</option>
          <option value="name-desc">Z to A</option>
        </optgroup>
      </select>
      <select
        title="platforms"
        className="rounded-md bg-(--primary) px-2 py-2.5 md:px-6 lg:hidden"
        onChange={(e) => updateURLParam('platform', e.target.value, router, searchParams, pathname)}
      >
        <option value="0">All Platforms</option>
        <option value="6">PC</option>
        <option value="1">PlayStation</option>
        <option value="2">Xbox</option>
        <option value="34">Android</option>
        <option value="39">IOS</option>
      </select>
    </div>
  );
}

export default Selection;

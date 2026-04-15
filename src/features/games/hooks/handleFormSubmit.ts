'use client';

import useGameStore from '@/features/libs/store';
import { useRouter } from 'next/navigation';

export default function useHandleFormSubmit() {
  const { setSearchInput } = useGameStore();
  const router = useRouter();

  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchInputValue = formData.get('searchInput') as string;

    if (!searchInputValue) {
      setSearchInput('');
      router.push(`/`);
      router.refresh();
      return;
    };

    setSearchInput(searchInputValue);
    router.push(`/?searchInput=${encodeURIComponent(searchInputValue)}`);
    router.refresh();
  };
}

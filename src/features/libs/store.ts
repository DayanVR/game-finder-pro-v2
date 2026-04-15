import { create } from 'zustand';

export type StoreGame = {
  searchInput: string;
  setSearchInput: (input: string) => void;
  limit: number;
  setLimit: (limit: number) => void;
  offset: number;
  setOffset: (offset: number) => void;
  sort: string;
  setSort: (sort: string) => void;
  gotyEditions: boolean;
  setGotyEditions: (goty: boolean) => void;
  platformId: string;
  setPlatformId: (platformId: string) => void;
  releasedGameDate: string;
  setReleasedGameDate: (date: string) => void;
  orderBy: string;
  setOrderBy: (orderBy: string) => void;
  UITitle: string;
  setUITitle: (title: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  page: number;
  setPage: (page: number) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

const useGameStore = create<StoreGame>((set) => ({
  searchInput: '',
  setSearchInput: (input) => set({ searchInput: input }),
  limit: 12,
  setLimit: (limit) => set({ limit }),
  offset: 0,
  setOffset: (offset) => set({ offset }),
  sort: '',
  setSort: (sort) => set({ sort }),
  gotyEditions: false,
  setGotyEditions: (goty) => set({ gotyEditions: goty }),
  platformId: '',
  setPlatformId: (platformId) => set({ platformId }),
  releasedGameDate: '',
  setReleasedGameDate: (date) => set({ releasedGameDate: date }),
  orderBy: '12',
  setOrderBy: (orderBy) => set({ orderBy }),
  sortBy: '',
  setSortBy: (sortBy) => set({ sortBy }),
  UITitle: 'All Platforms',
  setUITitle: (title) => set({ UITitle: title }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  page: 1,
  setPage: (page) => set({ page }),
}));

export default useGameStore;

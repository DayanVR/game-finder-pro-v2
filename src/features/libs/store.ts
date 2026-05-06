import { create } from 'zustand';
import { IGDBGameListItem, SavedGame } from '@/features/libs/types';

export type StoreGame = {
  searchInput: string;
  setSearchInput: (input: string) => void;
  UITitle: string;
  setUITitle: (title: string) => void;
  savedGames: SavedGame[];

  addGame: (game: IGDBGameListItem) => void;
  removeGame: (id: number) => void;
  loadGames: () => void;
  toggleGame: (game: SavedGame) => void;
  clearGames: () => void;
};

const useGameStore = create<StoreGame>((set) => ({
  searchInput: '',
  setSearchInput: (input) => set({ searchInput: input }),
  UITitle: 'All Platforms',
  setUITitle: (title) => set({ UITitle: title }),
  savedGames: [],

  addGame: (game) =>
    set((state) => {
      const exists = state.savedGames.find((g) => g.id === game.id);
      if (exists) return state;

      const updated = [...state.savedGames, game];
      localStorage.setItem('savedGames', JSON.stringify(updated));
      return { savedGames: updated };
    }),

  removeGame: (id) =>
    set((state) => {
      const updated = state.savedGames.filter((g) => g.id !== id);
      localStorage.setItem('savedGames', JSON.stringify(updated));
      return { savedGames: updated };
    }),

  loadGames: () => {
    const data = localStorage.getItem('savedGames');
    if (data) {
      set({ savedGames: JSON.parse(data) });
    }
  },
  clearGames: () => {
    localStorage.removeItem('savedGames');
    set({ savedGames: [] });
  },

  toggleGame: (game) => {
    set((state) => {
      const exists = state.savedGames.some((g) => g.id === game.id);

      const updated = exists
        ? state.savedGames.filter((g) => g.id !== game.id)
        : [...state.savedGames, game];

      localStorage.setItem('savedGames', JSON.stringify(updated));

      return { savedGames: updated };
    });
  },
}));

export default useGameStore;

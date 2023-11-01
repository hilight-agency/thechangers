import { create } from 'zustand';

export const useSpeakersStore = create((set) => ({
  opened: false,
  setOpened: () => set((state) => ({ opened: !state.opened })),
  currentitem: false,
  setCurrentItem: (value) => set(() => ({ currentitem: value })),
}));

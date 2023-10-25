import { create } from 'zustand';

export const useStarsStore = create((set) => ({
  show: false,
  setShow: (value) =>
    set(() => ({
      show: value,
    })),
  progress: 0,
  setProgress: (newvalue) =>
    set((state) => ({
      progress: state.progress !== newvalue ? newvalue : state.progress,
    })),
}));
